import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { Footer } from "@/components/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Damien CREN</title>
        <link rel="/favicon.ico" href="/DC.ico"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        <meta name="description" content="Portfolio présentant les projets de développement web et les compétences de Damien CREN, développeur freelance full-stack." />
        <meta name="keywords" content="Développement, web, freelance, full-stack, Damien, CREN, portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Damien CREN" />
        <meta name="robots" content="index, follow" />
        {/* <meta property="og:title" content="Titre de votre page pour les réseaux sociaux" />
        <meta property="og:description" content="Description de votre page pour les réseaux sociaux" />
        <meta property="og:image" content="URL de l'image à afficher sur les réseaux sociaux" />
        <meta property="og:url" content="URL de votre page" /> */}
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
            {children}
            <Footer/>
          </ThemeProvider>
      </body>
    </html>
  );
}
