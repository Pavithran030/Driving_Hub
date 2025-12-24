import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Car, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                <Car className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Salem Driving</h3>
                <p className="text-sm text-background/70">Institute</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              {t('footer.servingAreas')}
            </p>
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-background/80 hover:text-background transition-colors text-sm">
                {t('nav.home')}
              </Link>
              <Link to="/about" className="block text-background/80 hover:text-background transition-colors text-sm">
                {t('nav.about')}
              </Link>
              <Link to="/services" className="block text-background/80 hover:text-background transition-colors text-sm">
                {t('nav.services')}
              </Link>
              <Link to="/stories" className="block text-background/80 hover:text-background transition-colors text-sm">
                {t('nav.stories')}
              </Link>
              <Link to="/contact" className="block text-background/80 hover:text-background transition-colors text-sm">
                {t('nav.contact')}
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">{t('contact.title')}</h4>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-start gap-3 text-background/80 hover:text-background transition-colors text-sm">
                <Phone className="w-5 h-5 mt-0.5 shrink-0" />
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@salemdrivingschool.com" className="flex items-start gap-3 text-background/80 hover:text-background transition-colors text-sm">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <span>info@salemdrivingschool.com</span>
              </a>
              <div className="flex items-start gap-3 text-background/80 text-sm">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <span>123 Main Road, Near Bus Stand,<br />Salem - 636001, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Timing */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Timings</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-background/80 text-sm">
                <Clock className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-background">Monday - Saturday</p>
                  <p>6:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-background/80 text-sm">
                <Clock className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-background">Sunday</p>
                  <p>7:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} Salem Driving Institute. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
