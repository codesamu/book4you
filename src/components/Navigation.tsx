import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { LogOut, User, Shield } from "lucide-react";

const Navigation = () => {
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => navigate("/")} className="text-lg font-semibold">
            EventPro
          </button>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                {isAdmin && (
                  <Button variant="ghost" size="sm" onClick={() => navigate("/admin")}>
                    <Shield className="h-4 w-4 mr-2" />
                    Admin
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={handleSignOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Abmelden
                </Button>
              </>
            ) : (
              <Button variant="ghost" size="sm" onClick={() => navigate("/auth")}>
                <User className="h-4 w-4 mr-2" />
                Anmelden
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
