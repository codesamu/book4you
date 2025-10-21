import PerformerCard from "./PerformerCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const performers = [
  {
    name: "DJ Soundwave",
    genre: "Electronic / House",
    location: "Berlin",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1571266028243-d220c6c2e144?w=800&h=600&fit=crop",
    price: "ab 800€"
  },
  {
    name: "The Groove Band",
    genre: "Funk / Soul",
    location: "Hamburg",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=800&h=600&fit=crop",
    price: "ab 1.200€"
  },
  {
    name: "DJ Phoenix",
    genre: "Hip-Hop / R&B",
    location: "München",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&h=600&fit=crop",
    price: "ab 600€"
  },
  {
    name: "Electric Vibes",
    genre: "Techno / EDM",
    location: "Köln",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1574073542969-58dba8e56c7a?w=800&h=600&fit=crop",
    price: "ab 900€"
  },
  {
    name: "Jazz Collective",
    genre: "Jazz / Swing",
    location: "Frankfurt",
    rating: 5,
    imageUrl: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
    price: "ab 1.500€"
  },
  {
    name: "DJ Velocity",
    genre: "Drum & Bass",
    location: "Stuttgart",
    rating: 4,
    imageUrl: "https://images.unsplash.com/photo-1571327073757-71d13c24de30?w=800&h=600&fit=crop",
    price: "ab 700€"
  }
];

const PerformerGrid = () => {
  return (
    <section id="performers" className="py-20 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Unsere Top Künstler
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Von elektronischen Beats bis zu Live-Bands – finde den perfekten Sound für dein Event
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
            <TabsTrigger value="all">Alle</TabsTrigger>
            <TabsTrigger value="dj">DJs</TabsTrigger>
            <TabsTrigger value="band">Bands</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
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
              {performers.filter(p => p.name.includes("DJ")).map((performer, index) => (
                <PerformerCard key={index} {...performer} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="band" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {performers.filter(p => p.name.includes("Band") || p.name.includes("Collective")).map((performer, index) => (
                <PerformerCard key={index} {...performer} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="live" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {performers.slice(0, 3).map((performer, index) => (
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
