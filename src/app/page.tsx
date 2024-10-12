import Feature from "@/components/feature/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/nav/Navbar";
import Testimonial from "@/components/Testimonial/Testimonials";
import ScrollBackground from "@/hooks/bg-scroll-change";

export default function Home() {
  return (
    <ScrollBackground>
      <main className="h-full min-h-dvh bg-currentbg transition-colors duration-700">
        <div className="container mx-auto">
          <Navbar />
          <Hero />
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-16" />
          <Feature />
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-16" />
          <JoinUs />
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-16" />
          <Testimonial />
          {/* <div className="lg:mt-16 md:mt-8 mt-4 sm:mt-6 " />
          <Faq /> */}
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-16" />
        </div>
        <Footer />
      </main>
    </ScrollBackground>
  );
}
