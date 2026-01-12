import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-semibold">Dar Seif</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Une maison d'hôtes d'exception entre mer et montagne. 
              Vivez une expérience unique d'hospitalité et de sérénité.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "Accueil", path: "/" },
                { name: "À propos", path: "/about" },
                { name: "Chambres", path: "/rooms" },
                { name: "Services", path: "/services" },
                { name: "Galerie", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  Route de la Montagne, Vue Mer<br />
                  Tunisie
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  +216 XX XXX XXX
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-accent" />
                <span className="text-primary-foreground/80 text-sm">
                  contact@darseif.com
                </span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Horaires</h4>
            <div className="space-y-2 text-primary-foreground/80 text-sm">
              <p>Check-in: 14h00 - 20h00</p>
              <p>Check-out: jusqu'à 11h00</p>
              <p className="pt-2">
                Réception disponible<br />
                7j/7 de 8h00 à 22h00
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Dar Seif. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
