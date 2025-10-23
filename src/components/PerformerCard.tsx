import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Music, LucideIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpen(false);
    toast({
      title: "Anfrage gesendet!",
      description: `Deine Anfrage an ${name} wurde erfolgreich versendet.`,
    });
  };

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

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-full" size="default">
              Anfrage senden
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Anfrage an {name}</DialogTitle>
              <DialogDescription>
                Fülle das Formular aus um eine Buchungsanfrage zu senden.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="request-name">Dein Name *</Label>
                <Input id="request-name" placeholder="Max Mustermann" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="request-email">E-Mail *</Label>
                <Input id="request-email" type="email" placeholder="max@beispiel.de" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="request-date">Event-Datum *</Label>
                <Input id="request-date" type="date" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="request-message">Nachricht</Label>
                <Textarea 
                  id="request-message" 
                  placeholder="Beschreibe dein Event..."
                  className="min-h-24"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
                  Abbrechen
                </Button>
                <Button type="submit" className="flex-1">
                  Anfrage senden
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  );
};

export default PerformerCard;
