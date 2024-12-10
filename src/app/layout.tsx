import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { Footer } from "@/components/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <title>Damien CREN</title>
        <link rel="/favicon.ico" href="/DC.ico"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        <meta name="description" content="Portfolio présentant mes projets, mes compétences ainsi que mon experience en développement web full-stack. Damien CREN" />
        <meta name="keywords" content="Développement, web, freelance, full-stack, Damien, CREN, portfolio, damiencren, Laval, Rennes, Developpeur, informatique" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Damien CREN" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Damien CREN - Portfolio" />
        <meta property="og:description" content="Portfolio présentant mes projets, mes compétences ainsi que mon experience en développement web full-stack." />
        <meta property="og:url" content="damiencren.me" />
        <meta property="og:image" content="/me.jpg" />
        <meta property="og:type" content="website" />
        <meta http-equiv="Content-Language" content="fr"/>
        <link rel="canonical" href="https://damiencren.me" />
        <meta name="theme-color" content="#006106" />
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
