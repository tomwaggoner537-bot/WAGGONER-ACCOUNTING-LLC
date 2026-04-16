import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import WhyChooseUs from "./components/WhyChooseUs";
import Service from "./components/Service";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a]">
      
      <Hero />
      <About />
      <Service />
      <Pricing />
      <WhyChooseUs />
      <Contact />
    </main>
  );
}
