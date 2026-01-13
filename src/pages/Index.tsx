import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import WhyUs from "@/components/sections/WhyUs";
import ProductHighlight from "@/components/sections/ProductHighlight";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <WhyUs />
        <ProductHighlight />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
