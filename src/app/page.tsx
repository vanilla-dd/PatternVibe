import About from "@/components/about/About";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/nav/Navbar";

export default function Home() {
  return (
    <main className="h-full min-h-dvh bg-[#fbefaf]">
      <div className="container mx-auto">
        <Navbar />
        <Hero />
        <div className="mt-16" />
        <About />
        <div className="mt-16" />
        <JoinUs />
      </div>
    </main>
  );
}
