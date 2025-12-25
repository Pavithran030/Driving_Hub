import { Copy, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Link } from 'react-router-dom';

// Icon Components
function RenewalIcon({ className }: { className?: string }) {
  return (
    <lord-icon
      src="https://cdn.lordicon.com/umnbegnd.json"
      trigger="loop"
      delay="500"
      stroke="bold"
      colors="primary:#242424,secondary:#16c72e"
      className={className}
      style={{ width: '100%', height: '100%' }}>
    </lord-icon>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <lord-icon
      src="https://cdn.lordicon.com/onmwuuox.json"
      trigger="loop"
      delay="500"
      stroke="bold"
      colors="primary:#848484,secondary:#30e849"
      className={className}
      style={{ width: '100%', height: '100%' }}>
    </lord-icon>
  );
}

function PaperworkIcon({ className }: { className?: string }) {
  return (
    <lord-icon
      src="https://cdn.lordicon.com/fikcyfpp.json"
      trigger="loop"
      delay="500"
      stroke="bold"
      colors="primary:#545454,secondary:#16c72e"
      className={className}
      style={{ width: '100%', height: '100%' }}>
    </lord-icon>
  );
}

function PermanentLicenceIcon({ className }: { className?: string }) {
  return (
    <lord-icon
      src="https://cdn.lordicon.com/fsstjlds.json"
      trigger="loop"
      delay="500"
      stroke="bold"
      colors="primary:#30e849"
      className={className}
      style={{ width: '100%', height: '100%' }}>
    </lord-icon>
  );
}

function InsuranceIcon({ className }: { className?: string }) {
  return (
    <lord-icon
      src="https://cdn.lordicon.com/apbwvyeg.json"
      trigger="loop"
      delay="500"
      colors="primary:#242424,secondary:#30e849"
      className={className}
      style={{ width: '100%', height: '100%' }}>
    </lord-icon>
  );
}

function CarIcon({ className }: { className?: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <lord-icon
        src="https://cdn.lordicon.com/njpauqoc.json"
        trigger="loop"
        delay="50"
        stroke="bold"
        state="loop-cycle"
        colors="primary:#242426,secondary:#242626"
        className={className}
        style={{ width: '100%', height: '100%' }}>
      </lord-icon>
    </div>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
      <lord-icon
        src="https://cdn.lordicon.com/byupthur.json"
        trigger="loop"
        state="loop-cycle"
        colors="primary:#121331,secondary:#000000"
        className={className}
        style={{ width: '85%', height: '85%' }}>
      </lord-icon>
    </div>
  );
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <lord-icon
        src="https://cdn.lordicon.com/tbabdzcy.json"
        trigger="loop"
        delay="150"
        stroke="bold"
        className={className}
        style={{ width: '100%', height: '100%' }}>
      </lord-icon>
    </div>
  );
}

const Services = () => {
  const { t, language } = useLanguage();

  const drivingCourses = [
    {
      icon: CarIcon,
      title: t('courses.beginner.title'),
      forWhom: t('courses.beginner.for'),
      duration: t('courses.beginner.duration'),
      learns: language === 'ta' 
        ? ['அடிப்படை கட்டுப்பாடுகள் & கிளட்ச்/கியர்', 'U-டர்ன், பார்க்கிங், ரிவர்ஸிங்', 'சிக்னல்கள் & லேன் ஒழுக்கம்', 'நகர போக்குவரத்து & அடிப்படை நெடுஞ்சாலை']
        : ['Basic controls & clutch/gear handling', 'U-turns, parking, reversing', 'Traffic signals & lane discipline', 'City traffic & basic highway rules'],
    },
    {
      icon: CarIcon,
      title: t('courses.refresher.title'),
      forWhom: t('courses.refresher.for'),
      duration: t('courses.refresher.duration'),
      learns: language === 'ta'
        ? ['தன்னம்பிக்கை மீட்டெடுப்பு', 'போக்குவரத்து கையாளுதல்', 'பார்க்கிங் & ரிவர்ஸிங்', 'நெடுஞ்சாலை ஓட்டம்']
        : ['Confidence building', 'Traffic handling', 'Parking & reversing practice', 'Highway driving basics'],
    },
    {
      icon: TruckIcon,
      title: t('courses.heavyvehicle.title'),
      forWhom: t('courses.heavyvehicle.for'),
      duration: t('courses.heavyvehicle.duration'),
      learns: language === 'ta'
        ? ['கனரக வாகன கட்டுப்பாடு', 'சரக்கு ஏற்றுதல்/இறக்குதல்', 'நெடுஞ்சாலை ஓட்டுதல்', 'வணிக உரிம தயாரிப்பு']
        : ['Heavy vehicle control', 'Loading/unloading techniques', 'Highway driving', 'Commercial license preparation'],
    },
  ];

  const licenceServices = [
    {
      icon: DocumentIcon,
      title: t('licence.learner.title'),
      docs: language === 'ta'
        ? ['வயது சான்று (ஆதார்/பிறப்பு சான்றிதழ்)', 'முகவரி சான்று', 'பாஸ்போர்ட் புகைப்படம்', 'மருத்துவ சான்றிதழ் (வயது 40+)']
        : ['Age proof (Aadhaar/Birth Certificate)', 'Address proof', 'Passport size photo', 'Medical certificate (if 40+)'],
      process: language === 'ta'
        ? ['ஆவணங்கள் & விவரங்களை பகிரவும்', 'நாங்கள் ஆன்லைன் படிவங்களை நிரப்புவோம்', 'RTO ஸ்லாட் புக்கிங்', 'நீங்கள் RTO சென்று தேர்வு எழுதுவீர்கள்']
        : ['Share your documents & details', 'We fill online forms', 'RTO slot booking', 'You visit RTO for test'],
    },
    {
      icon: PermanentLicenceIcon,
      title: t('licence.permanent.title'),
      docs: language === 'ta'
        ? ['கற்றல் உரிமம் (30 நாட்கள் பழமை)', 'வயது & முகவரி சான்று', 'புகைப்படம்']
        : ['Learner licence (30 days old)', 'Age & address proof', 'Photo'],
      process: language === 'ta'
        ? ['தேர்வுக்கு தயாரிப்பு பயிற்சி', 'RTO ஸ்லாட் புக்கிங்', 'தேர்வு நாளில் ஆதரவு', 'விண்ணப்ப நிலை கண்காணிப்பு']
        : ['Test preparation training', 'RTO slot booking', 'Support on test day', 'Application status tracking'],
    },
    {
      icon: RenewalIcon,
      title: t('licence.renewal.title'),
      docs: language === 'ta'
        ? ['பழைய உரிமம்', 'முகவரி சான்று', 'புகைப்படம்', 'மருத்துவ சான்றிதழ் (வயது 40+)']
        : ['Old licence', 'Address proof', 'Photo', 'Medical certificate (if 40+)'],
      process: language === 'ta'
        ? ['ஆவணங்களை சமர்ப்பிக்கவும்', 'ஆன்லைன் விண்ணப்பம்', 'RTO பரிசோதனை', 'புதிய உரிமம் பெறுதல்']
        : ['Submit documents', 'Online application', 'RTO verification', 'New licence delivery'],
    },
    {
      icon: LocationIcon,
      title: t('licence.address.title'),
      docs: language === 'ta'
        ? ['தற்போதைய உரிமம்', 'புதிய முகவரி சான்று', 'புகைப்படம்']
        : ['Current licence', 'New address proof', 'Photo'],
      process: language === 'ta'
        ? ['ஆவணங்களை சேகரித்தல்', 'ஆன்லைன் விண்ணப்பம்', 'புதுப்பிக்கப்பட்ட உரிமம்']
        : ['Document collection', 'Online application', 'Updated licence'],
    },
  ];

  const rcServices = [
    {
      icon: RenewalIcon,
      title: t('rc.renewal.title'),
      docs: language === 'ta'
        ? ['பழைய RC', 'காப்பீடு நகல்', 'PUC சான்றிதழ்', 'முகவரி சான்று']
        : ['Old RC', 'Insurance copy', 'PUC certificate', 'Address proof'],
    },
    {
      icon: LocationIcon,
      title: t('rc.address.title'),
      docs: language === 'ta'
        ? ['தற்போதைய RC', 'புதிய முகவரி சான்று', 'காப்பீடு']
        : ['Current RC', 'New address proof', 'Insurance'],
    },
    {
      icon: PaperworkIcon,
      title: t('rc.hypothecation.title'),
      docs: language === 'ta'
        ? ['RC புத்தகம்', 'கடன் மூடல் கடிதம்', 'NOC from bank']
        : ['RC book', 'Loan closure letter', 'NOC from bank'],
    },
    {
      icon: InsuranceIcon,
      title: t('rc.puc.title'),
      docs: language === 'ta'
        ? ['வாகன ஆவணங்கள்', 'பழைய PUC/காப்பீடு']
        : ['Vehicle documents', 'Old PUC/Insurance'],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="gradient-hero section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('nav.services')}
          </h1>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-6 bg-card border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="#courses" className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors">
              {t('courses.title')}
            </a>
            <a href="#licence" className="px-4 py-2 rounded-lg bg-secondary/10 text-secondary font-medium hover:bg-secondary/20 transition-colors">
              {t('licence.title')}
            </a>
            <a href="#rc" className="px-4 py-2 rounded-lg bg-accent/10 text-accent font-medium hover:bg-accent/20 transition-colors">
              {t('rc.title')}
            </a>
          </div>
        </div>
      </section>

      {/* Driving Courses */}
      <section id="courses" className="section-padding bg-background scroll-mt-32">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            {t('courses.title')}
          </h2>
          <div className="grid lg:grid-cols-3 gap-6">
            {drivingCourses.map((course, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 md:p-8 card-elevated border border-border/50">
                <div className="w-14 h-14 rounded-xl bg-white/80 border-2 border-purple-200 flex items-center justify-center mb-5">
                  <course.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-2">{course.forWhom}</p>
                <p className="text-secondary font-medium text-sm mb-4">{course.duration}</p>
                
                <h4 className="font-semibold text-foreground mb-3">{t('courses.learn')}</h4>
                <ul className="space-y-2 mb-6">
                  {course.learns.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full" asChild>
                  <a href="/contact#enquiry-form">{t('courses.enquire')}</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licence Services */}
      <section id="licence" className="section-padding bg-muted/50 scroll-mt-32">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            {t('licence.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {licenceServices.map((service, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 card-elevated border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{service.title}</h3>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">{t('licence.docs')}</h4>
                  <ul className="space-y-1">
                    {service.docs.map((doc, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-2" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">{t('licence.process')}</h4>
                  <ol className="space-y-1">
                    {service.process.map((step, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary font-semibold">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RC Services */}
      <section id="rc" className="section-padding bg-background scroll-mt-32">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            {t('rc.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rcServices.map((service, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 card-elevated border border-border/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-bold text-foreground">{service.title}</h3>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">{t('licence.docs')}</h4>
                  <ul className="space-y-1">
                    {service.docs.map((doc, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-muted rounded-2xl text-center">
            <AlertCircle className="w-8 h-8 text-accent mx-auto mb-3" />
            <p className="text-muted-foreground">
              {language === 'ta' 
                ? 'RC வேலைக்கு ஆதரவு தேவையா? எங்களை தொடர்பு கொள்ளுங்கள்!'
                : 'Need support with RC work? Contact us!'}
            </p>
          </div>
        </div>
      </section>

      {/* Helpful Resources Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              {language === 'ta' ? 'பயனுள்ள வளங்கள்' : 'Helpful Resources'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'ta' ? 'பாதுகாப்பான ஓட்டுநருக்கு அத்தியாவசியமான தகவல்கள்' : 'Essential information for safe driving'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Traffic Rules */}
            <a
              href="https://parivahan.gov.in/parivahan//en/content/know-your-traffic-signs"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl p-6 md:p-8 card-elevated border border-border/50 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-4xl animate-pulse">⚠️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {language === 'ta' ? 'போக்குவரத்து விதிகள் & சிக்னல்கள்' : 'Traffic Rules & Signs'}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {language === 'ta' 
                      ? 'இந்திய சாலை விதிகள், போக்குவரத்து சிக்னல்கள் மற்றும் பாதுகாப்பு வழிகாட்டுதல்கள்'
                      : 'Indian road rules, traffic signals, and safety guidelines'}
                  </p>
                  <span className="text-sm font-medium text-primary flex items-center gap-2">
                    {language === 'ta' ? 'விதிகளைப் பார்க்க' : 'View Rules'}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>

            {/* RTO Information */}
            <a
              href="https://parivahan.gov.in/parivahan/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-2xl p-6 md:p-8 card-elevated border border-border/50 hover:border-secondary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <span className="text-4xl">🏛️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {language === 'ta' ? 'RTO தகவல்கள்' : 'RTO Information'}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {language === 'ta'
                      ? 'உரிம விண்ணப்பம், வாகன பதிவு மற்றும் RTO சேவைகள்'
                      : 'License application, vehicle registration, and RTO services'}
                  </p>
                  <span className="text-sm font-medium text-secondary flex items-center gap-2">
                    {language === 'ta' ? 'RTO வலைத்தளம்' : 'Visit RTO Portal'}
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
