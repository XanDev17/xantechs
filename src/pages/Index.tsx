import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import WhyUs from "@/components/sections/WhyUs";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Storyboard from "@/components/sections/Storyboard";
import ChatBot from "@/components/chat/ChatBot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Storyboard />
        <Portfolio />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
