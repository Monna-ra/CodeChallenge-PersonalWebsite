import Image from "next/image";
import Hero from '@/pages/Hero';
import About from '@/pages/About';
import Skill from '@/pages/Skill';
import Portfolio from '@/pages/Portfolio';
import Testimony from '@/pages/Testimony';
import Contact from '@/pages/findMe/findMe';

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: "url(/background.png)"}}>
      <Hero />
      <About/>
      <Skill />
      <Portfolio />
      <Testimony />
      <Contact />
      </div>
    </main>
  );
}
