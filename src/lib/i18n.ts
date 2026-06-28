/**
 * i18n translations for Amy & Sebastian Wedding Website
 * Languages: English (en) and German (de)
 * German uses informal "Du" form throughout
 */

export type Lang = "en" | "de";

export const t = {
  en: {
    // Navigation
    nav: {
      ourDay: "Our Day",
      venue: "Venue",
      stay: "Stay",
      gettingHere: "Getting Here",
      guestInfo: "Guest Info",
      transport: "Transport",
      traditions: "Traditions",
      eastLothian: "East Lothian",
      contact: "Contact",
    },
    // Password gate
    gate: {
      invite: "You are warmly invited to celebrate",
      guestsOnly: "This website is for our guests only.",
      enterPassword: "Please enter the password from your save-the-date card.",
      placeholder: "Enter password",
      enter: "Enter",
      incorrect: "Incorrect password. Please try again.",
    },
    // Hero
    hero: {
      pre: "You are warmly invited to celebrate",
      date: "Saturday, 8 May 2027",
      location: "Archerfield, East Lothian, Scotland",
    },
    // Countdown
    countdown: {
      label: "Counting down to the big day…",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
    },
    // Schedule
    schedule: {
      sectionLabel: "The Weekend",
      title: "Our Day",
      intro: "A weekend of celebration on the East Lothian coast. Here is everything you need to know about the schedule.",
      saturday: "Saturday, 8 May 2027",
      sunday: "Sunday, 9 May 2027",
      events: [
        {
          time: "2:00 pm",
          title: "Wedding Ceremony",
          description: "Our Lady Star of the Sea, Law Road, North Berwick EH39 4PN. A beautiful Catholic church overlooking the town, founded in 1879.",
          icon: "⛪",
        },
        {
          time: "3:30 pm",
          title: "Drinks and Canapes",
          description: "We head straight to The Waterfront at Archerfield after the ceremony. Join us for drinks and canapes as we celebrate together on the East Lothian coast.",
          icon: "🥂",
        },
        {
          time: "7:00 pm",
          title: "Wedding Dinner",
          description: "Dinner is served at The Waterfront, Archerfield Estate, Dirleton, East Lothian EH39 5HU. An evening of food, dancing, and celebration with the people we love most.",
          icon: "🍽",
        },
        {
          time: "Morning",
          title: "Sunday Breakfast",
          description: "A relaxed morning breakfast at the Archerfield Clubhouse for those who wish to join us. A lovely chance to continue the celebrations before heading home.",
          icon: "☕",
          sunday: true,
        },
        {
          time: "After breakfast",
          title: "Farewell",
          description: "Safe travels home. Thank you for being part of our day.",
          icon: "✈️",
          sunday: true,
        },
      ],
    },
    // Guest info cards
    guestInfo: {
      sectionLabel: "Good to Know",
      title: "Guest Information",
      intro: "Everything you need to know before the big day.",
      quote: "We cannot wait to celebrate with you on the East Lothian coast.",
      cards: [
        {
          icon: "👶",
          title: "Children Welcome",
          body: "Your children are warmly welcome to join us for the celebration. The Waterfront venue is fully gated with ample outdoor space, beach access, and high fencing for safety. While all parents remain responsible for their children, we will have supervised children's activities throughout the day including games, face painting, and kids' movies. We want our day to be a joy for the whole family.",
        },
        {
          icon: "🍽",
          title: "Dietary Requirements",
          body: "Please let us know of any dietary requirements or allergies when you RSVP. We want to make sure everyone is well fed and happy.",
        },
        {
          icon: "🎁",
          title: "Gifts",
          body: "We truly do not expect any gifts. Your presence and the effort of travelling to be with us is the greatest gift we could ask for.",
        },
        {
          icon: "💬",
          title: "WhatsApp Group",
          body: "If you are planning to attend, please join our wedding WhatsApp group. This is where we will share updates, logistics, and any last-minute information closer to the day.",
          whatsapp: true,
        },
        {
          icon: "📬",
          title: "Save the Date",
          body: "Save-the-date cards will be sent by post in July 2026. Formal invitations will follow closer to the wedding. If you have not received yours, please get in touch.",
        },
        {
          icon: "📸",
          title: "Photos",
          body: "We will be sharing a gallery on this website after the wedding so that everyone can relive the memories. Check back here after the big day!",
        },
      ],
    },
    // Contact
    contact: {
      sectionLabel: "Get in Touch",
      title: "Contact Us",
      intro: "For general wedding questions and updates, please use our WhatsApp group. For a private message to Amy and Sebastian, use the form below.",
      whatsappTitle: "WhatsApp Group",
      whatsappLabel: "General Enquiries",
      whatsappBody: "Join our wedding WhatsApp group for updates, logistics, and to connect with other guests. This is the best place for any general questions about the wedding weekend.",
      joinButton: "Join WhatsApp Group",
      formTitle: "Send a Message",
      formLabel: "Private Message",
      namePlaceholder: "Jane Smith",
      emailPlaceholder: "jane@example.com",
      subjectPlaceholder: "e.g. Question about accommodation",
      messagePlaceholder: "Your private message to Amy and Sebastian...",
      sendButton: "Send Message",
      sending: "Sending...",
      privacy: "Your message will be sent privately to Amy and Sebastian only.",
      successTitle: "Message Sent!",
      successBody: "Thank you. We will get back to you soon.",
      sendAnother: "Send another",
    },
    // Footer
    footer: {
      madeWith: "Made with love",
    },
  },

  de: {
    nav: {
      ourDay: "Unser Tag",
      venue: "Locations",
      stay: "Unterkunft",
      gettingHere: "Anreise",
      guestInfo: "Gästeinfo",
      transport: "Transport",
      traditions: "Traditionen",
      eastLothian: "East Lothian",
      contact: "Kontakt",
    },
    gate: {
      invite: "Wir laden Dich herzlich ein, mit uns zu feiern",
      guestsOnly: "Diese Website ist nur für unsere Gäste.",
      enterPassword: "Bitte gib das Passwort von Deiner Save-the-Date-Karte ein.",
      placeholder: "Passwort eingeben",
      enter: "Weiter",
      incorrect: "Falsches Passwort. Bitte versuche es erneut.",
    },
    hero: {
      pre: "Wir laden Dich herzlich ein, mit uns zu feiern",
      date: "Samstag, 8. Mai 2027",
      location: "Archerfield, East Lothian, Schottland",
    },
    countdown: {
      label: "Der Countdown läuft…",
      days: "Tage",
      hours: "Stunden",
      minutes: "Minuten",
      seconds: "Sekunden",
    },
    schedule: {
      sectionLabel: "Das Wochenende",
      title: "Unser Tag",
      intro: "Ein Feierlichkeitswochenende an der Küste von East Lothian. Hier findest Du alles, was Du über den Ablauf wissen musst.",
      saturday: "Samstag, 8. Mai 2027",
      sunday: "Sonntag, 9. Mai 2027",
      events: [
        {
          time: "14:00 Uhr",
          title: "Trauungszeremonie",
          description: "Our Lady Star of the Sea, Law Road, North Berwick EH39 4PN. Eine wunderschöne katholische Kirche mit Blick auf die Stadt, gegründet 1879.",
          icon: "⛪",
        },
        {
          time: "15:30 Uhr",
          title: "Sektempfang und Häppchen",
          description: "Nach der Zeremonie fahren wir direkt zum The Waterfront in Archerfield. Stoß mit uns an und feiere mit uns an der Küste von East Lothian.",
          icon: "🥂",
        },
        {
          time: "19:00 Uhr",
          title: "Hochzeitsessen",
          description: "Das Abendessen wird im The Waterfront, Archerfield Estate, Dirleton, East Lothian EH39 5HU serviert. Ein Abend voller Essen, Tanzen und Feiern mit den Menschen, die wir am meisten lieben.",
          icon: "🍽",
        },
        {
          time: "Morgens",
          title: "Sonntagsfrühstück",
          description: "Ein entspanntes Morgenfrühstück im Archerfield Clubhouse für alle, die sich uns anschließen möchten. Eine schöne Gelegenheit, die Feierlichkeiten fortzusetzen, bevor alle nach Hause fahren.",
          icon: "☕",
          sunday: true,
        },
        {
          time: "Nach dem Frühstück",
          title: "Auf Wiedersehen",
          description: "Gute Heimreise. Danke, dass Du Teil unseres Tages warst.",
          icon: "✈️",
          sunday: true,
        },
      ],
    },
    guestInfo: {
      sectionLabel: "Gut zu wissen",
      title: "Gäste-Informationen",
      intro: "Alles, was Du vor dem großen Tag wissen musst.",
      quote: "Wir können es kaum erwarten, mit Dir an der Küste von East Lothian zu feiern.",
      cards: [
        {
          icon: "👶",
          title: "Kinder willkommen",
          body: "Deine Kinder sind herzlich willkommen. Das Veranstaltungsgelände The Waterfront ist vollständig eingezäunt mit viel Platz im Freien, Strandzugang und hohen Zäunen für die Sicherheit. Alle Eltern bleiben für ihre Kinder verantwortlich, aber wir bieten betreute Kinderaktivitäten an, darunter Spiele, Kinderschminken und Kinderfilme. Wir möchten, dass unser Tag für die ganze Familie ein Freudentag ist.",
        },
        {
          icon: "🍽",
          title: "Ernährungsbedürfnisse",
          body: "Bitte teile uns bei Deiner Rückmeldung etwaige Ernährungsbedürfnisse oder Allergien mit. Wir möchten sicherstellen, dass alle gut versorgt und glücklich sind.",
        },
        {
          icon: "🎁",
          title: "Geschenke",
          body: "Wir erwarten wirklich keine Geschenke. Deine Anwesenheit und die Mühe, die Du auf Dich nimmst, um bei uns zu sein, ist das größte Geschenk, das wir uns wünschen können.",
        },
        {
          icon: "💬",
          title: "WhatsApp-Gruppe",
          body: "Wenn Du planst teilzunehmen, tritt bitte unserer Hochzeits-WhatsApp-Gruppe bei. Dort werden wir Updates, Logistik und alle kurzfristigen Informationen teilen.",
          whatsapp: true,
        },
        {
          icon: "📬",
          title: "Save the Date",
          body: "Save-the-Date-Karten werden im Juli 2026 per Post verschickt. Formelle Einladungen folgen näher am Hochzeitstermin. Falls Du noch keine erhalten hast, melde Dich bitte bei uns.",
        },
        {
          icon: "📸",
          title: "Fotos",
          body: "Nach der Hochzeit werden wir eine Galerie auf dieser Website teilen, damit alle die Erinnerungen nochmals erleben können. Schau nach dem großen Tag wieder vorbei!",
        },
      ],
    },
    contact: {
      sectionLabel: "Kontakt aufnehmen",
      title: "Kontakt",
      intro: "Für allgemeine Hochzeitsfragen und Updates nutze bitte unsere WhatsApp-Gruppe. Für eine private Nachricht an Amy und Sebastian nutze das Formular unten.",
      whatsappTitle: "WhatsApp-Gruppe",
      whatsappLabel: "Allgemeine Anfragen",
      whatsappBody: "Tritt unserer Hochzeits-WhatsApp-Gruppe bei, um Updates zu erhalten, die Logistik zu besprechen und Dich mit anderen Gästen zu vernetzen.",
      joinButton: "WhatsApp-Gruppe beitreten",
      formTitle: "Nachricht senden",
      formLabel: "Private Nachricht",
      namePlaceholder: "Maria Müller",
      emailPlaceholder: "maria@beispiel.de",
      subjectPlaceholder: "z.B. Frage zur Unterkunft",
      messagePlaceholder: "Deine private Nachricht an Amy und Sebastian...",
      sendButton: "Nachricht senden",
      sending: "Wird gesendet...",
      privacy: "Deine Nachricht wird nur an Amy und Sebastian weitergeleitet.",
      successTitle: "Nachricht gesendet!",
      successBody: "Vielen Dank. Wir melden uns bald bei Dir.",
      sendAnother: "Weitere Nachricht senden",
    },
    footer: {
      madeWith: "Mit Liebe gemacht",
    },
  },
} as const;

export type Translations = typeof t.en;
