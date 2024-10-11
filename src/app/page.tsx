import Feature from "@/components/feature/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/nav/Navbar";
import ScrollBackground from "@/hooks/bg-scroll-change";

export default function Home() {
  return (
    <ScrollBackground>
      <main className="h-full min-h-dvh bg-currentbg transition-colors duration-700">
        <div className="container mx-auto">
          <Navbar />
          <Hero />
          <div className="mt-16" />
          <Feature />
          <div className="mt-16" />
          <JoinUs />
          <div className="mt-16" />
        </div>
        <Footer />
      </main>
    </ScrollBackground>
  );
}
