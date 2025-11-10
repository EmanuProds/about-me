import Header from "@/components/layout/Header";
import Profile from "@/components/ui/Profile";
import TechScroll from "@/components/ui/TechScroll";
import About from "@/components/ui/About";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="pt-20">
      <Header />
      <Profile />
      <TechScroll />
      <About />
      <Footer />
    </main>
  );
}
