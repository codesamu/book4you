import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Music } from "lucide-react";

interface PerformerCardProps {
  name: string;
  genre: string;
  location: string;
  rating: number;
  imageUrl: string;
  price: string;
}

const PerformerCard = ({ name, genre, location, rating, imageUrl, price }: PerformerCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.25)] transition-all duration-300 hover:scale-105">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
          {price}
        </Badge>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Music className="w-4 h-4" />
              <span>{genre}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating ? "text-accent fill-accent" : "text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium">({rating}.0)</span>
        </div>

        <Button className="w-full" size="lg">
          Anfrage senden
        </Button>
      </div>
    </Card>
  );
};

export default PerformerCard;
