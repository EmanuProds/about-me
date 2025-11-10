import Header from "@/components/layout/Header";
import Profile from "@/components/ui/Profile";
import Footer from "@/components/layout/Footer";
import TechScroll from "@/components/ui/TechScroll";

export default function Home() {
  return (
    <main className="pt-20">
      <Header />
      <Profile />
      <TechScroll />
      <Footer />
    </main>
  );
}
