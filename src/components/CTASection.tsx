import { Phone, MessageCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="gradient-hero section-padding">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          {t('cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <a href="tel:+919876543210">
              <Phone className="w-5 h-5" />
              {t('cta.call')}
            </a>
          </Button>
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              {t('cta.whatsapp')}
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <Link to="/contact">
              <FileText className="w-5 h-5" />
              {t('cta.enquiry')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
