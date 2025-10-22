import PerformerCard from "./PerformerCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, Mic2, Headphones, Lightbulb, Camera, Utensils, Sparkles } from "lucide-react";

const performers = [
  {
    name: "DJ Soundwave",
    genre: "Electronic / House",
    location: "Berlin",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1571266028243-d220c6c2e144?w=800&h=600&fit=crop",
    price: "ab 800€",
    icon: Headphones,
    category: "dj"
  },
  {
    name: "The Groove Band",
    genre: "Funk / Soul",
    location: "Hamburg",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&h=600&fit=crop",
    price: "ab 1.200€",
    icon: Music,
    category: "band"
  },
  {
    name: "DJ Phoenix",
    genre: "Hip-Hop / R&B",
    location: "München",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&h=600&fit=crop",
    price: "ab 600€",
    icon: Headphones,
    category: "dj"
  },
  {
    name: "ProSound Technik",
    genre: "Tontechnik & PA",
    location: "Berlin",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&h=600&fit=crop",
    price: "ab 500€",
    icon: Mic2,
    category: "technik"
  },
  {
    name: "LightShow Productions",
    genre: "Lichttechnik & Bühne",
    location: "Köln",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
    price: "ab 600€",
    icon: Lightbulb,
    category: "technik"
  },
  {
    name: "EventSnap Photography",
    genre: "Event-Fotografie",
    location: "Hamburg",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop",
    price: "ab 400€",
    icon: Camera,
    category: "service"
  },
  {
    name: "Gourmet Catering Plus",
    genre: "Catering & Getränke",
    location: "München",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop",
    price: "ab 25€/Person",
    icon: Utensils,
    category: "service"
  },
  {
    name: "Deko Dreams",
    genre: "Event-Dekoration",
    location: "Frankfurt",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
    price: "ab 300€",
    icon: Sparkles,
    category: "service"
  },
  {
    name: "Jazz Collective",
    genre: "Jazz / Swing",
    location: "Frankfurt",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
    price: "ab 1.500€",
    icon: Music,
    category: "band"
  },
  {
    name: "VideoMasters Production",
    genre: "Videografie & Streaming",
    location: "Berlin",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop",
    price: "ab 700€",
    icon: Camera,
    category: "service"
  },
  {
    name: "StageForce Technik",
    genre: "Bühnenbau & Equipment",
    location: "Düsseldorf",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
    price: "ab 800€",
    icon: Lightbulb,
    category: "technik"
  },
  {
    name: "DJ Velocity",
    genre: "Drum & Bass",
    location: "Stuttgart",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1571327073757-71d13c24de30?w=800&h=600&fit=crop",
    price: "ab 700€",
    icon: Headphones,
    category: "dj"
  }
];

const PerformerGrid = () => {
  return (
    <section id="performers" className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Event-Dienstleister
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professionelle Services für dein Event
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-xl mx-auto grid-cols-5 mb-12 h-11">
            <TabsTrigger value="all" className="text-sm">Alle</TabsTrigger>
            <TabsTrigger value="dj" className="text-sm">DJs</TabsTrigger>
            <TabsTrigger value="band" className="text-sm">Bands</TabsTrigger>
            <TabsTrigger value="technik" className="text-sm">Technik</TabsTrigger>
            <TabsTrigger value="service" className="text-sm">Services</TabsTrigger>
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
