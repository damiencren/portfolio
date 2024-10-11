export const DATA = {
  name: "Salut ! Je m'appelle Damien Cren 👋",
  location: "Saguenay CA",
  description:
    "Developpeur full stack en 3eme année d'étude à Chicoutimi, Quebec",
  aboutText:"Je développe mes compétences en développement logiciel avec des technologies comme TypeScript, Next.js et Tailwind pour le front-end. Côté back-end, je me spécialise en Java et Python. J’utilise également Git pour la gestion des versions et SQL pour les bases de données. En parallèle, je m'intéresse beaucoup à l'intelligence artificielle.",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Java",
    "C++",
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/dillion-github",
        //icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/dillion-linkedin",
        //icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        //icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        //icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        //con: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Miakito",
      href: "https://miakito.ai/",
      badges: [],
      location: "La Bouëxière Half-Remote",
      title: "Création d'agents IA et développement de site web avec Next.js",
      logoUrl: "/logos/miakito.png",
      start: "May 2024",
      end: "Oct 2024",
      description:
        "Je me suis consacré à la création d'agents IA pour divers clients et j'ai également développé un site web de monitoring pour ces agents en utilisant Next.js",
    },
  ],
  education: [
    {
      school: "Université du Quebec à Chicoutimi (UQAC)",
      href: "https://www.uqac.ca/",
      degree: "Baccalaureat Informatique Double-Diplome",
      logoUrl: "/logos/uqac.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "IUT de Laval",
      href: "https://iut-laval.univ-lemans.fr/fr/index.html",
      degree: "DUT Informatique - Parcorus Réalisation d'applications",
      logoUrl: "/logos/iut_laval.jpg",
      start: "2022",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "This portfolio",
      href: "/",
      dates: "Sept 2024 - Oct 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
        },
      ],
      image: "/screens/proj_2.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "This portfolio",
      href: "/",
      dates: "Sept 2024 - Oct 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
        },
      ],
      image: "/screens/proj_1.png",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Mace Renovation",
      href: "/",
      dates: "Sept 2024 - Oct 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    }
  ],
  hackathons: [
    {
      title: "24H de l'Info",
      dates: "May 2024",
      location: "Bourg-en-Bresse, FR",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/logos/24h_info.png",
      links: [],
    },
    {
      title: "Nuit de l'info",
      dates: "Dec 2022",
      location: "Laval, FR",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/logos/nuit_info.png",
      links: [
        {
          href:"https://www.ouest-france.fr/pays-de-la-loire/laval-53000/a-laval-une-nuit-pour-developper-une-application-d-information-sur-le-sida-et-la-sante-sexuelle-c6eeba0e-7194-11ed-8d7c-fc31769d4d38",
          title:"Article avec notre Equipe en Couverture Eheh"
        }
      ],
    },
  ],
} as const;
