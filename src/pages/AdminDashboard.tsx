import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Mail, Phone, MapPin, Music } from "lucide-react";

interface Application {
  id: string;
  artist_name: string;
  type: string;
  email: string;
  phone: string | null;
  genre: string;
  location: string;
  experience: string;
  links: string | null;
  status: string;
  created_at: string;
}

const AdminDashboard = () => {
  const { isAdmin, loading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!loading && !isAdmin) {
      navigate("/");
    }
  }, [isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin) {
      fetchApplications();
    }
  }, [isAdmin]);

  const fetchApplications = async () => {
    const { data, error } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Fehler",
        description: "Bewerbungen konnten nicht geladen werden.",
        variant: "destructive",
      });
    } else {
      setApplications(data || []);
    }
    setLoadingData(false);
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("applications")
      .update({ status })
      .eq("id", id);

    if (error) {
      toast({
        title: "Fehler",
        description: "Status konnte nicht aktualisiert werden.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Erfolg",
        description: `Status auf "${status}" geändert.`,
      });
      fetchApplications();
    }
  };

  if (loading || loadingData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p>Lädt...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "rejected": return "bg-red-500/10 text-red-500 border-red-500/20";
      default: return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "approved": return "Genehmigt";
      case "rejected": return "Abgelehnt";
      default: return "Ausstehend";
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container px-4">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück
          </Button>
          <h1 className="text-4xl font-semibold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Verwalte alle Bewerbungen</p>
        </div>

        <div className="grid gap-6">
          {applications.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-muted-foreground">Keine Bewerbungen vorhanden</p>
            </Card>
          ) : (
            applications.map((app) => (
              <Card key={app.id} className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{app.artist_name}</h3>
                        <Badge variant="outline" className="mb-2">{app.type}</Badge>
                      </div>
                      <Badge className={getStatusColor(app.status)}>
                        {getStatusText(app.status)}
                      </Badge>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <a href={`mailto:${app.email}`} className="hover:text-foreground">
                          {app.email}
                        </a>
                      </div>
                      {app.phone && (
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>{app.phone}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Music className="h-4 w-4" />
                        <span>{app.genre}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{app.location}</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-medium mb-1">Erfahrung:</p>
                      <p className="text-sm text-muted-foreground">{app.experience}</p>
                    </div>

                    {app.links && (
                      <div>
                        <p className="text-sm font-medium mb-1">Links:</p>
                        <a 
                          href={app.links} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          {app.links}
                        </a>
                      </div>
                    )}

                    <p className="text-xs text-muted-foreground">
                      Eingereicht: {new Date(app.created_at).toLocaleDateString("de-DE")}
                    </p>
                  </div>

                  <div className="flex lg:flex-col gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateStatus(app.id, "approved")}
                      disabled={app.status === "approved"}
                      className="flex-1 lg:flex-none"
                    >
                      Genehmigen
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateStatus(app.id, "rejected")}
                      disabled={app.status === "rejected"}
                      className="flex-1 lg:flex-none"
                    >
                      Ablehnen
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
