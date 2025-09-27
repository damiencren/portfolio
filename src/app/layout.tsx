import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { Footer } from "@/components/footer";
import { TooltipProvider } from "@/components/ui/tooltip";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Damien Cren — Full‑Stack Developer Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <meta name="description" content="Portfolio of Damien Cren, full‑stack web developer. Explore projects, experience, and technical skills." />
        <meta name="keywords" content="development, web, freelance, full‑stack, Damien, Cren, portfolio, damiencren, Laval, Rennes, developer, software, developpeur, freelance, informatique, service, projets" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Damien Cren" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Damien Cren — Portfolio" />
        <meta property="og:description" content="Portfolio showcasing projects, experience, and technical skills in full‑stack web development." />
        <meta property="og:url" content="https://damiencren.me" />
        <meta property="og:image" content="/me.jpg" />
        <meta property="og:type" content="website" />
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
          <TooltipProvider delayDuration={100}>
            {children}
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
