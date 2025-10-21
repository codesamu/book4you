import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Music, Send } from "lucide-react";

const ApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Bewerbung eingegangen!",
      description: "Wir melden uns innerhalb von 48 Stunden bei dir.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="apply" className="py-20">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mb-4">
              <Music className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Werde Teil unserer Plattform
            </h2>
            <p className="text-xl text-muted-foreground">
              Erreiche tausende Event-Veranstalter und präsentiere dein Talent
            </p>
          </div>

          <Card className="p-8 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.2)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Künstlername *</Label>
                  <Input 
                    id="name" 
                    placeholder="z.B. DJ Thunderbeat" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Art *</Label>
                  <Select required>
                    <SelectTrigger>
                      <SelectValue placeholder="Wähle eine Kategorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dj">DJ</SelectItem>
                      <SelectItem value="band">Band</SelectItem>
                      <SelectItem value="live">Live-Musiker</SelectItem>
                      <SelectItem value="other">Sonstiges</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="deine@email.de" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+49 123 456789" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="genre">Genre *</Label>
                  <Input 
                    id="genre" 
                    placeholder="z.B. House, Techno, Rock" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Standort *</Label>
                  <Input 
                    id="location" 
                    placeholder="z.B. Berlin" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Erfahrung & Referenzen *</Label>
                <Textarea 
                  id="experience" 
                  placeholder="Erzähl uns von deiner Erfahrung, vergangenen Events und besonderen Highlights..."
                  className="min-h-32"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="links">Links (Website, SoundCloud, etc.)</Label>
                <Input 
                  id="links" 
                  placeholder="https://..." 
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Wird gesendet..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Bewerbung absenden
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                * Pflichtfelder
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
