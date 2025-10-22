import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const ApplicationForm = () => {
  const { toast } = useToast();
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    artistName: "",
    type: "",
    email: "",
    phone: "",
    genre: "",
    location: "",
    experience: "",
    links: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase.from("applications").insert({
      user_id: user?.id || null,
      artist_name: formData.artistName,
      type: formData.type,
      email: formData.email,
      phone: formData.phone || null,
      genre: formData.genre,
      location: formData.location,
      experience: formData.experience,
      links: formData.links || null,
    });

    if (error) {
      toast({
        title: "Fehler",
        description: "Die Bewerbung konnte nicht gesendet werden.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Bewerbung eingegangen!",
        description: "Wir melden uns innerhalb von 48 Stunden bei dir.",
      });
      setFormData({
        artistName: "",
        type: "",
        email: "",
        phone: "",
        genre: "",
        location: "",
        experience: "",
        links: "",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="apply" className="py-24 bg-secondary">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Jetzt bewerben
            </h2>
            <p className="text-lg text-muted-foreground">
              Werde Teil der Plattform
            </p>
          </div>

          <Card className="p-8 border border-border bg-background">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm">Künstlername *</Label>
                  <Input 
                    id="name"
                    value={formData.artistName}
                    onChange={(e) => setFormData({...formData, artistName: e.target.value})}
                    placeholder="z.B. DJ Martini" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type" className="text-sm">Art *</Label>
                  <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Wähle eine Kategorie" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dj">DJ</SelectItem>
                      <SelectItem value="band">Band</SelectItem>
                      <SelectItem value="live">Live-Musiker</SelectItem>
                      <SelectItem value="technik">Techniker</SelectItem>
                      <SelectItem value="service">Service</SelectItem>
                      <SelectItem value="other">Sonstiges</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm">E-Mail *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="deine@email.de" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm">Telefon</Label>
                  <Input 
                    id="phone" 
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+49 123 456789" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="genre" className="text-sm">Genre *</Label>
                  <Input 
                    id="genre"
                    value={formData.genre}
                    onChange={(e) => setFormData({...formData, genre: e.target.value})}
                    placeholder="z.B. House, Techno, Rock" 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm">Standort *</Label>
                  <Input 
                    id="location"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    placeholder="z.B. Innsbruck" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience" className="text-sm">Erfahrung & Referenzen *</Label>
                <Textarea 
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  placeholder="Erzähl uns von deiner Erfahrung..."
                  className="min-h-32"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="links" className="text-sm">Links (Website, SoundCloud, etc.)</Label>
                <Input 
                  id="links"
                  value={formData.links}
                  onChange={(e) => setFormData({...formData, links: e.target.value})}
                  placeholder="https://..." 
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wird gesendet..." : "Bewerbung absenden"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
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
