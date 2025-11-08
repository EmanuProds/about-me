import Header from "@/components/Header";
import Profile from "@/components/Profile";
import TechScroll from "@/components/TechScroll";

export default function Home() {
  const github_username = "EmanuProds";

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col items-center p-10">
        <Profile username={github_username} />
        <h1 className="text-3xl font-bold mt-2">Emanuel Perereira</h1>
        <p className="text-xl text-slate-400 mt-2">Desenvolvedor Full-Stack</p>
      </div>
      <div className="w-150 mx-auto">
        <TechScroll />
      </div>
    </main>
  );
}
