import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Metrics } from "@/components/site/Metrics";
import { Expertise } from "@/components/site/Expertise";
import { Portfolio } from "@/components/site/Portfolio";
import { Timeline } from "@/components/site/Timeline";
import { Publications } from "@/components/site/Publications";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Expertise />
        <Portfolio />
        <Timeline />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
