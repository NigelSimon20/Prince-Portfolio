import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import linePic from "../public/images/line.png"
import TimelinePage from "./components/TimelinePage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Image src={linePic} alt="" className="absolute top-0 right-[90px] h-[130vh] hidden md:block" />
      <Hero />
      <About />
      <Experience />
      <TimelinePage />
      <Contact />
      <Footer />
    </div>
  );
}
