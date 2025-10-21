import { Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Music className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">EventBeats</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Die führende Plattform für Event-Buchungen in Deutschland
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Für Veranstalter</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Künstler suchen</li>
              <li>Preise vergleichen</li>
              <li>Buchungen verwalten</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Für Künstler</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Jetzt bewerben</li>
              <li>Profil erstellen</li>
              <li>Anfragen erhalten</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>FAQ</li>
              <li>Kontakt</li>
              <li>AGB</li>
              <li>Datenschutz</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 EventBeats. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
