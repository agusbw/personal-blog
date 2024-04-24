import type { Metadata } from "next";
import Footer from "@/components/footer";
import NavigationBar from "@/components/navigation-bar";

export const metadata: Metadata = {
  title: {
    template: `%s - Bewe`,
    default: "Home - Bewe",
  },
  description: "Bewe's personal blog",
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
