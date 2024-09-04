import Image from "next/image";
import Hero from "./components/Hero";
import linePic from "../public/images/line.png"

export default function Home() {
  return (
    <div>
      <Image src={linePic} alt="" className="absolute top-0 right-[90px] h-[130vh] hidden md:block" />
      <Hero />
    </div>
  );
}
