import { Phone, Instagram, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-200/80 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <img 
              src={logo} 
              alt="Ammu's Pets & Kennels Logo" 
              className="h-12 sm:h-14 md:h-16 lg:h-18 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-sm sm:text-lg font-bold text-gray-800">Ammu's Pets & Kennels</h1>
              <p className="text-xs text-gray-600">Your Trusted Pet Partner</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
            <a 
              href="tel:9700400309"
              className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-blue-600 transition-all duration-300 px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-blue-50 border border-transparent hover:border-blue-200"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-semibold hidden sm:inline">+91 9700400309</span>
              <span className="font-semibold sm:hidden">Call</span>
            </a>
            <a
              href="https://www.instagram.com/ammuspetsandkennels?igsh=MTh2amRtbmowd3A3MA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-pink-600 transition-all duration-300 px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-pink-50 border border-transparent hover:border-pink-200"
            >
              <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-semibold hidden sm:inline">Follow Us</span>
              <span className="font-semibold sm:hidden">Instagram</span>
            </a>
            <a
              href="https://maps.google.com/maps/search/AMMUS%20PETS%20AND%20KENNELS/@17.424800872802734,78.44850158691406,17z?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 text-gray-700 hover:text-green-600 transition-all duration-300 px-2 sm:px-4 py-1 sm:py-2 rounded-lg hover:bg-green-50 border border-transparent hover:border-green-200"
            >
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-semibold hidden sm:inline">Visit Us</span>
              <span className="font-semibold sm:hidden">Location</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
