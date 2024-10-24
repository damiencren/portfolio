import { title } from "process";

export const DATA = {
  name: "Salut ! Je m'appelle Damien Cren 👋",
  location: "Saguenay CA",
  description:
    "Developpeur full stack en étude à Chicoutimi, Quebec",
  aboutText:"Je développe mes compétences en développement logiciel avec des technologies comme ***[TypeScript](google.com)***, ***[Next.js](google.com)*** et ***[Tailwind](google.com)*** pour le front-end. Côté back-end, je me spécialise en ***[Java](google.com)*** et ***[Python](google.com)***. J’utilise également ***[Git](google.com)*** pour la gestion des versions et ***[SQL](google.com)*** pour les bases de données. En parallèle, je m'intéresse beaucoup à l'intelligence artificielle.",
  avatarUrl: "/me.jpg",

  socials: [
    {
      label: "@damiencren",
      url: "https://github.com/damiencren",
      icon: "Github",
      variant: "outline",
    },
    {
      label: "cren.damien@gmail.com",
      url: "mailto:cren.damien@gmail.com",
      icon: "Mail",
      variant: "secondary",
    },
    {
      label: "CV",
      url: "https://www.instagram.com/damien-photos/",
      icon: "Download",
      variant: "secondary",
    }
  ],

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
        "Ce portfolio a été réaliser afin de me présenter et de montrer mes compétences en développement web. J'y partage mes projets, mon parcours et mes compétences.",
      repository:"https://github.com/damiencren/portfolio",
      image: "/screens/proj_2.png",
      technos : ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Mace Renovation",
      href: "http://57.129.40.117/",
      dates: "Sept 2024 - Oct 2024",
      active: true,
      description:
        "Site vitrine réalisé pour un client spécialisé dans la rénovation. ",
      repository:"https://github.com/damiencren/mace_website",
      image: "/screens/proj_1.png",
      technos : ["Next.js", "TypeScript", "Tailwind CSS"],
    }
  ],
  hackathons: [
    {
      title: "24H de l'Info",
      dates: "May 2023",
      location: "Bourg-en-Bresse, FR",
      description:
      "Hackathon national en équipe de 4 durant lequel j'ai pu représenter mon IUT. Création de site web, résolution de problèmes algorithmiques, OSINT",
      image:
        "/logos/24h_info.png",
      links: [
        {
          href:"https://www.leprogres.fr/education/2023/05/14/24-h-info-la-competition-qui-marquera-l-iut-informatique",
          title:"Article sur l'événement",
        }
      ],
    },
    {
      title: "Nuit de l'info",
      dates: "Dec 2022",
      location: "Laval, FR",
      description:
      "Développement en équipe d'une application qui sensibilise sur les MST, IST et la santé sexuelle. ",
      image:
        "/logos/nuit_info.png",
      links: [
        {
          href:"https://www.ouest-france.fr/pays-de-la-loire/laval-53000/a-laval-une-nuit-pour-developper-une-application-d-information-sur-le-sida-et-la-sante-sexuelle-c6eeba0e-7194-11ed-8d7c-fc31769d4d38",
          title:"Article avec notre Equipe Iclipse en Couverture",
        }
      ],
    },
  ],
} as const;
