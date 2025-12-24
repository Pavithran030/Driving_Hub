import { Link } from 'react-router-dom';
import { Camera, Quote, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import photo12 from '@/assets/photo-12.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const Stories = () => {
  const { t, language } = useLanguage();

  const galleryImages = [
    { alt: 'Training session', image: photo12 },
    { alt: 'Student with car', placeholder: true },
    { alt: 'RTO test success', placeholder: true },
    { alt: 'Classroom training', placeholder: true },
    { alt: 'Training vehicle', placeholder: true },
    { alt: 'Certificate ceremony', placeholder: true },
  ];

  const testimonials = [
    {
      name: language === 'ta' ? 'கவிதா செல்வராஜ்' : 'Kavitha Selvaraj',
      location: language === 'ta' ? 'அத்திப்பட்டி, சேலம்' : 'Atthipatty, Salem',
      course: language === 'ta' ? 'ஆரம்ப கார் பயிற்சி' : 'Beginner Car Course',
      quote: language === 'ta' 
        ? 'நான் 35 வயதில் வாகனம் ஓட்ட கற்றுக்கொண்டேன். மிகவும் பயமாக இருந்தது, ஆனால் பிரேமா மேடம் மிகவும் பொறுமையாக கற்றுக்கொடுத்தார். இப்போது தன்னம்பிக்கையுடன் வாகனம் ஓட்டுகிறேன். என் குடும்பத்தினர் மிகவும் பெருமைப்படுகிறார்கள்!'
        : 'I learned to drive at 35. Was very nervous, but Prema mam was so patient. Now I drive confidently every day. My family is so proud of me!',
    },
    {
      name: language === 'ta' ? 'முருகன் கண்ணன்' : 'Murugan Kannan',
      location: language === 'ta' ? 'தலைவாசல்' : 'Thalaivasal',
      course: language === 'ta' ? 'உரிம புதுப்பித்தல்' : 'Licence Renewal',
      quote: language === 'ta'
        ? 'என் உரிமம் காலாவதியாகி 2 வருடம் ஆனது. அலுவலகம் விடுமுறை எடுக்க முடியவில்லை. இவர்கள் எல்லா ஆவணங்களையும் கையாண்டு, RTO ஸ்லாட் புக் செய்து, ஒரே நாளில் வேலை முடித்தார்கள்.'
        : 'My licence was expired for 2 years. Could not take leave from office. They handled all paperwork, booked RTO slot, and got it done in one day!',
    },
    {
      name: language === 'ta' ? 'பிரியா ராஜேந்திரன்' : 'Priya Rajendran',
      location: language === 'ta' ? 'கொளத்தூர்' : 'Kolathur',
      course: language === 'ta' ? 'ரிஃப்ரஷர் படிப்பு' : 'Refresher Course',
      quote: language === 'ta'
        ? '10 வருடங்களுக்கு முன்பு உரிமம் வாங்கினேன், ஆனால் ஒருபோதும் ஓட்டவில்லை. இப்போது மீண்டும் கற்றுக்கொண்டேன். ஒரு வாரத்தில் தன்னம்பிக்கை வந்துவிட்டது!'
        : 'Got my licence 10 years back but never drove. Learned again now. In just one week, I got my confidence back!',
    },
    {
      name: language === 'ta' ? 'சரவணன் எம்' : 'Saravanan M.',
      location: language === 'ta' ? 'சேலம் நகரம்' : 'Salem Town',
      course: language === 'ta' ? 'ஆரம்ப கார் பயிற்சி' : 'Beginner Car Course',
      quote: language === 'ta'
        ? 'செல்வராஜ் சார் மிகவும் நல்லவர். நான் clutch பயம், gear பயம் என்று இருந்தேன். அவர் பொறுமையாக கற்றுக்கொடுத்தார். முதல் attempt-ல் RTO pass ஆனேன்!'
        : 'Selvaraj sir is very good. I was scared of clutch and gears. He taught patiently. I passed RTO test in first attempt!',
    },
    {
      name: language === 'ta' ? 'லக்ஷ்மி நாராயணன்' : 'Lakshmi Narayanan',
      location: language === 'ta' ? 'ஓமலூர்' : 'Omalur',
      course: language === 'ta' ? 'RC முகவரி மாற்றம்' : 'RC Address Change',
      quote: language === 'ta'
        ? 'சென்னையிலிருந்து சேலம் வந்தேன். RC முகவரி மாற்ற RTO-வில் நிறைய நேரம் வீணாகும் என்று நினைத்தேன். இவர்கள் மூலம் மிக எளிதாக ஆனது.'
        : 'Moved from Chennai to Salem. Thought RC address change would waste lot of time in RTO. Through them it was very easy.',
    },
    {
      name: language === 'ta' ? 'மீனாட்சி சுந்தரம்' : 'Meenakshi Sundaram',
      location: language === 'ta' ? 'மெச்சேரி' : 'Mecheri',
      course: language === 'ta' ? 'கனரக வாகன பயிற்சி' : 'Heavy Vehicle Training',
      quote: language === 'ta'
        ? 'லாரி ஓட்ட கற்றுக்கொண்டேன். முழு நெடுஞ்சாலை பயிற்சி கொடுத்தார்கள். இப்போது வணிக வாகன உரிமம் வாங்கி வேலை செய்கிறேன்.'
        : 'Learned lorry driving. They provided complete highway training. Now I have commercial vehicle license and working.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="gradient-hero section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('stories.title')}
          </h1>
          <p className="text-white/90 text-lg">
            {t('stories.subtitle')}
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            {t('stories.gallery')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square bg-muted rounded-2xl overflow-hidden relative group">
                {image.image ? (
                  <img 
                    src={image.image} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-muted-foreground/40" />
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            {t('stories.testimonials')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 md:p-8 card-elevated border border-border/50 relative">
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-secondary font-medium">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-card rounded-3xl p-8 md:p-12 card-elevated border border-border/50 text-center max-w-2xl mx-auto">
            <Send className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('stories.share')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {language === 'ta' 
                ? 'எங்கள் நிறுவனத்தில் படித்தீர்களா? உங்கள் அனுபவத்தை பகிருங்கள்!'
                : 'Did you learn with us? Share your experience!'}
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                {language === 'ta' ? 'கருத்து பகிர' : 'Share Feedback'}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Stories;
