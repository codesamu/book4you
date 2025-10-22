import Hero from "@/components/Hero";
import PerformerGrid from "@/components/PerformerGrid";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <PerformerGrid />
        <ApplicationForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
