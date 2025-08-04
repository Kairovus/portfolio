import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import TechStack from "@/components/tech-stack";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { MouseFollower } from "@/components/mouse-follower";
import Certificates from "@/components/certificates";

export const metadata: Metadata = {
  title: "Muhammad Rizki Dila Bahari | Portfolio",
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
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
