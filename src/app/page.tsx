import Header from "@/components/Header";
import Profile from "@/components/Profile";
import TechScroll from "@/components/TechScroll";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Academic from "@/components/Academic";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Profile />
      <TechScroll />
      <About />
      <Projects />
      <Academic />
      <Footer />
    </main>
  );
}
