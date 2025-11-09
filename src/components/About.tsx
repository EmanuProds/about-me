import GithubStats from "@/routes/StatsGithub";

const About = () => {
  const github_username = "EmanuProds";

  return (
    <div className="flex flex-col items-center p-10">
      <h1 className="text-3xl font-bold text-slate-400 mt-2">Sobre mim</h1>
      <p className="text-xl text-white text-justify p-15">
        Olá, meu nome é Emanuel da Costa Pereira, sou um desenvolvedor
        Full-Stack apaixonado por tecnologia e inovação. Minha jornada na
        tecnologia começou aos 9 anos com o Windows XP e evoluiu para uma paixão
        por desenvolvimento e automação. Um marco nesse percurso foi a criação
        de um shellscript que automatiza a complexa pós-instalação do Arch
        Linux, um projeto que não apenas demonstrou minha aptidão técnica, mas
        também me revelou como programador. Além de ter uma experiência como
        instrutor de TI na empresa Microlins, enfatizando minha habilidade em
        ensinar e compartilhar conhecimento. Sou movido pela curiosidade e pelo
        desejo de aprendizado contínuo, sempre em busca de novas oportunidades
        onde eu possa contribuir e crescer profissionalmente.
      </p>
      <GithubStats username={github_username} />
    </div>
  );
};

export default About;
