import { Phone, Mail, MapPin, Clock, Award, Users, ShieldCheck, Settings, CheckCircle } from 'lucide-react';
import photo13 from '@/assets/photo-13.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';

const PhoneIcon = ({ className }: { className?: string }) => (
  <lord-icon
    src="https://cdn.lordicon.com/nnzfcuqw.json"
    trigger="loop"
    delay="500"
    stroke="bold"
    colors="primary:#848484,secondary:#30e849"
    className={className}
    style={{ width: '100%', height: '100%' }}>
  </lord-icon>
);

const MailIcon = ({ className }: { className?: string }) => (
  <lord-icon
    src="https://cdn.lordicon.com/tcbkwnah.json"
    trigger="loop"
    delay="500"
    stroke="bold"
    colors="primary:#121331,secondary:#30e849,tertiary:#ebe6ef"
    className={className}
    style={{ width: '100%', height: '100%' }}>
  </lord-icon>
);

const LocationIcon = ({ className }: { className?: string }) => (
  <lord-icon
    src="https://cdn.lordicon.com/onmwuuox.json"
    trigger="loop"
    delay="500"
    stroke="bold"
    colors="primary:#b4b4b4,secondary:#30e849"
    className={className}
    style={{ width: '100%', height: '100%' }}>
  </lord-icon>
);

const ClockIcon = ({ className }: { className?: string }) => (
  <lord-icon
    src="https://cdn.lordicon.com/warimioc.json"
    trigger="loop"
    delay="500"
    stroke="bold"
    colors="primary:#b4b4b4,secondary:#30e849"
    className={className}
    style={{ width: '100%', height: '100%' }}>
  </lord-icon>
);

const CarIcon = ({ className }: { className?: string }) => (
  <div className="w-full h-full flex items-center justify-center">
    <lord-icon
      src="https://cdn.lordicon.com/njpauqoc.json"
      trigger="loop"
      delay="50"
      stroke="bold"
      state="loop-cycle"
      colors="primary:#7c3aed,secondary:#6366f1"
      className={className}
      style={{ width: '100%', height: '100%' }}>
    </lord-icon>
  </div>
);

const TruckIcon = ({ className }: { className?: string }) => (
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

const About = () => {
  const { language } = useLanguage();

  // Owner/Founder Information
  const owner = {
    name: language === 'ta' ? 'முருகன்' : 'Murugan',
    role: language === 'ta' ? 'நிறுவனர் & தலைமை பயிற்சியாளர்' : 'Founder & Chief Instructor',
    experience: language === 'ta' ? '20 ஆண்டுகள் அனுபவம்' : '20 years experience',
    specialty: language === 'ta' ? 'ஆரம்பநிலையாளர்கள் & பெண்கள்' : 'Beginners & Women Learners',
    languages: language === 'ta' ? 'தமிழ், ஆங்கிலம்' : 'Tamil, English',
    bio: language === 'ta' 
      ? 'முருகன் 2008 ஆம் ஆண்டில் முருகன் டிரைவிங் நிறுவனத்தை நிறுவினார். 20 ஆண்டுகளுக்கும் மேலான அனுபவத்துடன், சேலம் மற்றும் சுற்றுவட்டார பகுதிகளில் 10,000+ மாணவர்களுக்கு பயிற்சி அளித்துள்ளார். பயமுள்ள மாணவர்களுக்கு நம்பிக்கையூட்டும் விதத்தில் கற்பிப்பதில் நிபுணர். RTO விதிகள், சாலை பாதுகாப்பு மற்றும் பாதுகாப்பு ஓட்டுதலில் ஆழ்ந்த அறிவு பெற்றவர். அவரது தனிப்பயனாக்கப்பட்ட கற்பித்தல் முறையானது ஒவ்வொரு மாணவரும் தன்னம்பிக்கையுடன் பாதுகாப்பாக ஓட்ட உறுதி செய்கிறது.'
      : 'Murugan founded Murugan Driving Institute in 2008. With over 20 years of experience, he has trained 10,000+ students in Salem and surrounding areas. Expert in teaching nervous learners with patience and building their confidence. Deep knowledge of RTO rules, road safety, and defensive driving. His personalized teaching approach ensures every student learns to drive safely and confidently.',
    image: photo13,
    qualifications: [
      language === 'ta' ? 'RTO சான்றிதழ் பயிற்சியாளர்' : 'RTO Certified Trainer',
      language === 'ta' ? 'பாதுகாப்பு ஓட்டுநர் சான்றிதழ்' : 'Defensive Driving Certified',
      language === 'ta' ? '10,000+ மாணவர்களுக்கு பயிற்சி' : 'Trained 10,000+ Students',
      language === 'ta' ? '95% தேர்வு வெற்றி விகிதம்' : '95% Test Success Rate',
    ],
  };

  // Instructors Team
  const instructors = [
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
    { value: '10+', label: language === 'ta' ? 'ஆண்டுகள் அனுபவம்' : 'Years Experience' },
    { value: '500+', label: language === 'ta' ? 'மாணவர்கள்' : 'Students Trained' },
    { value: '95%', label: language === 'ta' ? 'தேர்வு வெற்றி' : 'Pass Rate' },
    { value: '2', label: language === 'ta' ? 'நிபுணர் பயிற்சியாளர்கள்' : 'Expert Trainers' },
  ];

  // Training Vehicles
  const vehicles = [
    {
      type: language === 'ta' ? 'இலகு வாகனம் (கார்)' : 'Light Vehicle (Car)',
      icon: CarIcon,
      models: language === 'ta' 
        ? 'மாருதி சுவிஃப்ட், ஹூண்டாய் i20, டாடா டியாகோ'
        : 'Maruti Swift, Hyundai i20, Tata Tiago',
      features: [
        language === 'ta' ? 'இரட்டை கட்டுப்பாடு அமைப்பு' : 'Dual Control System',
        language === 'ta' ? 'ABS & ஏர்பேக்குகள்' : 'ABS & Airbags',
        language === 'ta' ? 'AC வசதி' : 'Air Conditioning',
        language === 'ta' ? 'பவர் ஸ்டீயரிங்' : 'Power Steering',
        language === 'ta' ? 'நன்கு பராமரிக்கப்பட்டது' : 'Well Maintained',
      ],
      description: language === 'ta'
        ? 'ஆரம்பநிலையாளர்களுக்கு சிறந்த நவீன கார்கள். பாதுகாப்பு அம்சங்களுடன் வசதியான கற்றல் அனுபவத்திற்கு.'
        : 'Modern cars perfect for beginners. Comfortable learning experience with safety features.',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop',
    },
    {
      type: language === 'ta' ? 'கனரக வாகனம் (லாரி/டிரக்)' : 'Heavy Vehicle (Truck/Lorry)',
      icon: TruckIcon,
      models: language === 'ta'
        ? 'டாடா 407, மஹிந்திரா போல்ரோ பிக்-அப், ஆஷோக் லேலண்ட்'
        : 'Tata 407, Mahindra Bolero Pickup, Ashok Leyland',
      features: [
        language === 'ta' ? 'அனுபவமிக்க பயிற்சியாளர்' : 'Experienced Instructor',
        language === 'ta' ? 'நெடுஞ்சாலை பயிற்சி' : 'Highway Training',
        language === 'ta' ? 'சரக்கு ஏற்றுதல்/இறக்குதல் பயிற்சி' : 'Loading/Unloading Training',
        language === 'ta' ? 'வணிக உரிம உதவி' : 'Commercial License Support',
        language === 'ta' ? 'சான்றிதழ் உதவி' : 'Certificate Assistance',
      ],
      description: language === 'ta'
        ? 'வணிக வாகன ஓட்டுநர்களுக்கான முழுமையான பயிற்சி. நெடுஞ்சாலை மற்றும் சரக்கு கையாளுதலில் நிபுணத்துவம்.'
        : 'Complete training for commercial vehicle drivers. Expertise in highway and cargo handling.',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop',
    },
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
                <div className="w-8 h-8 bg-white/50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CarIcon className="w-full h-full" />
                </div>
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

      {/* Owner/Founder Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {language === 'ta' ? 'நிறுவனர்' : 'Our Founder'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ta' 
                ? 'முருகன் டிரைவிங் நிறுவனத்தின் நிறுவனர் மற்றும் தலைமை பயிற்சியாளர்'
                : 'Founder and Chief Instructor of Murugan Driving Institute'}
            </p>
          </div>
          
          {/* Owner Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-3xl overflow-hidden card-elevated border-2 border-primary/20">
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-1/3 relative overflow-hidden">
                  <div className="aspect-[3/4] md:aspect-auto md:h-full">
                    <img 
                      src={owner.image} 
                      alt={owner.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                {/* Details */}
                <div className="flex-1 p-6 md:p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{owner.name}</h3>
                    <p className="text-primary font-semibold text-lg">{owner.role}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
                      {owner.experience}
                    </span>
                    <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium">
                      {owner.languages}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {owner.bio}
                  </p>
                  
                  <div className="border-t border-border/50 pt-4">
                    <p className="text-sm text-muted-foreground mb-3 font-semibold">
                      {language === 'ta' ? 'சிறப்புகள் & சான்றிதழ்கள்:' : 'Specializations & Certifications:'}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {owner.qualifications.map((qual, qIndex) => (
                        <div key={qIndex} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                          <span className="text-sm text-foreground">{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Instructors Team Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {language === 'ta' ? 'எங்கள் பயிற்சியாளர்கள் குழு' : 'Our Instructors Team'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ta' 
                ? 'அனுபவம் வாய்ந்த, நட்பான மற்றும் பொறுமையான பயிற்சியாளர்கள்'
                : 'Experienced, friendly and patient professional instructors'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-card rounded-2xl overflow-hidden card-elevated border border-border/50 hover:border-primary/30 transition-all">
                <div className="flex flex-col">
                  {/* Image */}
                  <div className="h-48 w-full flex-shrink-0">
                    <img 
                      src={instructor.image} 
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Details */}
                  <div className="p-5">
                    <div className="mb-3">
                      <h3 className="text-lg font-bold text-foreground">{instructor.name}</h3>
                      <p className="text-primary font-medium text-sm">{instructor.role}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-medium">
                        {instructor.experience}
                      </span>
                      <span className="bg-secondary/10 text-secondary px-2.5 py-1 rounded-full text-xs font-medium">
                        {instructor.languages}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {instructor.bio}
                    </p>
                    
                    <div className="border-t border-border/50 pt-3">
                      <p className="text-xs text-muted-foreground mb-2 font-semibold">
                        {language === 'ta' ? 'சிறப்புகள்:' : 'Specializations:'}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
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

      {/* Training Vehicles Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {language === 'ta' ? 'எங்கள் பயிற்சி வாகனங்கள்' : 'Our Training Vehicles'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'ta' 
                ? 'நவீன, நன்கு பராமரிக்கப்பட்ட வாகனங்கள் பாதுகாப்பான கற்றலுக்காக'
                : 'Modern, well-maintained vehicles for safe and comfortable learning'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {vehicles.map((vehicle, index) => {
              const IconComponent = vehicle.icon;
              return (
                <div key={index} className="bg-card rounded-3xl overflow-hidden card-elevated border border-border/50 hover:border-primary/20 transition-all">
                  {/* Vehicle Image */}
                  <div className="h-56 relative overflow-hidden">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.type}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5">
                          <IconComponent />
                        </div>
                        <span className="font-semibold text-foreground text-sm">{vehicle.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Vehicle Details */}
                  <div className="p-6">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Settings className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">
                          {language === 'ta' ? 'மாடல்கள்:' : 'Models:'}
                        </span>
                      </div>
                      <p className="text-foreground font-medium">{vehicle.models}</p>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {vehicle.description}
                    </p>

                    <div className="border-t border-border/50 pt-4">
                      <p className="text-sm font-semibold text-foreground mb-3">
                        {language === 'ta' ? 'முக்கிய அம்சங்கள்:' : 'Key Features:'}
                      </p>
                      <div className="space-y-2">
                        {vehicle.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 md:p-8 border border-primary/10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {language === 'ta' ? 'பாதுகாப்பு & பராமரிப்பு' : 'Safety & Maintenance'}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {language === 'ta'
                      ? 'அனைத்து வாகனங்களும் தொழில்முறை தரநிலைகளுக்கு ஏற்ப தொடர்ந்து பராமரிக்கப்படுகின்றன. ஒவ்வொரு பயிற்சி அமர்விற்கு முன்னரும் முழுமையான பாதுகாப்பு சோதனை மேற்கொள்ளப்படுகிறது. காப்பீடு மற்றும் RTO அங்கீகாரம் புதுப்பிக்கப்பட்டுள்ளது.'
                      : 'All vehicles are regularly maintained to professional standards. Complete safety checks before every training session. Insurance and RTO approval up to date.'}
                  </p>
                </div>
              </div>
            </div>
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
                  <PhoneIcon className="w-full h-full" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{language === 'ta' ? 'தொலைபேசி' : 'Phone'}</p>
                  <p className="font-semibold text-foreground">+91 98650 68850</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <MailIcon className="w-full h-full" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{language === 'ta' ? 'மின்னஞ்சல்' : 'Email'}</p>
                  <p className="font-semibold text-foreground">info@example.com</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <LocationIcon className="w-full h-full" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{language === 'ta' ? 'முகவரி' : 'Address'}</p>
                  <p className="font-semibold text-foreground">{language === 'ta' ? 'சேலம், தமிழ்நாடு' : 'Salem, Tamil Nadu'}</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <ClockIcon className="w-full h-full" />
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
