import Hero from "@/components/Hero";
import PerformerGrid from "@/components/PerformerGrid";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <PerformerGrid />
      <ApplicationForm />
      <Footer />
    </div>
  );
};

export default Index;
