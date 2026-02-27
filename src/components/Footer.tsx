import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
                <span className="text-secondary-foreground font-heading font-bold text-lg">T</span>
              </div>
              <span className="font-heading font-bold text-xl">Tambe Tutorials</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-4">
              Shaping futures since 1993. Trusted by thousands of students and parents in Nashik for academic excellence.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/p/Tambe-Tutorials-100063604498498/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors text-sm">f</a>
              <a href="tel:08149500068" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { name: "About Us", path: "/about" },
                { name: "Courses", path: "/courses" },
                { name: "Results", path: "/results" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Courses</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li>Class 8th – 10th (SSC / CBSE)</li>
              <li>Class 11th – 12th Science</li>
              <li>JEE / NEET Foundation</li>
              <li>MHT-CET Preparation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-primary-foreground/60">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                C' Ishwar Sankul, Gaikwad Mala Rd, near Bytco Point, Nashik Road, Nashik 422101
              </li>
              <li className="flex gap-3 text-sm text-primary-foreground/60">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <a href="tel:08149500068" className="hover:text-secondary transition-colors">081495 00068</a>
              </li>
              <li className="flex gap-3 text-sm text-primary-foreground/60">
                <Clock className="w-4 h-4 text-secondary shrink-0" />
                Mon – Sat: 7:00 AM – 9:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} Tambe Tutorials, Nashik. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
