import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import Script from "next/script";

const inter = Montserrat({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        async
        strategy="lazyOnload"
        src={process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL}
        data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      />
      <body className={cn(inter.className, "antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
