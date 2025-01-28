import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-[90%] md:w-[80%] lg:w-[60%] max-w-[1200px] m-auto">
        <Hero />
      </div>
    </div>
  );
}
