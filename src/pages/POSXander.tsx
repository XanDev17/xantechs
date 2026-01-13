import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import POSHero from "@/components/pos/POSHero";
import POSFeatures from "@/components/pos/POSFeatures";
import POSScreenshots from "@/components/pos/POSScreenshots";
import POSBenefits from "@/components/pos/POSBenefits";
import POSHowItWorks from "@/components/pos/POSHowItWorks";
import POSSupport from "@/components/pos/POSSupport";

const POSXander = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <POSHero />
        <POSFeatures />
        <POSScreenshots />
        <POSBenefits />
        <POSHowItWorks />
        <POSSupport />
      </main>
      <Footer />
    </div>
  );
};

export default POSXander;
