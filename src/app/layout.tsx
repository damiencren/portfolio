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
