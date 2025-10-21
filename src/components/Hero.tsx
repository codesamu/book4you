import { Button } from "@/components/ui/button";
import { Music, Users, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Deine Event-Booking Plattform
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Finde die perfekten DJs, Musiker und Bands für dein nächstes Event. 
            Professionell, zuverlässig und mit nur wenigen Klicks.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => scrollToSection("performers")}
              className="text-lg px-8"
            >
              <Users className="w-5 h-5" />
              Künstler entdecken
            </Button>
            <Button 
              size="lg" 
              variant="heroOutline"
              onClick={() => scrollToSection("apply")}
              className="text-lg px-8"
            >
              <Music className="w-5 h-5" />
              Als Künstler bewerben
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <Music className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-semibold mb-2">500+ Künstler</h3>
              <p className="text-muted-foreground">Top DJs und Bands aus ganz Deutschland</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-secondary" />
              <h3 className="text-lg font-semibold mb-2">Einfache Buchung</h3>
              <p className="text-muted-foreground">Schnelle Anfragen und Bestätigungen</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50">
              <Users className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-lg font-semibold mb-2">Geprüfte Profile</h3>
              <p className="text-muted-foreground">Verifizierte und professionelle Künstler</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
