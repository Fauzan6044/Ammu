import { Instagram, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ammu's Pets & Kennels</h3>
            <p className="opacity-90">
              Your trusted destination for exotic birds. Quality, care, and expertise since 15 years.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:9700400309"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                <span>+91 9700400309</span>
              </a>
              <a
                href="https://maps.google.com/maps/search/AMMUS%20PETS%20AND%20KENNELS/@17.424800872802734,78.44850158691406,17z?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <MapPin className="w-5 h-5" />
                <span>View Location</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <a
              href="https://www.instagram.com/ammuspetsandkennels?igsh=MTh2amRtbmowd3A3MA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              <span>@ammuspetsandkennels</span>
            </a>
            <p className="mt-4 opacity-90 text-sm">
              8000+ 5-Star Reviews
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="opacity-80">
            © {new Date().getFullYear()} Ammu's Pets & Kennels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
