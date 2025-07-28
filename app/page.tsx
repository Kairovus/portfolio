import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { MouseFollower } from "@/components/mouse-follower";

export const metadata: Metadata = {
  title: "Muhammad Rizki Dila Baharo | Portfolio",
  description: "Professional portfolio of MemoryLeaked - Software Developer",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <MouseFollower />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
