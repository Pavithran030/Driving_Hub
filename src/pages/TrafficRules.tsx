import { useState, useRef } from 'react';
import { AlertTriangle, Shield, BookOpen, Video, Image, CheckCircle, Play, Maximize } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { trafficSignsData } from '@/data/trafficSignsData';
import rulesVideo from '@/assets/rules.mp4';
import safetyVideo from '@/assets/safety.mp4';

const TrafficRules = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('signs');

  // Old Traffic Signs Data - Kept for reference
  const oldTrafficSigns = [
    {
      category: language === 'ta' ? 'தடை அறிகுறிகள்' : 'Prohibitory Signs',
      signs: [
        { name: language === 'ta' ? 'நுழைவு தடை' : 'No Entry', icon: '⛔', description: language === 'ta' ? 'இந்த பாதையில் வாகனங்கள் நுழைய தடை' : 'Vehicles not allowed to enter' },
        { name: language === 'ta' ? 'வலது திருப்பம் தடை' : 'No Right Turn', icon: '➡️🚫', description: language === 'ta' ? 'வலது பக்கம் திரும்ப தடை' : 'Right turn not allowed' },
        { name: language === 'ta' ? 'இடது திருப்பம் தடை' : 'No Left Turn', icon: '⬅️🚫', description: language === 'ta' ? 'இடது பக்கம் திரும்ப தடை' : 'Left turn not allowed' },
        { name: language === 'ta' ? 'U-திருப்பம் தடை' : 'No U-Turn', icon: '↩️🚫', description: language === 'ta' ? 'U-திருப்பம் போட தடை' : 'U-turn not allowed' },
        { name: language === 'ta' ? 'ஓவர்டேக்கிங் தடை' : 'No Overtaking', icon: '🚗🚫', description: language === 'ta' ? 'முந்திச் செல்ல தடை' : 'Overtaking prohibited' },
        { name: language === 'ta' ? 'நிறுத்துதல் தடை' : 'No Stopping', icon: '🅿️🚫', description: language === 'ta' ? 'வாகனங்களை நிறுத்த தடை' : 'Stopping not allowed' },
        { name: language === 'ta' ? 'ஹார்ன் அடிக்க தடை' : 'No Horn', icon: '📢🚫', description: language === 'ta' ? 'ஹார்ன் அடிக்க தடை' : 'Horn not allowed' },
        { name: language === 'ta' ? 'வேக வரம்பு' : 'Speed Limit', icon: '⚠️40', description: language === 'ta' ? 'குறிப்பிட்ட வேகத்திற்கு மேல் செல்ல தடை' : 'Maximum speed limit' },
      ]
    },
    {
      category: language === 'ta' ? 'கட்டாய அறிகுறிகள்' : 'Mandatory Signs',
      signs: [
        { name: language === 'ta' ? 'வலது பக்கம் செல்' : 'Keep Right', icon: '➡️', description: language === 'ta' ? 'வலது பக்கம் செல்ல வேண்டும்' : 'Must keep to right side' },
        { name: language === 'ta' ? 'இடது பக்கம் செல்' : 'Keep Left', icon: '⬅️', description: language === 'ta' ? 'இடது பக்கம் செல்ல வேண்டும்' : 'Must keep to left side' },
        { name: language === 'ta' ? 'நேரே செல்' : 'Ahead Only', icon: '⬆️', description: language === 'ta' ? 'நேரே மட்டும் செல்ல வேண்டும்' : 'Must go straight ahead' },
        { name: language === 'ta' ? 'ரவுண்ட்அபௌட்' : 'Roundabout', icon: '🔄', description: language === 'ta' ? 'ரவுண்ட்அபௌட் சுற்றி செல்ல வேண்டும்' : 'Must go around roundabout' },
        { name: language === 'ta' ? 'சைக்கிள் பாதை' : 'Cycle Track', icon: '🚴', description: language === 'ta' ? 'சைக்கிள்கள் மட்டும் செல்ல வேண்டும்' : 'Bicycles only' },
        { name: language === 'ta' ? 'ஹெல்மெட் அணிய வேண்டும்' : 'Helmet Mandatory', icon: '🪖', description: language === 'ta' ? 'இருசக்கர வாகனங்களில் ஹெல்மெட் கட்டாயம்' : 'Helmet compulsory for two-wheelers' },
      ]
    },
    {
      category: language === 'ta' ? 'எச்சரிக்கை அறிகுறிகள்' : 'Warning Signs',
      signs: [
        { name: language === 'ta' ? 'மூட்டை வளைவு' : 'Sharp Turn', icon: '↪️', description: language === 'ta' ? 'முன்னால் மூட்டை வளைவு' : 'Sharp curve ahead' },
        { name: language === 'ta' ? 'குறுக்கு சாலை' : 'Cross Road', icon: '➕', description: language === 'ta' ? 'முன்னால் குறுக்கு சாலை' : 'Cross road ahead' },
        { name: language === 'ta' ? 'பள்ளி மண்டலம்' : 'School Zone', icon: '🏫', description: language === 'ta' ? 'பள்ளி பகுதி - கவனமாக செல்லவும்' : 'School area - drive carefully' },
        { name: language === 'ta' ? 'பாதசாரி பாதை' : 'Pedestrian Crossing', icon: '🚶', description: language === 'ta' ? 'பாதசாரிகள் கடக்கும் இடம்' : 'Pedestrian crossing ahead' },
        { name: language === 'ta' ? 'சாலை வேலை' : 'Road Work', icon: '🚧', description: language === 'ta' ? 'முன்னால் சாலை வேலை நடக்கிறது' : 'Road work in progress' },
        { name: language === 'ta' ? 'விலங்குகள்' : 'Animals', icon: '🐄', description: language === 'ta' ? 'விலங்குகள் கடக்கும் இடம்' : 'Animals may cross' },
        { name: language === 'ta' ? 'சாலை குறுகுகிறது' : 'Road Narrows', icon: '◀️▶️', description: language === 'ta' ? 'முன்னால் சாலை குறுகுகிறது' : 'Road narrows ahead' },
        { name: language === 'ta' ? 'சிக்னல் முன்னால்' : 'Traffic Light', icon: '🚦', description: language === 'ta' ? 'முன்னால் போக்குவரத்து சிக்னல்' : 'Traffic signal ahead' },
      ]
    },
  ];

  // Safety Tips
  const safetyTips = [
    {
      title: language === 'ta' ? 'பாதுகாப்பு உபகரணங்கள்' : 'Safety Equipment',
      tips: [
        language === 'ta' ? 'எப்போதும் ஹெல்மெட் அணியவும் (இருசக்கர வாகனங்கள்)' : 'Always wear helmet (two-wheelers)',
        language === 'ta' ? 'சீட் பெல்ட் கட்டவும் (கார்கள்)' : 'Always wear seat belt (cars)',
        language === 'ta' ? 'குழந்தைகளுக்கு சைல்ட் சீட் பயன்படுத்தவும்' : 'Use child seat for kids',
        language === 'ta' ? 'நல்ல தரமான ஹெல்மெட் வாங்கவும் (ISI மார்க்)' : 'Buy quality helmet (ISI mark)',
      ]
    },
    {
      title: language === 'ta' ? 'வாகன பராமரிப்பு' : 'Vehicle Maintenance',
      tips: [
        language === 'ta' ? 'டயர் காற்றழுத்தம் சரிபார்க்கவும்' : 'Check tire pressure regularly',
        language === 'ta' ? 'பிரேக் நன்றாக வேலை செய்கிறதா பார்க்கவும்' : 'Ensure brakes work properly',
        language === 'ta' ? 'எல்லா விளக்குகளும் வேலை செய்கிறதா சோதிக்கவும்' : 'Check all lights are working',
        language === 'ta' ? 'ஹார்ன் சரியாக வேலை செய்கிறதா பார்க்கவும்' : 'Ensure horn is functional',
        language === 'ta' ? 'கண்ணாடி சுத்தமாக வைக்கவும்' : 'Keep mirrors clean',
      ]
    },
    {
      title: language === 'ta' ? 'ஓட்டுநர் நடத்தை' : 'Driver Behavior',
      tips: [
        language === 'ta' ? 'மது அருந்திவிட்டு வாகனம் ஓட்ட வேண்டாம்' : 'Never drink and drive',
        language === 'ta' ? 'வேகத்தை கட்டுப்படுத்தவும்' : 'Control your speed',
        language === 'ta' ? 'ஓட்டும்போது மொபைல் பயன்படுத்த வேண்டாம்' : 'Don\'t use mobile while driving',
        language === 'ta' ? 'லேன் ஒழுக்கத்தை பின்பற்றவும்' : 'Follow lane discipline',
        language === 'ta' ? 'சிக்னல்களை கடைப்பிடிக்கவும்' : 'Obey traffic signals',
        language === 'ta' ? 'நெடுஞ்சாலையில் கவனமாக ஓட்டவும்' : 'Drive carefully on highways',
        language === 'ta' ? 'பாதசாரிகளுக்கு முன்னுரிமை கொடுக்கவும்' : 'Give priority to pedestrians',
      ]
    },
    {
      title: language === 'ta' ? 'இரவு நேர ஓட்டுதல்' : 'Night Driving',
      tips: [
        language === 'ta' ? 'ஹெட்லைட் சரியாக வேலை செய்கிறதா பார்க்கவும்' : 'Check headlights working properly',
        language === 'ta' ? 'எதிர் வாகனங்கள் வரும்போது டிம் செய்யவும்' : 'Dim lights for oncoming vehicles',
        language === 'ta' ? 'வேகத்தை குறைக்கவும்' : 'Reduce speed at night',
        language === 'ta' ? 'கூடுதல் கவனமாக இருக்கவும்' : 'Be extra cautious',
      ]
    },
    {
      title: language === 'ta' ? 'மழை காலம்' : 'Rainy Season',
      tips: [
        language === 'ta' ? 'வைபர் நன்றாக வேலை செய்கிறதா பார்க்கவும்' : 'Ensure wipers work well',
        language === 'ta' ? 'வேகத்தை குறைக்கவும்' : 'Reduce speed in rain',
        language === 'ta' ? 'நீர் நிறைந்த இடங்களில் மெதுவாக செல்லவும்' : 'Drive slow through water',
        language === 'ta' ? 'திடீரென பிரேக் போட வேண்டாம்' : 'Avoid sudden braking',
      ]
    },
  ];

  // Educational Videos (Local video files + YouTube)
  const educationalVideos = [
    {
      title: language === 'ta' ? 'இந்திய போக்குவரத்து விதிகள்' : 'Indian Traffic Rules',
      videoSrc: rulesVideo,
      type: 'local',
      description: language === 'ta' ? 'போக்குவரத்து விதிகளின் முழுமையான விளக்கம்' : 'Complete explanation of traffic rules'
    },
    {
      title: language === 'ta' ? 'பாதுகாப்பான ஓட்டுநர் பயிற்சி' : 'Safe Driving Tips',
      videoSrc: safetyVideo,
      type: 'local',
      description: language === 'ta' ? 'பாதுகாப்பாக வாகனம் ஓட்டுவது எப்படி' : 'How to drive safely'
    },
    {
      title: language === 'ta' ? 'RTO தேர்வு தயாரிப்பு' : 'RTO Test Preparation',
      url: 'https://www.youtube.com/embed/xsD8v0qhHjg',
      type: 'youtube',
      description: language === 'ta' ? 'RTO தேர்வுக்கு எப்படி தயாராவது' : 'How to prepare for RTO test'
    },
  ];

  // Function to handle fullscreen on video click
  const handleVideoClick = (videoElement: HTMLVideoElement) => {
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if ((videoElement as any).webkitRequestFullscreen) {
      (videoElement as any).webkitRequestFullscreen();
    } else if ((videoElement as any).msRequestFullscreen) {
      (videoElement as any).msRequestFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="gradient-hero section-padding">
        <div className="container-custom text-center">
          <div className="inline-block mb-4">
            <div className="w-20 h-20 mx-auto bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <AlertTriangle className="w-12 h-12 text-white animate-pulse" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {language === 'ta' ? 'போக்குவரத்து விதிகள் & பாதுகாப்பு' : 'Traffic Rules & Safety'}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            {language === 'ta' 
              ? 'இந்திய சாலை விதிகள், போக்குவரத்து சிக்னல்கள் மற்றும் பாதுகாப்பு வழிகாட்டுதல்கள்'
              : 'Indian road rules, traffic signals, and safety guidelines'}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="signs" className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                {language === 'ta' ? 'போக்குவரத்து அறிகுறிகள்' : 'Traffic Signs'}
              </TabsTrigger>
              <TabsTrigger value="safety" className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                {language === 'ta' ? 'பாதுகாப்பு குறிப்புகள்' : 'Safety Tips'}
              </TabsTrigger>
              <TabsTrigger value="videos" className="flex items-center gap-2">
                <Video className="w-4 h-4" />
                {language === 'ta' ? 'கல்வி வீடியோக்கள்' : 'Educational Videos'}
              </TabsTrigger>
            </TabsList>

            {/* Traffic Signs Tab */}
            <TabsContent value="signs" className="space-y-8">
              {/* Comprehensive Road Safety Signs - All Categories */}
              <div className="space-y-8">
                {trafficSignsData.map((category, categoryIdx) => (
                  <div key={categoryIdx} className="space-y-6">
                    <div className={`bg-gradient-to-r ${
                      categoryIdx === 0 ? 'from-red-500/10 to-blue-500/10' :
                      categoryIdx === 1 ? 'from-yellow-500/10 to-orange-500/10' :
                      'from-blue-500/10 to-green-500/10'
                    } rounded-2xl p-6 border ${
                      categoryIdx === 0 ? 'border-red-500/20' :
                      categoryIdx === 1 ? 'border-yellow-500/20' :
                      'border-blue-500/20'
                    }`}>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {language === 'ta' ? category.categoryTa : category.category}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {language === 'ta' ? category.descriptionTa : category.description}
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {category.signs.map((sign, signIdx) => (
                        <div 
                          key={signIdx}
                          className={`bg-card rounded-xl p-5 card-elevated border-2 hover:scale-105 transition-all text-center ${
                            sign.color === 'red' ? 'border-red-500/30 hover:border-red-500' :
                            sign.color === 'blue' ? 'border-blue-500/30 hover:border-blue-500' :
                            sign.color === 'yellow' ? 'border-yellow-500/30 hover:border-yellow-500' :
                            sign.color === 'green' ? 'border-green-500/30 hover:border-green-500' :
                            'border-border/50 hover:border-primary/50'
                          }`}
                        >
                          {sign.image ? (
                            <div className="w-24 h-24 mx-auto mb-3 flex items-center justify-center">
                              <img 
                                src={sign.image} 
                                alt={sign.name} 
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ) : (
                            <div className="text-5xl mb-3">{sign.icon}</div>
                          )}
                          <h4 className="font-bold text-foreground mb-2">
                            {language === 'ta' ? sign.nameTa : sign.name}
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            {language === 'ta' ? sign.descriptionTa : sign.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Traffic Signal Lights */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-6 md:p-8 border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="text-4xl">🚦</span>
                  {language === 'ta' ? 'போக்குவரத்து சிக்னல்கள்' : 'Traffic Signal Lights'}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-card rounded-xl p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      🔴
                    </div>
                    <h3 className="font-bold text-foreground mb-2">
                      {language === 'ta' ? 'சிவப்பு' : 'Red Light'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ta' ? 'நிறுத்தவும் - செல்ல கூடாது' : 'Stop - Do not proceed'}
                    </p>
                  </div>
                  <div className="bg-card rounded-xl p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      🟡
                    </div>
                    <h3 className="font-bold text-foreground mb-2">
                      {language === 'ta' ? 'மஞ்சள்' : 'Yellow Light'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ta' ? 'தயாராகவும் - வேகத்தை குறைக்கவும்' : 'Get ready - Slow down'}
                    </p>
                  </div>
                  <div className="bg-card rounded-xl p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      🟢
                    </div>
                    <h3 className="font-bold text-foreground mb-2">
                      {language === 'ta' ? 'பச்சை' : 'Green Light'}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ta' ? 'செல்லவும் - கவனமாக செல்லவும்' : 'Go - Proceed carefully'}
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Safety Tips Tab */}
            <TabsContent value="safety" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {safetyTips.map((section, idx) => (
                  <div key={idx} className="bg-card rounded-2xl p-6 card-elevated border border-border/50">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-secondary" />
                      </div>
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.tips.map((tip, tipIdx) => (
                        <li key={tipIdx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Emergency Numbers */}
              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-3xl p-6 md:p-8 border-2 border-red-500/20">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="text-4xl">🚨</span>
                  {language === 'ta' ? 'அவசர தொலைபேசி எண்கள்' : 'Emergency Numbers'}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-card rounded-xl p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <lord-icon
                        src="https://cdn.lordicon.com/qbzffdfv.json"
                        trigger="loop"
                        delay="200"
                        style={{ width: '80px', height: '80px' }}>
                      </lord-icon>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === 'ta' ? 'காவல்துறை' : 'Police'}
                    </p>
                    <p className="text-2xl font-bold text-foreground">100</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <lord-icon
                        src="https://cdn.lordicon.com/mhwzfwxu.json"
                        trigger="loop"
                        delay="200"
                        colors="primary:#545454,secondary:#e83a30,tertiary:#7166ee,quaternary:#e4e4e4"
                        style={{ width: '80px', height: '80px' }}>
                      </lord-icon>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === 'ta' ? 'ஆம்புலன்ஸ்' : 'Ambulance'}
                    </p>
                    <p className="text-2xl font-bold text-foreground">108</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 text-center">
                    <div className="flex justify-center mb-2">
                      <lord-icon
                        src="https://cdn.lordicon.com/fbiayvzm.json"
                        trigger="loop"
                        delay="200"
                        style={{ width: '80px', height: '80px' }}>
                      </lord-icon>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === 'ta' ? 'தீயணைப்பு' : 'Fire Service'}
                    </p>
                    <p className="text-2xl font-bold text-foreground">101</p>
                  </div>
                  <div className="bg-card rounded-xl p-4 text-center">
                    <div className="text-3xl mb-2">⚠️</div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {language === 'ta' ? 'விபத்து உதவி' : 'Accident Help'}
                    </p>
                    <p className="text-2xl font-bold text-foreground">1073</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos" className="space-y-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {educationalVideos.map((video, idx) => (
                  <div key={idx} className="bg-card rounded-2xl overflow-hidden card-elevated border border-border/50 group">
                    <div className="aspect-video relative bg-black">
                      {video.type === 'local' ? (
                        <>
                          <video
                            className="w-full h-full object-contain cursor-pointer"
                            controls
                            controlsList="nodownload"
                            preload="metadata"
                            onClick={(e) => handleVideoClick(e.currentTarget)}
                          >
                            <source src={video.videoSrc} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <div className="bg-primary/90 rounded-full p-4">
                              <Maximize className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </>
                      ) : (
                        <iframe
                          src={video.url}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={video.title}
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-foreground mb-2 flex items-center gap-2">
                        <Play className="w-5 h-5 text-primary" />
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{video.description}</p>
                      {video.type === 'local' && (
                        <p className="text-xs text-muted-foreground mt-2 italic">
                          {language === 'ta' ? '💡 முழு திரையில் பார்க்க வீடியோவை கிளிக் செய்யவும்' : '💡 Click video to play in fullscreen'}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Video Tips */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-6 md:p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <Video className="w-7 h-7 text-purple-500" />
                  {language === 'ta' ? 'வீடியோ குறிப்புகள்' : 'Video Tips'}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      {language === 'ta' 
                        ? 'வீடியோக்களை முழுமையாக பார்த்து அனைத்து விதிகளையும் தெரிந்து கொள்ளுங்கள்' 
                        : 'Watch videos completely to understand all traffic rules'}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      {language === 'ta' 
                        ? 'முழு திரை பார்வைக்கு வீடியோவை கிளிக் செய்யவும்' 
                        : 'Click on the video to enter fullscreen mode for better viewing'}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      {language === 'ta' 
                        ? 'வீடியோவில் உள்ள பாதுகாப்பு குறிப்புகளை பின்பற்றுங்கள்' 
                        : 'Follow the safety tips shown in the videos'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Additional Resources */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-6 md:p-8 border border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <BookOpen className="w-7 h-7 text-primary" />
                  {language === 'ta' ? 'கூடுதல் வளங்கள்' : 'Additional Resources'}
                </h3>
                <div className="space-y-3">
                  <a 
                    href="https://parivahan.gov.in/parivahan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-card rounded-xl hover:border-primary/30 border border-transparent transition-all"
                  >
                    <span className="text-2xl">🏛️</span>
                    <div>
                      <p className="font-semibold text-foreground">
                        {language === 'ta' ? 'Parivahan வலைத்தளம்' : 'Parivahan Portal'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {language === 'ta' ? 'அரசு போக்குவரத்து வலைத்தளம்' : 'Official Government Transport Portal'}
                      </p>
                    </div>
                  </a>
                  <a 
                    href="https://morth.nic.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-card rounded-xl hover:border-primary/30 border border-transparent transition-all"
                  >
                    <span className="text-2xl">📋</span>
                    <div>
                      <p className="font-semibold text-foreground">
                        {language === 'ta' ? 'சாலை போக்குவரத்து அமைச்சகம்' : 'Ministry of Road Transport'}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {language === 'ta' ? 'மத்திய அரசு வலைத்தளம்' : 'Central Government Website'}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default TrafficRules;
