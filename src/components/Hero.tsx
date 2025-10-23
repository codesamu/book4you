import { Button } from "@/components/ui/button";
import { Music, Users, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-secondary" />
      
      <div className="container relative z-10 px-4 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <h1 className="text-6xl md:text-8xl font-semibold text-foreground tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-700">
            EventPart
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Finde professionelle Künstler und Techniker für dein Event. Einfach, schnell und zuverlässig.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("performers")}
              className="text-base"
            >
              Künstler & Anderes entdecken
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("apply")}
              className="text-base"
            >
              Jetzt bewerben
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="space-y-3">
              <Music className="w-8 h-8 mx-auto text-foreground" />
              <h3 className="text-base font-semibold">500+ Künstler</h3>
              <p className="text-sm text-muted-foreground">Professionelle DJs und Bands</p>
            </div>
            <div className="space-y-3">
              <Calendar className="w-8 h-8 mx-auto text-foreground" />
              <h3 className="text-base font-semibold">Einfache Buchung</h3>
              <p className="text-sm text-muted-foreground">Schnell und unkompliziert</p>
            </div>
            <div className="space-y-3">
              <Users className="w-8 h-8 mx-auto text-foreground" />
              <h3 className="text-base font-semibold">Geprüfte Profile</h3>
              <p className="text-sm text-muted-foreground">Verifizierte Profis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
