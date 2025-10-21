import { Phone, Instagram, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="Ammu's Pets & Kennels Logo" 
              className="h-16 md:h-20 w-auto"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-sm">
            <a 
              href="tel:9700400309"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted/50"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium hidden sm:inline">+91 9700400309</span>
              <span className="font-medium sm:hidden">Call</span>
            </a>
            <a
              href="https://www.instagram.com/ammuspetsandkennels?igsh=MTh2amRtbmowd3A3MA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted/50"
            >
              <Instagram className="w-4 h-4" />
              <span className="font-medium hidden sm:inline">Follow Us</span>
              <span className="font-medium sm:hidden">Instagram</span>
            </a>
            <a
              href="https://maps.google.com/maps/search/AMMUS%20PETS%20AND%20KENNELS/@17.424800872802734,78.44850158691406,17z?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted/50"
            >
              <MapPin className="w-4 h-4" />
              <span className="font-medium hidden sm:inline">Visit Us</span>
              <span className="font-medium sm:hidden">Location</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
