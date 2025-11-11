import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Profile from "@/components/ui/Profile";
import TechScroll from "@/components/ui/TechScroll";
import About from "@/components/ui/About";
import Projects from "@/components/ui/Projects";
import Academic from "@/components/ui/Academic";

const SECTIONS = [
  Profile,
  TechScroll,
  About,
  Projects,
  Academic,
] as const;

export default function Home() {
  return (
    <main className="pt-12 md:pt-20">
      <Header />
      {SECTIONS.map((Section, index) => (
        <Section key={index} />
      ))}
      <Footer />
    </main>
  );
}
