import About from "@/components/about/About";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/nav/Navbar";
import ScrollBackground from "@/hooks/bg-scroll-change";

export default function Home() {
  return (
    <ScrollBackground>
      <main className="bg-currentbg h-full min-h-dvh transition-colors duration-700">
        <div className="container mx-auto">
          <Navbar />
          <Hero />
          <div className="mt-16" />
          <About />
          <div className="mt-16" />
          <JoinUs />
        </div>
      </main>
    </ScrollBackground>
  );
}
