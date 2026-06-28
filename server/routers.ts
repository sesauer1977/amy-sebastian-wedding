import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const RECIPIENTS = ["amycarmichael@hotmail.co.uk", "sesauer@gmail.com"];
const FROM_NAME = "Amy & Seb Wedding Website";
const FROM_EMAIL = "onboarding@resend.dev"; // Resend default sender domain

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  contact: router({
    send: publicProcedure
      .input(
        z.object({
          name: z.string().min(1).max(100),
          email: z.string().email(),
          subject: z.string().min(1).max(200),
          message: z.string().min(10).max(2000),
        })
      )
      .mutation(async ({ input }) => {
        const { name, email, subject, message } = input;

        const html = `
          <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8f6f1; border-radius: 8px;">
            <div style="text-align: center; margin-bottom: 24px;">
              <h2 style="font-family: Georgia, serif; color: #2a4a35; font-size: 22px; font-weight: 400; margin: 0;">
                Amy &amp; Sebastian — Wedding Website
              </h2>
              <p style="color: #6b8f71; font-size: 13px; margin: 4px 0 0;">New private message from a guest</p>
            </div>
            <hr style="border: none; border-top: 1px solid #c8d9c0; margin: 0 0 24px;" />
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #6b8f71; font-weight: bold; width: 80px; vertical-align: top;">FROM</td>
                <td style="padding: 8px 0; font-size: 14px; color: #2a4a35;">${name} &lt;${email}&gt;</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-size: 13px; color: #6b8f71; font-weight: bold; vertical-align: top;">SUBJECT</td>
                <td style="padding: 8px 0; font-size: 14px; color: #2a4a35;">${subject}</td>
              </tr>
            </table>
            <div style="background: #fff; border-radius: 6px; padding: 20px; border: 1px solid #dde8d6;">
              <p style="font-size: 14px; color: #444; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
            </div>
            <p style="font-size: 12px; color: #999; margin-top: 24px; text-align: center;">
              To reply, email ${email} directly.
            </p>
          </div>
        `;

        const { error } = await resend.emails.send({
          from: `${FROM_NAME} <${FROM_EMAIL}>`,
          to: RECIPIENTS,
          replyTo: email,
          subject: `[Wedding Website] ${subject}`,
          html,
        });

        if (error) {
          console.error("[Resend] Failed to send contact email:", error);
          throw new Error("Failed to send message. Please try again.");
        }

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
