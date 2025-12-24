import { Link } from 'react-router-dom';
import { Phone, MessageCircle, FileText, ClipboardList, Award, Clock, Shield, Users, MapPin, Heart } from 'lucide-react';
import carIcon from '@/assets/car-icon.svg';
import truckIcon from '@/assets/truck-icon.svg';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ServiceCard from '@/components/ServiceCard';
import WhyChooseCard from '@/components/WhyChooseCard';
import TestimonialCard from '@/components/TestimonialCard';
import heroBg from '@/assets/hero-bg.jpg';

const CarIcon = ({ className }: { className?: string }) => (
  <img src={carIcon} alt="Car" className={className || "w-full h-full"} />
);

const TruckIcon = ({ className }: { className?: string }) => (
  <img src={truckIcon} alt="Truck" className={className || "w-full h-full"} />
);

const Index = () => {
  const { t, language } = useLanguage();

  const services = [
    { icon: CarIcon, title: t('services.driving.title'), description: t('services.driving.desc') },
    { icon: TruckIcon, title: t('services.heavyvehicle.title'), description: t('services.heavyvehicle.desc') },
    { icon: FileText, title: t('services.licence.title'), description: t('services.licence.desc') },
    { icon: ClipboardList, title: t('services.rc.title'), description: t('services.rc.desc') },
  ];

  const whyChoose = [
    { icon: Award, title: t('why.experience'), description: t('why.experience.desc') },
    { icon: CarIcon, title: t('why.safety'), description: t('why.safety.desc') },
    { icon: Clock, title: t('why.flexible'), description: t('why.flexible.desc') },
    { icon: Heart, title: t('why.friendly'), description: t('why.friendly.desc') },
  ];

  const testimonials = [
    {
      name: language === 'ta' ? 'கவிதா எஸ்' : 'Kavitha S.',
      location: language === 'ta' ? 'அத்திப்பட்டி' : 'Atthipatty',
      course: language === 'ta' ? 'ஆரம்ப கார் பயிற்சி' : 'Beginner Car Course',
      quote: language === 'ta' 
        ? 'நான் மிகவும் பயமாக இருந்தேன், ஆனால் இங்கு மிகவும் பொறுமையாக கற்றுக்கொடுத்தார்கள். இப்போது தன்னம்பிக்கையுடன் வாகனம் ஓட்டுகிறேன்!'
        : 'I was very nervous, but the instructors were patient. Now I drive confidently every day!',
    },
    {
      name: language === 'ta' ? 'முருகன் கே' : 'Murugan K.',
      location: language === 'ta' ? 'தலைவாசல்' : 'Thalaivasal',
      course: language === 'ta' ? 'உரிம சேவை' : 'Licence Service',
      quote: language === 'ta'
        ? 'உரிம புதுப்பித்தலுக்கு அவர்கள் மிகவும் உதவினார்கள். எல்லா ஆவணங்களையும் அவர்களே கையாண்டனர்.'
        : 'They handled my licence renewal smoothly. All paperwork was done by them!',
    },
    {
      name: language === 'ta' ? 'பிரியா ஆர்' : 'Priya R.',
      location: language === 'ta' ? 'கொளத்தூர்' : 'Kolathur',
      course: language === 'ta' ? 'ரிஃப்ரஷர் படிப்பு' : 'Refresher Course',
      quote: language === 'ta'
        ? '10 வருடங்களுக்கு பிறகு மீண்டும் வாகனம் ஓட்ட கற்றேன். மிகவும் நல்ல அனுபவம்!'
        : 'After 10 years gap, I learned to drive again. Excellent experience!',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="Driving School" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        {/* Content */}
        <div className="relative container-custom section-padding">
          <div className="max-w-3xl py-8 md:py-16 lg:py-24">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="xl" asChild>
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5" />
                  {t('hero.callWhatsapp')}
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a 
                  href="https://parivahan.gov.in/parivahan//en/content/know-your-traffic-signs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span className="text-xl">⚠️</span>
                  {language === 'ta' ? 'போக்குவரத்து விதிகள்' : 'Traffic Rules'}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {t('why.title')}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t('why.subtitle')}
              </p>
              <div className="grid sm:grid-cols-2 gap-2">
                {whyChoose.map((item, index) => (
                  <WhyChooseCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-card rounded-3xl p-8 card-elevated border border-border/50">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div className="p-4">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                    <p className="text-muted-foreground text-sm">{language === 'ta' ? 'ஆண்டுகள் அனுபவம்' : 'Years Experience'}</p>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">95%</div>
                    <p className="text-muted-foreground text-sm">{language === 'ta' ? 'தேர்ச்சி விகிதம்' : 'Pass Rate'}</p>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5000+</div>
                    <p className="text-muted-foreground text-sm">{language === 'ta' ? 'மாணவர்கள்' : 'Students Trained'}</p>
                  </div>
                  <div className="p-4">
                    <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">10+</div>
                    <p className="text-muted-foreground text-sm">{language === 'ta' ? 'பயிற்சி வாகனங்கள்' : 'Training Vehicles'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('testimonials.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('testimonials.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                {...testimonial}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/stories">
                {t('testimonials.viewAll')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </div>
  );
};

export default Index;
