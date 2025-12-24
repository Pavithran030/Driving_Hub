import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    time: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: language === 'ta' ? 'பிழை' : 'Error',
        description: language === 'ta' ? 'பெயர் மற்றும் தொலைபேசி எண் தேவை' : 'Name and phone number are required',
        variant: 'destructive',
      });
      return;
    }
    
    // Simulate form submission
    setIsSubmitted(true);
    toast({
      title: language === 'ta' ? 'வெற்றி!' : 'Success!',
      description: t('contact.form.success'),
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const serviceOptions = language === 'ta'
    ? ['வாகன பயிற்சி', 'உரிம சேவை', 'RC சேவை', 'மற்றவை']
    : ['Driving Course', 'Licence Service', 'RC Service', 'Other'];

  const timeOptions = language === 'ta'
    ? ['காலை (6AM - 10AM)', 'மதியம் (10AM - 2PM)', 'மாலை (2PM - 6PM)', 'இரவு (6PM - 8PM)']
    : ['Morning (6AM - 10AM)', 'Noon (10AM - 2PM)', 'Afternoon (2PM - 6PM)', 'Evening (6PM - 8PM)'];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="gradient-hero section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-white/90 text-lg">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {language === 'ta' ? 'எங்களை தொடர்பு கொள்ளுங்கள்' : 'Get in Touch'}
              </h2>
              
              <div className="space-y-6">
                <a href="tel:+919876543210" className="flex items-start gap-4 p-4 bg-card rounded-xl card-elevated border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('footer.phone')}</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                    <p className="text-muted-foreground">+91 98765 43211</p>
                  </div>
                </a>

                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-4 bg-card rounded-xl card-elevated border border-border/50 hover:border-whatsapp/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-whatsapp/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-whatsapp" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('nav.whatsapp')}</h3>
                    <p className="text-muted-foreground">{language === 'ta' ? 'உடனடி செய்திகளுக்கு' : 'Click to chat with us'}</p>
                  </div>
                </a>

                <a href="mailto:info@salemdrivingschool.com" className="flex items-start gap-4 p-4 bg-card rounded-xl card-elevated border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('footer.email')}</h3>
                    <p className="text-muted-foreground">info@salemdrivingschool.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl card-elevated border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('footer.address')}</h3>
                    <p className="text-muted-foreground">Samenathan Complex, Near Taluka Office,<br />Mettur Main Road, Omalur Tk<br />Salem Dt - 636455, Tamil Nadu</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-card rounded-xl card-elevated border border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{language === 'ta' ? 'நேரம்' : 'Timings'}</h3>
                    <p className="text-muted-foreground">
                      {language === 'ta' ? 'திங்கள் - சனி: காலை 6 - இரவு 8' : 'Mon - Sat: 7:00 AM - 5:00 PM'}<br />
                      {/* {language === 'ta' ? 'ஞாயிறு: காலை 7 - மதியம் 12' : 'Sunday: 7:00 AM - 12:00 PM'} */}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="font-semibold text-foreground mb-4">{t('contact.location')}</h3>
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.0734262489264!2d78.03881097779417!3d11.739901858753491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf9915423bf39%3A0x49d79817ec0bc856!2sMurugan%20Driving%20Institute%20Omalur!5e1!3m2!1sen!2sin!4v1766569620975!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Murugan Driving Institute Location"
                  />
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <div className="bg-card rounded-2xl p-6 md:p-8 card-elevated border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t('cta.enquiry')}
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {language === 'ta' ? 'நன்றி!' : 'Thank You!'}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {t('contact.form.success')}
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>
                      {language === 'ta' ? 'மற்றொரு விசாரணை' : 'Send Another Enquiry'}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder={language === 'ta' ? 'உங்கள் பெயர்' : 'Enter your name'}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.form.phone')} *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.form.email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.form.service')}
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      >
                        <option value="">{language === 'ta' ? 'சேவையை தேர்ந்தெடுக்கவும்' : 'Select a service'}</option>
                        {serviceOptions.map((option, i) => (
                          <option key={i} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.form.time')}
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      >
                        <option value="">{language === 'ta' ? 'நேரத்தை தேர்ந்தெடுக்கவும்' : 'Select preferred time'}</option>
                        {timeOptions.map((option, i) => (
                          <option key={i} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.form.message')}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                        placeholder={language === 'ta' ? 'உங்கள் செய்தி...' : 'Your message...'}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-5 h-5" />
                      {t('contact.form.submit')}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
