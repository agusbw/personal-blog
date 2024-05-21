import type { Metadata } from "next";
import Footer from "@/components/footer";
import NavigationBar from "@/components/navigation-bar";

export const metadata: Metadata = {
  title: {
    template: `%s - Bewe`,
    default: "Home - Bewe",
  },
  description: "Tulisan-tulisan random yang terkadang serius.",
  openGraph: {
    title: {
      template: `%s - Bewe`,
      default: "Home - Bewe",
    },
    type: "article",
    images: "https://snapy.yenkzera.tech/get?url=https://bewe-blog.vercel.app",
    description: "Tulisan-tulisan random yang terkadang serius.",
    url: "https://bewe-blog.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    site: "@agusbw_",
    description: "Tulisan-tulisan random yang terkadang serius.",
    title: {
      template: `%s - Bewe`,
      default: "Home - Bewe",
    },
    images: "https://snapy.yenkzera.tech/get?url=https://bewe-blog.vercel.app",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex flex-col px-6 py-10 lg:w-3/5 mx-auto font-montserrat">
      <NavigationBar />
      <section className="flex-1">{children}</section>
      <Footer />
    </main>
  );
}
