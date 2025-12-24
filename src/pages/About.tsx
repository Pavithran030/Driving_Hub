import { Phone, Mail, MapPin, Clock, Award, Users, Car, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const About = () => {
  const { language } = useLanguage();

  const instructors = [
    {
      name: language === 'ta' ? 'செல்வராஜ் எம்' : 'Selvaraj M.',
      role: language === 'ta' ? 'தலைமை பயிற்சியாளர்' : 'Chief Instructor',
      experience: language === 'ta' ? '20 ஆண்டுகள் அனுபவம்' : '20 years experience',
      specialty: language === 'ta' ? 'ஆரம்பநிலையாளர்கள் & பெண்கள்' : 'Beginners & Women Learners',
      languages: language === 'ta' ? 'தமிழ், ஆங்கிலம்' : 'Tamil, English',
      bio: language === 'ta' 
        ? 'செல்வராஜ் எங்கள் நிறுவனத்தின் நிறுவனர் மற்றும் தலைமை பயிற்சியாளர். பயமுள்ள மாணவர்களுக்கு நம்பிக்கையூட்டும் விதத்தில் கற்பிப்பதில் நிபுணர். RTO விதிகள் மற்றும் சாலை பாதுகாப்பில் ஆழ்ந்த அறிவு பெற்றவர்.'
        : 'Selvaraj is the founder and chief instructor of our institute. Expert in teaching nervous learners with patience and building their confidence. Deep knowledge of RTO rules and road safety.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      qualifications: [
        language === 'ta' ? 'RTO சான்றிதழ் பயிற்சியாளர்' : 'RTO Certified Trainer',
        language === 'ta' ? 'பாதுகாப்பு ஓட்டுநர் சான்றிதழ்' : 'Defensive Driving Certified',
        language === 'ta' ? '10,000+ மாணவர்களுக்கு பயிற்சி' : 'Trained 10,000+ Students',
      ],
    },
    {
      name: language === 'ta' ? 'ராஜேஷ் கே' : 'Rajesh K.',
      role: language === 'ta' ? 'மூத்த பயிற்சியாளர்' : 'Senior Instructor',
      experience: language === 'ta' ? '15 ஆண்டுகள் அனுபவம்' : '15 years experience',
      specialty: language === 'ta' ? 'RTO தேர்வு தயாரிப்பு' : 'RTO Test Preparation',
      languages: language === 'ta' ? 'தமிழ், ஆங்கிலம், தெலுங்கு' : 'Tamil, English, Telugu',
      bio: language === 'ta' 
        ? 'ராஜேஷ் RTO தேர்வு தயாரிப்பில் நிபுணர். தேர்வில் எதிர்பார்க்கப்படும் அனைத்து நிலைகளையும் முழுமையாக பயிற்சி அளிப்பார். அவரது மாணவர்களின் வெற்றி விகிதம் 95% க்கும் அதிகம்.'
        : 'Rajesh specializes in RTO test preparation. He thoroughly trains students on all aspects expected in the test. His students have a success rate of over 95%.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      qualifications: [
        language === 'ta' ? 'RTO தேர்வு நிபுணர்' : 'RTO Test Expert',
        language === 'ta' ? '95% தேர்வு வெற்றி விகிதம்' : '95% Test Pass Rate',
        language === 'ta' ? 'பலமொழி பயிற்சி' : 'Multilingual Training',
      ],
    },
    {
      name: language === 'ta' ? 'பிரேமா எஸ்' : 'Prema S.',
      role: language === 'ta' ? 'பெண் பயிற்சியாளர்' : 'Women Instructor',
      experience: language === 'ta' ? '10 ஆண்டுகள் அனுபவம்' : '10 years experience',
      specialty: language === 'ta' ? 'பெண் மாணவர்களுக்கு சிறப்பு பயிற்சி' : 'Specialized Training for Women',
      languages: language === 'ta' ? 'தமிழ், ஆங்கிலம்' : 'Tamil, English',
      bio: language === 'ta' 
        ? 'பிரேமா பெண் மாணவர்களுக்கு சிறப்பு பயிற்சி அளிக்கிறார். அவர்களுக்கு வசதியான மற்றும் பாதுகாப்பான சூழலில் கற்பிக்கிறார். பெண்கள் தனியாக ஓட்டுவதில் நம்பிக்கை கொள்ள உதவுகிறார்.'
        : 'Prema provides specialized training for women learners. She teaches in a comfortable and safe environment. Helps women gain confidence to drive independently.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      qualifications: [
        language === 'ta' ? 'பெண் பயிற்சி நிபுணர்' : 'Women Training Specialist',
        language === 'ta' ? 'பாதுகாப்பு சான்றிதழ்' : 'Safety Certified',
        language === 'ta' ? 'பொறுமையான கற்பித்தல்' : 'Patient Teaching Style',
      ],
    },
    {
      name: language === 'ta' ? 'குமார் வி' : 'Kumar V.',
      role: language === 'ta' ? 'நெடுஞ்சாலை பயிற்சியாளர்' : 'Highway Instructor',
      experience: language === 'ta' ? '12 ஆண்டுகள் அனுபவம்' : '12 years experience',
      specialty: language === 'ta' ? 'நெடுஞ்சாலை & நீண்ட தூர ஓட்டம்' : 'Highway & Long Distance Driving',
      languages: language === 'ta' ? 'தமிழ், ஆங்கிலம், கன்னடம்' : 'Tamil, English, Kannada',
      bio: language === 'ta' 
        ? 'குமார் நெடுஞ்சாலை ஓட்டம் மற்றும் நீண்ட தூர பயணத்தில் நிபுணர். வேகமான சாலைகளில் பாதுகாப்பாக ஓட்டுவது, ஓவர்டேக்கிங், இரவு ஓட்டம் ஆகியவற்றில் பயிற்சி அளிக்கிறார்.'
        : 'Kumar specializes in highway driving and long distance travel. He trains on safe driving at high speeds, overtaking, and night driving.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      qualifications: [
        language === 'ta' ? 'நெடுஞ்சாலை நிபுணர்' : 'Highway Expert',
        language === 'ta' ? 'நீண்ட தூர பயிற்சி' : 'Long Distance Training',
        language === 'ta' ? 'இரவு ஓட்டம் சிறப்பு' : 'Night Driving Specialist',
      ],
    },
  ];

  const stats = [
    { value: '20+', label: language === 'ta' ? 'ஆண்டுகள் அனுபவம்' : 'Years Experience' },
    { value: '10,000+', label: language === 'ta' ? 'மாணவர்கள்' : 'Students Trained' },
    { value: '95%', label: language === 'ta' ? 'தேர்வு வெற்றி' : 'Pass Rate' },
    { value: '4', label: language === 'ta' ? 'நிபுணர் பயிற்சியாளர்கள்' : 'Expert Trainers' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Hero */}
      <section className="gradient-hero section-padding">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {language === 'ta' ? 'எங்களைப் பற்றி' : 'About Us'}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            {language === 'ta' 
              ? 'சேலத்தின் நம்பகமான ஓட்டுநர் பயிற்சி நிறுவனம்'
              : 'Salem\'s Trusted Driving Training Institute'}
          </p>
        </div>
      </section>

      {/* Simple Overview */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              {language === 'ta' ? 'எங்கள் நிறுவனம்' : 'Our Institute'}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {language === 'ta' 
                ? '20 ஆண்டுகளுக்கும் மேலான அனுபவத்துடன், சேலம் மற்றும் சுற்றுவட்டார பகுதிகளில் ஆயிரக்கணக்கான மாணவர்களுக்கு தரமான ஓட்டுநர் பயிற்சி வழங்கி வருகிறோம். எங்கள் இலக்கு - ஒவ்வொரு மாணவரும் நம்பிக்கையுடன் பாதுகாப்பாக வாகனம் ஓட்ட கற்றுக்கொள்வது.'
                : 'With over 20 years of experience, we have been providing quality driving training to thousands of students in Salem and surrounding areas. Our goal - every student learns to drive safely with confidence.'}
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-muted rounded-2xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick Features */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50">
                <ShieldCheck className="w-8 h-8 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{language === 'ta' ? 'பாதுகாப்பு முதல்' : 'Safety First'}</span>
              </div>
              <div className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50">
                <Car className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{language === 'ta' ? 'இரட்டை கட்டுப்பாடு கார்' : 'Dual Control Cars'}</span>
              </div>
              <div className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50">
                <Users className="w-8 h-8 text-secondary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{language === 'ta' ? 'நட்பான பயிற்சியாளர்கள்' : 'Friendly Trainers'}</span>
              </div>
              <div className="flex items-center gap-3 bg-card p-4 rounded-xl border border-border/50">
                <Award className="w-8 h-8 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{language === 'ta' ? 'RTO சான்றிதழ்' : 'RTO Certified'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Instructors - Detailed Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {language === 'ta' ? 'எங்கள் பயிற்சியாளர்கள்' : 'Our Instructors'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ta' 
                ? 'அனுபவம் வாய்ந்த, நட்பான மற்றும் பொறுமையான பயிற்சியாளர்கள் குழு'
                : 'A team of experienced, friendly and patient instructors'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-card rounded-3xl overflow-hidden card-elevated border border-border/50">
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-48 h-48 sm:h-auto flex-shrink-0">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1 p-6">
                    <div className="mb-3">
                      <h3 className="text-xl font-bold text-foreground">{instructor.name}</h3>
                      <p className="text-primary font-medium">{instructor.role}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3 text-sm">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                        {instructor.experience}
                      </span>
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                        {instructor.languages}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {instructor.bio}
                    </p>
                    
                    <div className="border-t border-border/50 pt-3">
                      <p className="text-xs text-muted-foreground mb-2 font-medium">
                        {language === 'ta' ? 'சிறப்புகள்:' : 'Specializations:'}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {instructor.qualifications.map((qual, qIndex) => (
                          <span key={qIndex} className="text-xs bg-muted px-2 py-1 rounded text-foreground">
                            {qual}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Quick Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{language === 'ta' ? 'தொலைபேசி' : 'Phone'}</p>
                  <p className="font-semibold text-foreground">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{language === 'ta' ? 'மின்னஞ்சல்' : 'Email'}</p>
                  <p className="font-semibold text-foreground">info@example.com</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{language === 'ta' ? 'முகவரி' : 'Address'}</p>
                  <p className="font-semibold text-foreground">{language === 'ta' ? 'சேலம், தமிழ்நாடு' : 'Salem, Tamil Nadu'}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{language === 'ta' ? 'நேரம்' : 'Timings'}</p>
                  <p className="font-semibold text-foreground">6 AM - 8 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
