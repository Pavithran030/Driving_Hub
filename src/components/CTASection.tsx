import { FileText } from 'lucide-react';
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
            <a href="tel:+919865068850" className="flex items-center gap-2">
              <div className="w-5 h-5">
                <lord-icon
                  src="https://cdn.lordicon.com/nnzfcuqw.json"
                  trigger="loop"
                  delay="500"
                  stroke="bold"
                  colors="primary:#ffffff,secondary:#30e849"
                  style={{ width: '100%', height: '100%' }}>
                </lord-icon>
              </div>
              <span>{t('cta.call')}</span>
            </a>
          </Button>
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/919865068850" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <div className="w-5 h-5">
                <lord-icon
                  src="https://cdn.lordicon.com/vmxvhdko.json"
                  trigger="loop"
                  delay="500"
                  stroke="bold"
                  colors="primary:#ffffff,secondary:#30e849"
                  style={{ width: '100%', height: '100%' }}>
                </lord-icon>
              </div>
              <span>{t('cta.whatsapp')}</span>
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="/contact#enquiry-form">
              <FileText className="w-5 h-5" />
              {t('cta.enquiry')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
