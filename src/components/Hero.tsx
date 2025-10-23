import { Button } from "@/components/ui/button";
import { Music, Users, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      
      <div className="container relative z-10 px-4 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-block animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-6xl md:text-8xl font-bold text-foreground tracking-tight relative">
              EventPart
              <div className="absolute -inset-4 opacity-20 blur-2xl" style={{ background: 'var(--gradient-primary)' }} />
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            Finde professionelle Künstler und Techniker für dein Event. Einfach, schnell und zuverlässig.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("performers")}
              className="text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              style={{ background: 'var(--gradient-primary)' }}
            >
              Künstler & Anderes entdecken
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("apply")}
              className="text-base font-semibold border-2 hover:scale-105 transition-all"
              style={{ 
                borderColor: 'hsl(var(--primary))',
                color: 'hsl(var(--primary))'
              }}
            >
              Jetzt bewerben
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="space-y-3 p-6 rounded-2xl hover:scale-105 transition-all" style={{ background: 'var(--gradient-card)', boxShadow: 'var(--shadow-card)' }}>
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                <Music className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold">500+ Künstler</h3>
              <p className="text-sm text-muted-foreground">Professionelle DJs und Bands</p>
            </div>
            <div className="space-y-3 p-6 rounded-2xl hover:scale-105 transition-all" style={{ background: 'var(--gradient-card)', boxShadow: 'var(--shadow-card)' }}>
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-accent)' }}>
                <Calendar className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-bold">Einfache Buchung</h3>
              <p className="text-sm text-muted-foreground">Schnell und unkompliziert</p>
            </div>
            <div className="space-y-3 p-6 rounded-2xl hover:scale-105 transition-all" style={{ background: 'var(--gradient-card)', boxShadow: 'var(--shadow-card)' }}>
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center" style={{ background: 'var(--gradient-primary)' }}>
                <Users className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold">Geprüfte Profile</h3>
              <p className="text-sm text-muted-foreground">Verifizierte Profis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
