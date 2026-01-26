import { Link } from 'react-router-dom';
import { Camera, Quote, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import photo12 from '@/assets/photo-12.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

import { SEO } from '@/components/SEO';

interface Testimonial {
  name: string;
  location: string;
  course: string;
  quote: string;
}

const Stories = () => {
  const { t, language } = useLanguage();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    course: '',
    feedback: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [userTestimonials, setUserTestimonials] = useState<Testimonial[]>([]);
  
  // Google Sheets Web App URL - REPLACE THIS WITH YOUR URL
  const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbyDwphXTmpyafGt-5M3RaQcShPJ72zVyd2gsqDzGOEHQ1CvXJReLu5R8tv0XNIsU6pmtw/exec';

  // Load testimonials from Google Sheets on mount
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(GOOGLE_SHEET_URL);
        const result = await response.json();
        if (result.status === 'success' && result.data) {
          setUserTestimonials(result.data);
        }
      } catch (error) {
        console.error('Failed to load testimonials:', error);
      }
    };
    
    fetchTestimonials();
    // Refresh testimonials every 30 seconds
    const interval = setInterval(fetchTestimonials, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Create optimistic testimonial to show immediately
    const optimisticTestimonial: Testimonial = {
      name: formData.name,
      location: formData.location,
      course: formData.course,
      quote: formData.feedback,
    };

    // Add to UI immediately (optimistic update)
    const updatedTestimonials = [optimisticTestimonial, ...userTestimonials];
    setUserTestimonials(updatedTestimonials);
    localStorage.setItem('cachedTestimonials', JSON.stringify(updatedTestimonials));

    try {
      // Submit to Google Sheets in background
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          location: formData.location,
          course: formData.course,
          feedback: formData.feedback,
        }),
      });

      // Show success message
      setSubmitMessage(language === 'ta' 
        ? 'நன்றி! உங்கள் கருத்து வெற்றிகரமாக சேர்க்கப்பட்டது.'
        : 'Thank you! Your feedback has been submitted successfully.');
      
      // Reset form and scroll after 2 seconds
      setTimeout(() => {
        setFormData({ name: '', location: '', course: '', feedback: '' });
        setIsSubmitting(false);
        setShowForm(false);
        setSubmitMessage('');
        
        // Scroll to testimonials section
        const testimonialsSection = document.querySelector('.section-padding.bg-muted\\/30');
        if (testimonialsSection) {
          testimonialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 2000);
      
    } catch (error) {
      setSubmitMessage(language === 'ta' 
        ? 'மன்னிக்கவும், ஏதோ தவறு நடந்தது. மீண்டும் முயற்சிக்கவும்.'
        : 'Sorry, something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

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
      <SEO
        title={language === 'ta' ? "மாணவர் அனுபவங்கள் | முருகன் டிரைவிங்" : "Student Stories | Murugan Driving Institute Salem"}
        description={language === 'ta'
          ? "எங்கள் மாணவர்களின் வெற்றி கதைகள் மற்றும் அனுபவங்களை படியுங்கள். 10,000+ மகிழ்ச்சியான மாணவர்கள்."
          : "Read inspiring stories from our students. See how we helped nervous beginners become confident drivers."}
        url="/stories"
      />
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

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            {t('stories.testimonials')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* User-submitted testimonials first */}
            {userTestimonials.map((testimonial, index) => (
              <div key={`user-${index}`} className="bg-card rounded-2xl p-6 md:p-8 card-elevated border border-green-200 relative">
                <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                  {language === 'ta' ? 'புதிய' : 'New'}
                </div>
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 relative z-10 mt-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-700 font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-secondary font-medium">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Default testimonials */}
            {testimonials.map((testimonial, index) => (
              <div key={`default-${index}`} className="bg-card rounded-2xl p-6 md:p-8 card-elevated border border-border/50 relative">
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
          <div className="bg-card rounded-3xl p-8 md:p-12 card-elevated border border-border/50 max-w-3xl mx-auto">
            {!showForm ? (
              <div className="text-center">
                <Send className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {t('stories.share')}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {language === 'ta'
                    ? 'எங்கள் நிறுவனத்தில் படித்தீர்களா? உங்கள் அனுபவத்தை பகிருங்கள்!'
                    : 'Did you learn with us? Share your experience!'}
                </p>
                <Button size="lg" onClick={() => setShowForm(true)}>
                  {language === 'ta' ? 'கருத்து பகிர' : 'Share Feedback'}
                </Button>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
                  {language === 'ta' ? 'உங்கள் அனுபவத்தை பகிருங்கள்' : 'Share Your Experience'}
                </h3>
                <p className="text-muted-foreground mb-6 text-center">
                  {language === 'ta'
                    ? 'உங்கள் கருத்துக்களை எங்களுடன் பகிர்ந்து கொள்ளுங்கள். இது மற்ற மாணவர்களுக்கு உதவும்.'
                    : 'Share your feedback with us. This will help other students.'}
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        {language === 'ta' ? 'பெயர்' : 'Name'}
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={language === 'ta' ? 'உங்கள் பெயர்' : 'Your Name'}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="location">
                        {language === 'ta' ? 'இடம்' : 'Location'}
                      </Label>
                      <Input
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder={language === 'ta' ? 'உங்கள் பகுதி (எ.கா: ஓமலூர், சேலம்)' : 'Your Area (e.g., Omalur, Salem)'}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="course">
                      {language === 'ta' ? 'படிப்பு' : 'Course'}
                    </Label>
                    <Input
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      placeholder={language === 'ta' ? 'நீங்கள் எடுத்த படிப்பு' : 'Course you took'}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="feedback">
                      {language === 'ta' ? 'உங்கள் அனுபவம்' : 'Your Experience'}
                    </Label>
                    <Textarea
                      id="feedback"
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleInputChange}
                      placeholder={language === 'ta'
                        ? 'உங்கள் அனுபவத்தை விவரமாக எழுதுங்கள்...'
                        : 'Share your experience in detail...'}
                      rows={5}
                      required
                    />
                  </div>
                  
                  {submitMessage && (
                    <div className="text-green-600 text-sm text-center p-3 bg-green-50 rounded-lg">
                      {submitMessage}
                    </div>
                  )}
                  
                  <div className="flex gap-3">
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setShowForm(false)}
                    >
                      {language === 'ta' ? 'ரத்து செய்' : 'Cancel'}
                    </Button>
                    <Button type="submit" className="flex-1" disabled={isSubmitting}>
                      {isSubmitting
                        ? (language === 'ta' ? 'அனுப்புகிறது...' : 'Submitting...')
                        : (language === 'ta' ? 'கருத்தை அனுப்பு' : 'Submit Feedback')}
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Stories;
