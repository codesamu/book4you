import PerformerCard from "./PerformerCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, Mic2, Headphones, Lightbulb, Camera, Utensils, Sparkles } from "lucide-react";
import djFrontiImage from "@/assets/dj_fronti.jpeg";
import lorenzimg from "@/assets/lorenz.jpeg";
import falknerimg from "@/assets/falkner.jpeg";
import yanikimg from "@/assets/yanik.jpeg";

const performers = [
  {
    name: "DJ Fronthaler",
    genre: "Techno / House",
    location: "Innsbruck",
    rating: 5,
    imageUrl: djFrontiImage,
    price: "ab 800€",
    icon: Headphones,
    category: "dj"
  },
  {
    name: "Band Glaser",
    genre: "Funk / Soul",
    location: "Oetztal",
    rating: 4,
    imageUrl: lorenzimg,
    price: "ab 1.200€",
    icon: Music,
    category: "band"
  },
  {
    name: "Elektro Falkner",
    genre: "Technik",
    location: "Innsbruck",
    rating: 5,
    imageUrl: falknerimg,
    price: "ab 500€",
    icon: Lightbulb,
    category: "technik"
  },
  {
    name: "Photography Plankensteiner",
    genre: "Event-Fotografie",
    location: "Innsbruck",
    rating: 3,
    imageUrl: yanikimg,
    price: "ab 400€",
    icon: Camera,
    category: "service"
  }
];

const PerformerGrid = () => {
  return (
    <section id="performers" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: 'var(--gradient-hero)' }} />
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Event-Dienstleister
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professionelle Services für dein Event
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-5 mb-12 h-12 p-1 rounded-xl" style={{ background: 'var(--gradient-card)', boxShadow: 'var(--shadow-card)' }}>
            <TabsTrigger value="all" className="text-sm font-semibold data-[state=active]:shadow-md">Alle</TabsTrigger>
            <TabsTrigger value="dj" className="text-sm font-semibold data-[state=active]:shadow-md">DJs</TabsTrigger>
            <TabsTrigger value="band" className="text-sm font-semibold data-[state=active]:shadow-md">Bands</TabsTrigger>
            <TabsTrigger value="technik" className="text-sm font-semibold data-[state=active]:shadow-md">Technik</TabsTrigger>
            <TabsTrigger value="service" className="text-sm font-semibold data-[state=active]:shadow-md">Services</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {performers.map((performer, index) => (
                <PerformerCard key={index} {...performer} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dj" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {performers.filter(p => p.category === "dj").map((performer, index) => (
                <PerformerCard key={index} {...performer} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="band" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {performers.filter(p => p.category === "band").map((performer, index) => (
                <PerformerCard key={index} {...performer} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="technik" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {performers.filter(p => p.category === "technik").map((performer, index) => (
                <PerformerCard key={index} {...performer} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="service" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {performers.filter(p => p.category === "service").map((performer, index) => (
                <PerformerCard key={index} {...performer} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default PerformerGrid;
