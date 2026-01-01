import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Brand
    'brand.name': 'Murugan Driving',
    'brand.institute': 'Institute',
    'brand.full': 'Murugan Driving Institute',

    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Courses & Services',
    'nav.stories': 'Gallery',
    'nav.contact': 'Contact',
    'nav.alumni': 'Alumni',
    'nav.trafficRules': 'Traffic Rules',
    'nav.callNow': 'Call Now',
    'nav.whatsapp': 'WhatsApp',

    // Hero
    'hero.title': 'Murugan Driving Institute – Trusted Driving Classes in Omalur',
    'hero.subtitle': 'We train complete beginners with confidence, help you clear RTO tests, and handle licence and RC renewal paperwork for you.',
    'hero.callWhatsapp': 'Call / WhatsApp Now',
    'hero.bookDemo': 'Book a Demo Class',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Complete driving education and RTO documentation support',
    'services.driving.title': 'Light Vehicle Training (Car)',
    'services.driving.desc': 'Learn to drive with confidence. Complete training for absolute beginners.',
    'services.heavyvehicle.title': 'Heavy Vehicle Training (Truck/Lorry)',
    'services.heavyvehicle.desc': 'Professional commercial vehicle training for truck and lorry drivers.',
    'services.licence.title': 'All Vehicle Licence Services',
    'services.licence.desc': 'Learner, permanent, renewal, and all licence-related support.',
    'services.rc.title': 'RC Renewal & Paperwork',
    'services.rc.desc': 'Vehicle RC renewal, address change, and documentation assistance.',

    // Why Choose Us
    'why.title': 'Why Choose Us',
    'why.subtitle': 'Trusted by thousands of students in Salem',
    'why.experience': '15+ Years of Experience',
    'why.experience.desc': 'Decades of expertise in driving education and RTO services.',
    'why.passRate': '95% Pass Rate',
    'why.passRate.desc': 'Our students consistently clear RTO tests on their first attempt.',
    'why.safety': 'Dual-Control Cars',
    'why.safety.desc': 'Safe training with dual-control vehicles and experienced instructors.',
    'why.flexible': 'Flexible Timings',
    'why.flexible.desc': 'Morning, evening, and weekend classes available.',
    'why.friendly': 'Friendly Trainers',
    'why.friendly.desc': 'Patient instructors, especially for nervous learners and women.',

    // Testimonials
    'testimonials.title': 'What Our Students Say',
    'testimonials.subtitle': 'Real experiences from our satisfied learners',
    'testimonials.viewAll': 'View Gallery',

    // CTA
    'cta.title': 'Ready to Start Your Driving Journey?',
    'cta.subtitle': 'Contact us today for a free consultation',
    'cta.call': 'Call Us',
    'cta.whatsapp': 'WhatsApp Us',
    'cta.enquiry': 'Send Enquiry',

    // Footer
    'footer.address': 'Address',
    'footer.phone': 'Phone',
    'footer.email': 'Email',
    'footer.servingAreas': 'Serving Omalur and nearby areas',
    'footer.rights': 'All rights reserved',

    // About Page
    'about.title': 'About Our Institute',
    'about.story.title': 'Our Story',
    'about.story.content': 'Established in 2008, Murugan Driving Institute has been a trusted name in driving education for over 15 years. We started with a simple mission: to create confident, safe drivers who contribute to road safety in our community.',
    'about.mission.title': 'Our Mission',
    'about.mission.content': 'To provide comprehensive driving education that builds confidence, emphasizes safety, and prepares every student for a lifetime of responsible driving.',
    'about.instructors.title': 'Our Instructors',
    'about.vehicles.title': 'Our Training Vehicles',
    'about.vehicles.content': 'We use modern, well-maintained vehicles equipped with dual controls, ABS, and airbags for maximum safety during training.',

    // Services Page
    'courses.title': 'Driving Courses',
    'courses.beginner.title': 'Beginner Car Driving Course',
    'courses.beginner.for': 'For absolute beginners with no prior driving experience',
    'courses.beginner.duration': '15 days • 1 hour daily',
    'courses.refresher.title': 'Refresher Course',
    'courses.refresher.for': 'For licence holders who need to regain confidence',
    'courses.refresher.duration': '7 days • 1 hour daily',
    'courses.heavyvehicle.title': 'Heavy Vehicle Training Course',
    'courses.heavyvehicle.for': 'For those learning commercial truck/lorry driving',
    'courses.heavyvehicle.duration': '21 days • 1.5 hours daily',
    'courses.learn': 'What You Will Learn',
    'courses.enquire': 'Enquire Now',

    'licence.title': 'Licence Services',
    'licence.learner.title': 'Learner Licence Application',
    'licence.permanent.title': 'Permanent Licence',
    'licence.renewal.title': 'Licence Renewal',
    'licence.address.title': 'Address Change',
    'licence.duplicate.title': 'Duplicate Licence',
    'licence.docs': 'Documents Required',
    'licence.process': 'Process',

    'rc.title': 'Vehicle RC Services',
    'rc.renewal.title': 'RC Renewal',
    'rc.address.title': 'RC Address Change',
    'rc.hypothecation.title': 'Hypothecation Removal',
    'rc.duplicate.title': 'Duplicate RC',
    'rc.puc.title': 'PUC & Insurance Guidance',

    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help you',
    'contact.form.name': 'Your Name',
    'contact.form.phone': 'Phone Number',
    'contact.form.email': 'Email (Optional)',
    'contact.form.service': 'Service Type',
    'contact.form.time': 'Preferred Time to Contact',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Enquiry',
    'contact.form.success': 'Thank you! We will contact you soon.',
    'contact.location': 'Our Location',

    // Gallery
    'stories.title': 'Gallery',
    'stories.subtitle': 'Photos and achievements of our students',
    'stories.gallery': 'Photo Gallery',
    'stories.testimonials': 'Student Testimonials',
    'stories.share': 'Share Your Story',

    // Alumni
    'alumni.title': 'Our Alumni Network',
    'alumni.subtitle': 'Join thousands of successful drivers trained at our institute',
    'alumni.stats.total': 'Total Graduates',
    'alumni.stats.thisYear': 'This Year',
    'alumni.join': 'Join Our Alumni Network',

    // Common
    'common.learnMore': 'Learn More',
    'common.viewDetails': 'View Details',
    'common.getStarted': 'Get Started',
  },
  ta: {
    // Brand
    'brand.name': 'முருகன் டிரைவிங்',
    'brand.institute': 'இன்ஸ்டிடியூட்',
    'brand.full': 'முருகன் டிரைவிங் இன்ஸ்டிடியூட்',

    // Navigation
    'nav.home': 'முகப்பு',
    'nav.about': 'எங்களைப் பற்றி',
    'nav.services': 'படிப்புகள் & சேவைகள்',
    'nav.stories': 'கேலரி',
    'nav.contact': 'தொடர்புகொள்ள',
    'nav.alumni': 'முன்னாள் மாணவர்கள்',
    'nav.trafficRules': 'போக்குவரத்து விதிகள்',
    'nav.callNow': 'அழைக்கவும்',
    'nav.whatsapp': 'வாட்ஸ்அப்',

    // Hero
    'hero.title': 'முருகன் டிரைவிங் இன்ஸ்டிடியூட் – ஓமலூரில் நம்பகமான வாகன ஓட்டுனர் பயிற்சி வகுப்புகள்',
    'hero.subtitle': 'புதியவர்களுக்கு தன்னம்பிக்கையுடன் வாகனம் ஓட்ட கற்றுக்கொடுக்கிறோம், RTO தேர்வில் வெற்றி பெற உதவுகிறோம், உரிமம் மற்றும் RC புதுப்பித்தல் ஆவணங்களை கையாளுகிறோம்.',
    'hero.callWhatsapp': 'அழைக்க / வாட்ஸ்அப் செய்ய',
    'hero.bookDemo': 'டெமோ வகுப்பு பதிவு செய்ய',

    // Services
    'services.title': 'எங்கள் சேவைகள்',
    'services.subtitle': 'முழுமையான வாகன பயிற்சி மற்றும் RTO ஆவண உதவி',
    'services.driving.title': 'இலகு வாகன பயிற்சி (கார்)',
    'services.driving.desc': 'தன்னம்பிக்கையுடன் வாகனம் ஓட்ட கற்றுக்கொள்ளுங்கள்.',
    'services.heavyvehicle.title': 'கனரக வாகன பயிற்சி (லாரி/டிரக்)',
    'services.heavyvehicle.desc': 'லாரி மற்றும் டிரக் ஓட்டுநர்களுக்கான நிபுண வணிக வாகன பயிற்சி.',
    'services.licence.title': 'அனைத்து வாகன உரிம சேவைகள்',
    'services.licence.desc': 'அனைத்து வகை வாகனங்களுக்கும் (இரு சக்கரம், கார், கனரக வாகனம்) உரிம உதவி.',
    'services.rc.title': 'RC புதுப்பித்தல் & ஆவணங்கள்',
    'services.rc.desc': 'வாகன RC புதுப்பித்தல் மற்றும் முகவரி மாற்றம்.',

    // Why Choose Us
    'why.title': 'எங்களை ஏன் தேர்வு செய்ய வேண்டும்',
    'why.subtitle': 'சேலத்தில் ஆயிரக்கணக்கான மாணவர்களால் நம்பப்படுகிறது',
    'why.experience': '15+ ஆண்டுகள் அனுபவம்',
    'why.experience.desc': 'வாகன பயிற்சி மற்றும் RTO சேவைகளில் பல ஆண்டுகள் நிபுணத்துவம்.',
    'why.passRate': '95% தேர்ச்சி விகிதம்',
    'why.passRate.desc': 'எங்கள் மாணவர்கள் முதல் முயற்சியிலேயே RTO தேர்வில் வெற்றி பெறுகின்றனர்.',
    'why.safety': 'இரட்டை கட்டுப்பாட்டு கார்கள்',
    'why.safety.desc': 'அனுபவமிக்க பயிற்சியாளர்களுடன் பாதுகாப்பான பயிற்சி.',
    'why.flexible': 'நெகிழ்வான நேரங்கள்',
    'why.flexible.desc': 'காலை, மாலை மற்றும் வார இறுதி வகுப்புகள் உள்ளன.',
    'why.pickup': 'பிக்-அப் & டிராப்',
    'why.pickup.desc': 'உங்கள் வீட்டிலிருந்து வசதியான பிக்-அப் சேவை.',
    'why.friendly': 'நட்பான பயிற்சியாளர்கள்',
    'why.friendly.desc': 'பொறுமையான ஆசிரியர்கள், குறிப்பாக பெண்கள் மற்றும் பயமுள்ளவர்களுக்கு.',

    // Testimonials
    'testimonials.title': 'மாணவர்கள் என்ன சொல்கிறார்கள்',
    'testimonials.subtitle': 'திருப்தியான மாணவர்களின் உண்மையான அனுபவங்கள்',
    'testimonials.viewAll': 'கேலரியைப் பார்க்க',

    // CTA
    'cta.title': 'உங்கள் வாகன பயணத்தை தொடங்க தயாரா?',
    'cta.subtitle': 'இலவச ஆலோசனைக்கு இன்றே தொடர்பு கொள்ளுங்கள்',
    'cta.call': 'அழைக்கவும்',
    'cta.whatsapp': 'வாட்ஸ்அப்',
    'cta.enquiry': 'விசாரணை அனுப்பு',

    // Footer
    'footer.address': 'முகவரி',
    'footer.phone': 'தொலைபேசி',
    'footer.email': 'மின்னஞ்சல்',
    'footer.servingAreas': 'ஓமலூர் மற்றும் அருகிலுள்ள பகுதிகளுக்கு சேவை',
    'footer.rights': 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை',

    // About Page
    'about.title': 'எங்கள் இன்ஸ்டிடியூட்டைப் பற்றி',
    'about.story.title': 'எங்கள் கதை',
    'about.story.content': '2008 இல் நிறுவப்பட்ட முருகன் டிரைவிங் இன்ஸ்டிடியூட் 15 ஆண்டுகளுக்கும் மேலாக வாகன பயிற்சியில் நம்பகமான பெயர். சாலை பாதுகாப்பிற்கு பங்களிக்கும் தன்னம்பிக்கையான, பாதுகாப்பான ஓட்டுநர்களை உருவாக்குவதே எங்கள் எளிய இலக்கு.',
    'about.mission.title': 'எங்கள் நோக்கம்',
    'about.mission.content': 'தன்னம்பிக்கையை வளர்க்கும், பாதுகாப்பை வலியுறுத்தும், ஒவ்வொரு மாணவரையும் பொறுப்பான வாகன ஓட்டத்திற்கு தயார்படுத்தும் முழுமையான வாகன பயிற்சியை வழங்குவது.',
    'about.instructors.title': 'எங்கள் பயிற்சியாளர்கள்',
    'about.vehicles.title': 'எங்கள் பயிற்சி வாகனங்கள்',
    'about.vehicles.content': 'பயிற்சியின் போது அதிகபட்ச பாதுகாப்பிற்காக இரட்டை கட்டுப்பாடுகள், ABS மற்றும் ஏர்பேக்குகள் கொண்ட நவீன, நன்கு பராமரிக்கப்பட்ட வாகனங்களை பயன்படுத்துகிறோம்.',

    // Services Page
    'courses.title': 'வாகன பயிற்சி படிப்புகள்',
    'courses.beginner.title': 'ஆரம்ப கார் பயிற்சி படிப்பு',
    'courses.beginner.for': 'முன் வாகன ஓட்ட அனுபவம் இல்லாத ஆரம்பநிலையாளர்களுக்கு',
    'courses.beginner.duration': '15 நாட்கள் • தினமும் 1 மணி நேரம்',
    'courses.refresher.title': 'ரிஃப்ரஷர் படிப்பு',
    'courses.refresher.for': 'தன்னம்பிக்கையை மீட்க வேண்டிய உரிம வைத்திருப்பவர்களுக்கு',
    'courses.refresher.duration': '7 நாட்கள் • தினமும் 1 மணி நேரம்',
    'courses.heavyvehicle.title': 'கனரக வாகன பயிற்சி படிப்பு',
    'courses.heavyvehicle.for': 'வணிக லாரி/டிரக் ஓட்டுதல் கற்கும் விரும்புபவர்களுக்கு',
    'courses.heavyvehicle.duration': '21 நாட்கள் • தினமும் 1.5 மணி நேரம்',
    'courses.learn': 'நீங்கள் கற்றுக்கொள்வது',
    'courses.enquire': 'இப்போது விசாரிக்கவும்',

    'licence.title': 'உரிம சேவைகள்',
    'licence.learner.title': 'கற்றல் உரிம விண்ணப்பம்',
    'licence.permanent.title': 'நிரந்தர உரிமம்',
    'licence.renewal.title': 'உரிம புதுப்பித்தல்',
    'licence.address.title': 'முகவரி மாற்றம்',
    'licence.duplicate.title': 'நகல் உரிமம்',
    'licence.docs': 'தேவையான ஆவணங்கள்',
    'licence.process': 'செயல்முறை',

    'rc.title': 'வாகன RC சேவைகள்',
    'rc.renewal.title': 'RC புதுப்பித்தல்',
    'rc.address.title': 'RC முகவரி மாற்றம்',
    'rc.hypothecation.title': 'கடன் அடமானம் நீக்கம்',
    'rc.duplicate.title': 'நகல் RC',
    'rc.puc.title': 'PUC & காப்பீட்டு வழிகாட்டுதல்',

    // Contact Page
    'contact.title': 'எங்களை தொடர்பு கொள்ளுங்கள்',
    'contact.subtitle': 'உங்களுக்கு உதவ நாங்கள் இங்கே இருக்கிறோம்',
    'contact.form.name': 'உங்கள் பெயர்',
    'contact.form.phone': 'தொலைபேசி எண்',
    'contact.form.email': 'மின்னஞ்சல் (விருப்பமானது)',
    'contact.form.service': 'சேவை வகை',
    'contact.form.time': 'தொடர்பு கொள்ள விரும்பும் நேரம்',
    'contact.form.message': 'செய்தி',
    'contact.form.submit': 'விசாரணை அனுப்பு',
    'contact.form.success': 'நன்றி! நாங்கள் விரைவில் உங்களை தொடர்பு கொள்வோம்.',
    'contact.location': 'எங்கள் இருப்பிடம்',

    // Gallery
    'stories.title': 'கேலரி',
    'stories.subtitle': 'எங்கள் மாணவர்களின் புகைப்படங்கள் மற்றும் சாதனைகள்',
    'stories.gallery': 'புகைப்பட தொகுப்பு',
    'stories.testimonials': 'மாணவர் சான்றுகள்',
    'stories.share': 'உங்கள் கதையை பகிரவும்',

    // Alumni
    'alumni.title': 'எங்கள் முன்னாள் மாணவர் வலையமைப்பு',
    'alumni.subtitle': 'எங்கள் இன்ஸ்டிடியூட்டில் பயிற்சி பெற்ற ஆயிரக்கணக்கான வெற்றிகரமான ஓட்டுநர்களுடன் சேருங்கள்',
    'alumni.stats.total': 'மொத்த பட்டதாரிகள்',
    'alumni.stats.thisYear': 'இந்த ஆண்டு',
    'alumni.join': 'எங்கள் முன்னாள் மாணவர் வலையமைப்பில் சேரவும்',

    // Common
    'common.learnMore': 'மேலும் அறிய',
    'common.viewDetails': 'விவரங்களைப் பார்க்க',
    'common.getStarted': 'தொடங்குங்கள்',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
