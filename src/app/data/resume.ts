export const DATA = {
  name: "Hi! I'm Damien Cren 👋",
  location: "Rennes, FR",
  description:
    "Full stack developer studying in Rennes",
  aboutText: "I'm a full stack developer currently pursuing a Master's degree in Software Engineering at Rennes University. I'm interested in full stack development, artificial intelligence and cloud computing. I strive to write clean, readable and optimized code. I'm also an amateur photographer.",
  stack: ["Next.js", "TypeScript", "Tailwind", "Python", "Java", "MongoDB", "Docker", "PostgresSQL", "Prisma", "Redis", "Terraform"],
  avatarUrl: "/me.jpg",

  socials: [
    {
      label: "@damiencren",
      url: "https://github.com/damiencren",
      icon: "Github",
      variant: "outline",
    },
    {
      label: "Contact",
      url: "mailto:cren.damien@gmail.com",
      icon: "Mail",
      variant: "secondary",
    },
    {
      label: "Resume",
      url: "/CV.pdf",
      icon: "FileText",
      variant: "secondary",
    },
    {
      label: "Photos",
      url: "https://www.instagram.com/dems.cr3",
      icon: "Instagram",
      variant: "secondary",
    }
  ],

  work: [
    {
      company: "Banana.inc",
      href: "https://banana.inc/",
      badges: [],
      location: "Rennes",
      title: "Website development with Next.js",
      logoUrl: "/logos/banana.png",
      start: "June 2025",
      end: "Present",
      description:
        "I managed a Next.js application and a Python API, implementing CI/CD pipelines with GitHub Actions and infrastructure provisioning with Terraform.",
    },
    {
      company: "Miakito",
      href: "https://miakito.ai/",
      badges: [],
      location: "La Bouëxière",
      title: "Building AI agents and developing a website with Next.js",
      logoUrl: "/logos/miakito.png",
      start: "May 2024",
      end: "Oct 2024",
      description:
        "I specialized in developing AI agents for diverse clients and built a monitoring platform for these agents using Next.js.",
    },
  ],
  education: [
    {
      school: "ISTIC - Université Rennes 1",
      href: "https://istic.univ-rennes.fr/",
      degree: "Master's in Computer Science, Software Engineering track (IL)",
      logoUrl: "/logos/istic.jpeg",
      start: "2025",
      end: "2027",
    },
    {
      school: "Université du Québec à Chicoutimi (UQAC)",
      href: "https://www.uqac.ca/",
      degree: "Bachelor's in Computer Science (Double Degree)",
      logoUrl: "/logos/uqac.png",
      start: "2024",
      end: "2024",
    },
    {
      school: "IUT de Laval",
      href: "https://iut-laval.univ-lemans.fr/fr/index.html",
      degree: "University Bachelor of Technology in Computer Science - Application Development track",
      logoUrl: "/logos/iut_laval.jpg",
      start: "2022",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Imaginary",
      url: "imaginary.com",
      href: "https://imaginary-dc.vercel.app/",
      dates: "Nov - Dec 2024",
      active: false,
      description:
        "Imaginary is a web application that lets me store my photos. It uses the Cloudinary CDN to store images.",
      repository: "https://github.com/damiencren/imaginary",
      image: "/screens/imaginary.png",
      technos: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "Spotify Clone",
      url: "",
      href: "",
      dates: "Nov 2024 - Dec 2024",
      active: false,
      description:
        "A clone of the Spotify client that uses the Spotify API and APK. I built this as part of a university project.",
      repository: "https://github.com/damiencren/music_player",
      image: "/screens/proj_3.png",
      technos: ["Vue.js", "JavaScript", "Tailwind"],
    },
    {
      title: "Portfolio",
      url: "damiencren.fr",
      href: "https://damiencren.fr",
      dates: "Sep 2024 - Oct 2024",
      active: true,
      description:
        "I built this portfolio to introduce myself and showcase my web development skills. I share my projects, journey, and skills.",
      repository: "https://github.com/damiencren/portfolio",
      image: "/screens/proj_2.png",
      technos: ["Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "Mace Renovation",
      url: "",
      href: "",
      dates: "Sept 2024 - Oct 2024",
      active: true,
      description:
        "Showcase website built for a client specializing in renovation.",
      repository: "https://github.com/damiencren/mace_website",
      image: "/screens/proj_1.png",
      technos: ["Next.js", "TypeScript", "Tailwind"],
    }
  ],
  hackathons: [
    {
      title: "CS Games 2025",
      dates: "Mar 2025",
      location: "Quebec, CA",
      description:
        "Team hackathon of 10 where I represented my university. Challenges in Data Engineering, Cloud Deployment, and Algorithms.",
      image:
        "/logos/CS_logo.png",
      links: [
      ],
    },
    {
      title: "Nuit de l'Info",
      dates: "Dec 2024",
      location: "Laval, FR",
      description:
        "One-night development of a website to raise awareness about marine ecosystems, drawing a parallel between the human body and the oceans.",
      image:
        "/logos/24h_info_24.png",
      links: [
      ],
    },
    {
      title: "24H de l'Info",
      dates: "May 2023",
      location: "Bourg-en-Bresse, FR",
      description:
        "National hackathon in a team of 4 where I represented my IUT. Website creation, algorithmic problem solving, OSINT ",
      image:
        "/logos/24h_info.png",
      links: [
        {
          href: "https://www.leprogres.fr/education/2023/05/14/24-h-info-la-competition-qui-marquera-l-iut-informatique",
          title: "Article about the event",
        }
      ],
    },
    {
      title: "Nuit de l'info",
      dates: "Dec 2022",
      location: "Laval, FR",
      description:
        "Team development of an application that raises awareness about STDs, STIs, and sexual health. ",
      image:
        "/logos/nuit_info.png",
      links: [
        {
          href: "https://www.ouest-france.fr/pays-de-la-loire/laval-53000/a-laval-une-nuit-pour-developper-une-application-d-information-sur-le-sida-et-la-sante-sexuelle-c6eeba0e-7194-11ed-8d7c-fc31769d4d38",
          title: "Article featuring our team Iclipse on the cover",
        }
      ],
    },
  ],
} as const;
