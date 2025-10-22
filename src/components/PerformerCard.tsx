import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Music, LucideIcon } from "lucide-react";

interface PerformerCardProps {
  name: string;
  genre: string;
  location: string;
  rating: number;
  imageUrl: string;
  price: string;
  icon?: LucideIcon;
}

const PerformerCard = ({ name, genre, location, rating, imageUrl, price, icon: Icon = Music }: PerformerCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-200 border border-border">
      <div className="relative h-56 overflow-hidden bg-muted">
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-4 right-4 bg-background text-foreground border border-border">
          {price}
        </Badge>
      </div>
      
      <div className="p-5 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Icon className="w-4 h-4" />
              <span>{genre}</span>
            </div>
            <div className="flex items-center gap-1.5">
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
                className={`w-3.5 h-3.5 ${
                  i < rating ? "text-foreground fill-foreground" : "text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({rating}.0)</span>
        </div>

        <Button className="w-full" size="default">
          Anfrage senden
        </Button>
      </div>
    </Card>
  );
};

export default PerformerCard;
