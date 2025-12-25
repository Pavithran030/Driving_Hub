import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom py-8 md:py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* About */}
          <div className="space-y-4 lg:col-span-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center p-2">
                <lord-icon
                  src="https://cdn.lordicon.com/njpauqoc.json"
                  trigger="loop"
                  delay="50"
                  stroke="bold"
                  state="loop-cycle"
                  colors="primary:#ffffff,secondary:#f0f0f0"
                  style={{ width: '100%', height: '100%' }}>
                </lord-icon>
              </div>
              <div>
                <h3 className="font-bold text-lg">{t('brand.name')}</h3>
                <p className="text-sm text-background/70">{t('brand.institute')}</p>
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
          <div className="space-y-4 lg:col-span-2">
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
              <a 
                href="https://parivahan.gov.in/parivahan//en/content/know-your-traffic-signs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/80 hover:text-background transition-colors text-sm group"
              >
                <span className="inline-block group-hover:animate-pulse">⚠️</span>
                {t('nav.trafficRules')}
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 lg:col-span-4">
            <h4 className="font-semibold text-lg">{t('contact.title')}</h4>
            <div className="space-y-3">
              <a href="tel:+919876543210" className="flex items-start gap-3 text-background/80 hover:text-background transition-colors text-sm group">
                <div className="w-5 h-5 mt-0.5 shrink-0">
                  <lord-icon
                    src="https://cdn.lordicon.com/nnzfcuqw.json"
                    trigger="loop"
                    delay="500"
                    stroke="bold"
                    colors="primary:#ffffff,secondary:#30e849"
                    style={{ width: '100%', height: '100%' }}>
                  </lord-icon>
                </div>
                <span>+91 98765 43210</span>
              </a>
              <a href="mailto:info@salemdrivingschool.com" className="flex items-start gap-3 text-background/80 hover:text-background transition-colors text-sm">
                <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                <span>info@salemdrivingschool.com</span>
              </a>
              <a 
                href="https://www.google.com/maps/place/Murugan+Driving+Institute+Omalur/@11.7399019,78.0388109,17z/data=!3m1!4b1!4m6!3m5!1s0x3babf9915423bf39:0x49d79817ec0bc856!8m2!3d11.7399019!4d78.0413858!16s%2Fg%2F11vsjg0vc0?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-background/80 hover:text-background transition-colors text-sm group"
              >
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span>Samenathan Complex, Near Taluka Office,<br />Mettur Main Road, Omalur Tk<br />Salem Dt - 636455, Tamil Nadu</span>
              </a>
            </div>
          </div>

          {/* Timing */}
          <div className="space-y-4 lg:col-span-3">
            <h4 className="font-semibold text-lg">Work Timings</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-background/80 text-sm">
                <Clock className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-background">Monday - Saturday</p>
                  <p>07:00 AM - 05:00 PM </p>
                </div>
              </div>
              {/* <div className="flex items-start gap-3 text-background/80 text-sm">
                <Clock className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-background">Sunday</p>
                  <p>7:00 AM - 12:00 PM</p>
                </div>
              </div> */}
            </div>

            <h4 className="font-semibold text-lg">Class Timing</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-background/80 text-sm">
                <Clock className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-background">Monday - Saturday</p>
                  <p>09:00 AM - 10:00 PM  <br/> 04:00 PM - 05:00 PM</p>
                </div>
              </div>
              {/* <div className="flex items-start gap-3 text-background/80 text-sm">
                <Clock className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-background">Sunday</p>
                  <p>7:00 AM - 12:00 PM</p>
                </div>
              </div> */}
            </div>



          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 mt-8 pt-6 text-center text-sm text-background/60">
          <p>© {new Date().getFullYear()} {t('brand.full')}. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
