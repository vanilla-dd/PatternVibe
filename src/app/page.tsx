import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/nav/Navbar";

export default function Home() {
  return (
    <main className="h-full min-h-dvh bg-[#fbefaf]">
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <div className="mt-32" />
        <About />
      </div>
    </main>
  );
}
