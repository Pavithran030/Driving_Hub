export interface TrafficSign {
  name: string;
  nameTa: string;
  icon?: string;
  image?: string;
  description: string;
  descriptionTa: string;
  color?: string;
}

export interface TrafficSignCategory {
  category: string;
  categoryTa: string;
  description: string;
  descriptionTa: string;
  signs: TrafficSign[];
}

export const trafficSignsData: TrafficSignCategory[] = [
  {
    category: "Mandatory / Regulatory Signs",
    categoryTa: "கட்டாய / ஒழுங்குமுறை அறிகுறிகள்",
    description: "Circular signs with red border (prohibitive) or blue (positive instruction). Legally binding.",
    descriptionTa: "சிவப்பு விளிம்பு (தடை) அல்லது நீலம் (நேர்மறை அறிவுறுத்தல்) கொண்ட வட்ட அறிகுறிகள். சட்டரீதியாக கட்டுப்படுத்தும்.",
    signs: [
      {
        name: "Stop",
        nameTa: "நிறுத்து",
        image: "/traffic-signs/mandatory/stop.png",
        description: "Octagonal red sign - requires a complete halt at intersection",
        descriptionTa: "எண்கோண சிவப்பு அறிகுறி - குறுக்குவெட்டில் முழுமையாக நிறுத்த வேண்டும்",
        color: "red"
      },
      {
        name: "Give Way",
        nameTa: "வழி விடுங்கள்",
        image: "/traffic-signs/mandatory/giveway.png",
        description: "Inverted triangle - give priority to other traffic",
        descriptionTa: "தலைகீழ் முக்கோணம் - மற்ற போக்குவரத்துக்கு முன்னுரிமை கொடுங்கள்",
        color: "white"
      },
      {
        name: "No Entry",
        nameTa: "நுழைவு தடை",
        image: "/traffic-signs/mandatory/noentry.png",
        description: "Entry for all vehicles is prohibited",
        descriptionTa: "அனைத்து வாகனங்களுக்கும் நுழைவு தடைசெய்யப்பட்டுள்ளது",
        color: "red"
      },
      {
        name: "Priority for Oncoming Traffic",
        nameTa: "வரும் போக்குவரத்துக்கு முன்னுரிமை",
        image: "/traffic-signs/mandatory/novehicleinbothdirection.png",
        description: "Give way to vehicles coming from opposite direction",
        descriptionTa: "எதிர் திசையில் வரும் வாகனங்களுக்கு முன்னுரிமை அளிக்கவும்",
        color: "red"
      },
      {
        name: "All Motor Vehicles Prohibited",
        nameTa: "அனைத்து மோட்டார் வாகனங்களும் தடை",
        image: "/traffic-signs/mandatory/allheavyvehicle.png",
        description: "All motor vehicles are prohibited from entering",
        descriptionTa: "அனைத்து மோட்டார் வாகனங்களும் நுழைவது தடைசெய்யப்பட்டுள்ளது",
        color: "red"
      },
      {
        name: "Trucks Prohibited",
        nameTa: "லாரிகள் தடை",
        image: "/traffic-signs/mandatory/noheavyvehicle.png",
        description: "Heavy goods vehicles and trucks not allowed",
        descriptionTa: "கனரக சரக்கு வாகனங்கள் மற்றும் லாரிகள் அனுமதிக்கப்படவில்லை",
        color: "red"
      },
      {
        name: "No Right Turn",
        nameTa: "வலது திருப்பம் தடை",
        image: "/traffic-signs/mandatory/norightturn.png",
        description: "Right turn is not allowed at this junction",
        descriptionTa: "இந்த சந்திப்பில் வலது திருப்பம் அனுமதிக்கப்படவில்லை",
        color: "red"
      },
      {
        name: "No Left Turn",
        nameTa: "இடது திருப்பம் தடை",
        image: "/traffic-signs/mandatory/noleftturn.png",
        description: "Left turn is not allowed at this junction",
        descriptionTa: "இந்த சந்திப்பில் இடது திருப்பம் அனுமதிக்கப்படவில்லை",
        color: "red"
      },
      {
        name: "No U-turn",
        nameTa: "U-திருப்பம் தடை",
        image: "/traffic-signs/mandatory/nouturn.png",
        description: "Making a U-turn is prohibited",
        descriptionTa: "U-திருப்பம் செய்வது தடைசெய்யப்பட்டுள்ளது",
        color: "red"
      },
      {
        name: "Overtaking Prohibited",
        nameTa: "முந்திச் செல்வது தடை",
        image: "/traffic-signs/mandatory/noovertake.png",
        description: "Overtaking or passing ahead is prohibited",
        descriptionTa: "முந்திச் செல்வது தடைசெய்யப்பட்டுள்ளது",
        color: "red"
      },
      {
        name: "Horn Prohibited",
        nameTa: "ஹார்ன் தடை",
        image: "/traffic-signs/mandatory/nohorn.png",
        description: "Sounding horn is prohibited (silence zone)",
        descriptionTa: "ஹார்ன் அடிப்பது தடைசெய்யப்பட்டுள்ளது (அமைதி மண்டலம்)",
        color: "red"
      },
      {
        name: "No Bicycles",
        nameTa: "சைக்கிள் தடை",
        image: "/traffic-signs/mandatory/nobicycle.png",
        description: "Bicycles are not allowed on this road",
        descriptionTa: "இந்த சாலையில் சைக்கிள்கள் அனுமதிக்கப்படவில்லை",
        color: "red"
      },
      {
        name: "No Pedestrians",
        nameTa: "பாதசாரிகள் தடை",
        image: "/traffic-signs/mandatory/nopedestrain.png",
        description: "Pedestrians are not allowed on this road",
        descriptionTa: "இந்த சாலையில் பாதசாரிகள் அனுமதிக்கப்படவில்லை",
        color: "red"
      },
      {
        name: "Width Limit (2m)",
        nameTa: "அகல வரம்பு",
        image: "/traffic-signs/mandatory/heightlimit2.png",
        description: "Maximum vehicle width limit is 2 meters",
        descriptionTa: "அதிகபட்ச வாகன அகலம் 2 மீட்டர்",
        color: "red"
      },
      {
        name: "Height Limit (3.5m)",
        nameTa: "உயர வரம்பு",
        image: "/traffic-signs/mandatory/heightlimit.png",
        description: "Maximum vehicle height limit is 3.5 meters",
        descriptionTa: "அதிகபட்ச வாகன உயரம் 3.5 மீட்டர்",
        color: "red"
      },
      {
        name: "Length Limit",
        nameTa: "நீள வரம்பு",
        image: "/traffic-signs/mandatory/lengthlimit.png",
        description: "Maximum vehicle length restriction",
        descriptionTa: "அதிகபட்ச வாகன நீள கட்டுப்பாடு",
        color: "red"
      },
      {
        name: "Load Limit (5t)",
        nameTa: "சுமை வரம்பு",
        image: "/traffic-signs/mandatory/loadlimit.png",
        description: "Maximum load weight limit is 5 tons",
        descriptionTa: "அதிகபட்ச சுமை எடை வரம்பு 5 டன்",
        color: "red"
      },
      {
        name: "Speed Limit 50",
        nameTa: "வேக வரம்பு 50",
        image: "/traffic-signs/mandatory/speedlimit50.png",
        description: "Maximum speed limit is 50 km/h",
        descriptionTa: "அதிகபட்ச வேக வரம்பு 50 கி.மீ/மணி",
        color: "red"
      },
      {
        name: "Speed Limit 30",
        nameTa: "வேக வரம்பு 30",
        image: "/traffic-signs/mandatory/speedlimit30.png",
        description: "Maximum speed limit is 30 km/h",
        descriptionTa: "அதிகபட்ச வேக வரம்பு 30 கி.மீ/மணி",
        color: "red"
      },
      {
        name: "No Parking",
        nameTa: "வாகன நிறுத்தம் தடை",
        image: "/traffic-signs/mandatory/noparking.png",
        description: "Parking is strictly prohibited",
        descriptionTa: "வாகன நிறுத்தம் முற்றிலும் தடைசெய்யப்பட்டுள்ளது",
        color: "red"
      },
      {
        name: "No Stopping or Standing",
        nameTa: "நிறுத்தல் அல்லது நிறுத்தம் தடை",
        image: "/traffic-signs/mandatory/nostopping.png",
        description: "Stopping or standing vehicles is prohibited",
        descriptionTa: "வாகனங்களை நிறுத்துவது அல்லது நிற்பது தடைசெய்யப்பட்டுள்ளது",
        color: "red"
      },
      {
        name: "Compulsory Ahead",
        nameTa: "முன்னால் செல்ல வேண்டும்",
        image: "/traffic-signs/mandatory/compulsoryahead.png",
        description: "Must proceed ahead - compulsory direction",
        descriptionTa: "முன்னால் செல்ல வேண்டும் - கட்டாய திசை",
        color: "blue"
      },
      {
        name: "Compulsory Turn Left (If Symbol is Reversed)",
        nameTa: "இடது திரும்ப வேண்டும் (சின்னம் தலைகீழாக இருந்தால்)",
        image: "/traffic-signs/mandatory/compulsoryahead.png",
        description: "Must turn left if symbol is reversed",
        descriptionTa: "சின்னம் தலைகீழாக இருந்தால் இடதுபுறம் திரும்ப வேண்டும்",
        color: "blue"
      },
      {
        name: "Compulsory Turn Right Ahead",
        nameTa: "வலது திரும்ப வேண்டும்",
        image: "/traffic-signs/mandatory/compulsoryturnrightahead.png",
        description: "Must turn right ahead - compulsory direction",
        descriptionTa: "வலதுபுறம் திரும்ப வேண்டும் - கட்டாய திசை",
        color: "blue"
      },
      {
        name: "Compulsory Ahead or Turn Right",
        nameTa: "முன்னால் அல்லது வலது திரும்ப வேண்டும்",
        image: "/traffic-signs/mandatory/compulsoryaheadorturnright.png",
        description: "Must proceed ahead or turn right",
        descriptionTa: "முன்னால் செல்ல வேண்டும் அல்லது வலதுபுறம் திரும்ப வேண்டும்",
        color: "blue"
      },
      {
        name: "Compulsory Keep Left",
        nameTa: "இடது பக்கம் செல்ல வேண்டும்",
        image: "/traffic-signs/mandatory/compulsorykeepleft.png",
        description: "Must keep to the left side of road",
        descriptionTa: "சாலையின் இடது பக்கத்தில் செல்ல வேண்டும்",
        color: "blue"
      },
      {
        name: "Compulsory Sound Horn",
        nameTa: "ஹார்ன் அடிப்பது கட்டாயம்",
        image: "/traffic-signs/mandatory/compulsorysounhorn.png",
        description: "Sounding horn is compulsory at this location",
        descriptionTa: "இந்த இடத்தில் ஹார்ன் அடிப்பது கட்டாயம்",
        color: "blue"
      },
      {
        name: "Restriction Ends",
        nameTa: "கட்டுப்பாடு முடிவு",
        image: "/traffic-signs/mandatory/restrictedroadend.png",
        description: "End of speed limit or other restriction zone",
        descriptionTa: "வேக வரம்பு அல்லது பிற கட்டுப்பாடு மண்டலத்தின் முடிவு",
        color: "white"
      }
    ]
  },
  {
    category: "Cautionary / Warning Signs",
    categoryTa: "எச்சரிக்கை / முன்னெச்சரிக்கை அறிகுறிகள்",
    description: "Triangular signs with red border. Alert drivers to potential hazards or changes ahead.",
    descriptionTa: "சிவப்பு விளிம்பு கொண்ட முக்கோண அறிகுறிகள். சாத்தியமான ஆபத்துகள் அல்லது மாற்றங்களை எச்சரிக்கின்றன.",
    signs: [
      {
        name: "Right Hand Curve",
        nameTa: "வலது கை வளைவு",
        image: "/traffic-signs/cautionary/right_hand_curve.png",
        description: "Gradual curve to the right",
        descriptionTa: "வலது பக்கம் படிப்படியான வளைவு",
        color: "yellow"
      },
      {
        name: "Left Hand Curve",
        nameTa: "இடது கை வளைவு",
        image: "/traffic-signs/cautionary/left_hand_curve.png",
        description: "Gradual curve to the left",
        descriptionTa: "இடது பக்கம் படிப்படியான வளைவு",
        color: "yellow"
      },
      {
        name: "Right Hair Pin Bend",
        nameTa: "வலது ஹேர்பின் வளைவு",
        image: "/traffic-signs/cautionary/right_hair_pint_bend.png",
        description: "Very sharp right U-shaped turn ahead",
        descriptionTa: "முன்னால் மிகவும் கூர்மையான வலது U-வடிவ திருப்பம்",
        color: "yellow"
      },
      {
        name: "Left Hair Pin Bend",
        nameTa: "இடது ஹேர்பின் வளைவு",
        image: "/traffic-signs/cautionary/lefthandpinbend.png",
        description: "Very sharp left U-shaped turn ahead",
        descriptionTa: "முன்னால் மிகவும் கூர்மையான இடது U-வடிவ திருப்பம்",
        color: "yellow"
      },
      {
        name: "Right Reverse Bend",
        nameTa: "வலது வளைவு",
        image: "/traffic-signs/cautionary/rightreversebend.png",
        description: "Series of bends, first to the right",
        descriptionTa: "முதலில் வலதுபுறம் வளைவுகளின் தொடர்",
        color: "yellow"
      },
      {
        name: "Left Reverse Bend",
        nameTa: "இடது வளைவு",
        image: "/traffic-signs/cautionary/leftreversebend.png",
        description: "Series of bends, first to the left",
        descriptionTa: "முதலில் இடதுபுறம் வளைவுகளின் தொடர்",
        color: "yellow"
      },
      {
        name: "Steep Ascent",
        nameTa: "செங்குத்தான ஏற்றம்",
        image: "/traffic-signs/cautionary/steepascent.png",
        description: "Steep uphill gradient ahead",
        descriptionTa: "முன்னால் செங்குத்தான மேல்நோக்கி சாய்வு",
        color: "yellow"
      },
      {
        name: "Steep Descent",
        nameTa: "செங்குத்தான இறக்கம்",
        image: "/traffic-signs/cautionary/steepdescent.png",
        description: "Steep downhill gradient ahead",
        descriptionTa: "முன்னால் செங்குத்தான கீழ்நோக்கி சாய்வு",
        color: "yellow"
      },
      {
        name: "Narrow Road Ahead",
        nameTa: "முன்னால் குறுகிய சாலை",
        image: "/traffic-signs/cautionary/narrowroadahead.png",
        description: "Road becomes more constricted ahead",
        descriptionTa: "முன்னால் சாலை மேலும் குறுகுகிறது",
        color: "yellow"
      },
      {
        name: "Road Widens Ahead",
        nameTa: "முன்னால் சாலை அகலம்",
        image: "/traffic-signs/cautionary/roadwidensahead.png",
        description: "Road expands ahead",
        descriptionTa: "முன்னால் சாலை விரிகிறது",
        color: "yellow"
      },
      {
        name: "Narrow Bridge",
        nameTa: "குறுகிய பாலம்",
        image: "/traffic-signs/cautionary/narrowbridge.png",
        description: "Bridge ahead is narrower than road",
        descriptionTa: "முன்னால் உள்ள பாலம் சாலையை விட குறுகியது",
        color: "yellow"
      },
      {
        name: "Slippery Road",
        nameTa: "வழுக்கும் சாலை",
        image: "/traffic-signs/cautionary/slippingroad.png",
        description: "Reduced traction - drive carefully",
        descriptionTa: "குறைந்த இழுவை - கவனமாக ஓட்டவும்",
        color: "yellow"
      },
      {
        name: "Loose Gravel",
        nameTa: "வழுக்கும் பாறைகள்",
        image: "/traffic-signs/cautionary/losegravel.png",
        description: "Loose stones on road surface",
        descriptionTa: "சாலை மேற்பரப்பில் தளர்வான கற்கள்",
        color: "yellow"
      },
      {
        name: "Cycle Crossing",
        nameTa: "சைக்கிள் கடக்கும் இடம்",
        image: "/traffic-signs/cautionary/cyclecrossing.png",
        description: "Watch for cyclists crossing the road",
        descriptionTa: "சாலையை கடக்கும் சைக்கிள் ஓட்டுபவர்களை கவனிக்கவும்",
        color: "yellow"
      },
      {
        name: "Pedestrian Crossing",
        nameTa: "பாதசாரி கடக்கும் இடம்",
        image: "/traffic-signs/cautionary/pedestraincrossing.png",
        description: "Watch for people crossing the road",
        descriptionTa: "சாலையை கடக்கும் மக்களை கவனிக்கவும்",
        color: "yellow"
      },
      {
        name: "School Ahead",
        nameTa: "பள்ளி பகுதி",
        image: "/traffic-signs/cautionary/schoolahead.png",
        description: "School area - drive carefully, watch for children",
        descriptionTa: "பள்ளி பகுதி - கவனமாக ஓட்டவும், குழந்தைகளை கவனிக்கவும்",
        color: "yellow"
      },
      {
        name: "Traffic Signal Ahead",
        nameTa: "முன்னால் போக்குவரத்து சிக்னல்",
        image: "/traffic-signs/cautionary/trafficsignalahead.png",
        description: "Traffic lights ahead - prepare to stop",
        descriptionTa: "முன்னால் போக்குவரத்து விளக்குகள் - நிறுத்த தயாராகவும்",
        color: "yellow"
      },
      {
        name: "Cattle",
        nameTa: "கால்நடைகள்",
        image: "/traffic-signs/cautionary/wildanimals.png",
        description: "Cattle may cross the road",
        descriptionTa: "கால்நடைகள் சாலையை கடக்கலாம்",
        color: "yellow"
      },
      // {
      //   name: "Ferry",
      //   nameTa: "படகு",
      //   image: "/traffic-signs/cautionary/gapinmedian.png",
      //   description: "Ferry or water transport crossing ahead",
      //   descriptionTa: "முன்னால் படகு அல்லது நீர் போக்குவரத்து கடவை",
      //   color: "yellow"
      // },
      {
        name: "Falling Rocks",
        nameTa: "விழும் பாறைகள்",
        image: "/traffic-signs/cautionary/fallingrocks.png",
        description: "Risk of rocks falling from hillside",
        descriptionTa: "மலைப்பகுதியில் இருந்து பாறைகள் விழும் ஆபத்து",
        color: "yellow"
      },
      {
        name: "Dangerous Dip",
        nameTa: "ஆபத்தான இறக்கம்",
        image: "/traffic-signs/cautionary/dangerousdip.png",
        description: "Sudden depression in road surface",
        descriptionTa: "சாலை மேற்பரப்பில் திடீர் தாழ்வு",
        color: "yellow"
      },
      {
        name: "Hump or Rough Road",
        nameTa: "வேக தடை அல்லது சீரற்ற சாலை",
        image: "/traffic-signs/cautionary/humporroughroad.png",
        description: "Speed breaker, hump or uneven road surface ahead",
        descriptionTa: "முன்னால் வேக தடுப்பு, உயர்வு அல்லது சீரற்ற சாலை",
        color: "yellow"
      },
      {
        name: "Barrier Ahead",
        nameTa: "முன்னால் தடுப்பு",
        image: "/traffic-signs/cautionary/barrierahead.png",
        description: "Physical barrier or gate ahead",
        descriptionTa: "முன்னால் உடல் தடுப்பு அல்லது வாயில்",
        color: "yellow"
      },
      {
        name: "Gap in Median",
        nameTa: "நடு பகுதியில் இடைவெளி",
        image: "/traffic-signs/cautionary/gapinmedian.png",
        description: "Opening in road divider ahead",
        descriptionTa: "முன்னால் சாலை பிரிப்பில் திறப்பு",
        color: "yellow"
      },
      {
        name: "Cross Road",
        nameTa: "குறுக்கு சாலை",
        image: "/traffic-signs/cautionary/crossroad.png",
        description: "Intersection where roads cross",
        descriptionTa: "சாலைகள் குறுக்கிடும் சந்திப்பு",
        color: "yellow"
      },
      {
        name: "Side Road Left",
        nameTa: "இடது பக்க சாலை",
        image: "/traffic-signs/cautionary/sideroadleft.png",
        description: "Road merges from left side",
        descriptionTa: "இடது பக்கத்திலிருந்து சாலை இணைகிறது",
        color: "yellow"
      },
      {
        name: "Side Road Right",
        nameTa: "வலது பக்க சாலை",
        image: "/traffic-signs/cautionary/sideroadright.png",
        description: "Road merges from right side",
        descriptionTa: "வலது பக்கத்திலிருந்து சாலை இணைகிறது",
        color: "yellow"
      },
      {
        name: "T - Intersection",
        nameTa: "T - சந்திப்பு",
        image: "/traffic-signs/cautionary/T-intersection.png",
        description: "T-shaped road junction ahead",
        descriptionTa: "முன்னால் T-வடிவ சாலை சந்திப்பு",
        color: "yellow"
      },
      {
        name: "Y - Intersection",
        nameTa: "Y - சந்திப்பு",
        image: "/traffic-signs/cautionary/Y-intersection.png",
        description: "Y-shaped road junction ahead",
        descriptionTa: "முன்னால் Y-வடிவ சாலை சந்திப்பு",
        color: "yellow"
      },
      {
        name: "Staggered Intersection",
        nameTa: "படிநிலை சந்திப்பு",
        image: "/traffic-signs/cautionary/staggeredintersection.png",
        description: "Side roads that do not align directly",
        descriptionTa: "நேரடியாக சீரமைக்கப்படாத பக்க சாலைகள்",
        color: "yellow"
      },
      {
        name: "Round About",
        nameTa: "ரவுண்ட் அபௌட்",
        image: "/traffic-signs/cautionary/roundabout.png",
        description: "Circular intersection ahead",
        descriptionTa: "முன்னால் வட்ட சந்திப்பு",
        color: "yellow"
      },
      {
        name: "Quayside or River Bank",
        nameTa: "நதி கரை",
        image: "/traffic-signs/cautionary/quaysideorriverbank.png",
        description: "Water body or steep drop ahead",
        descriptionTa: "முன்னால் நீர்நிலை அல்லது செங்குத்தான வீழ்ச்சி",
        color: "yellow"
      },
      {
        name: "Men at Work",
        nameTa: "பணியாளர்கள் வேலை செய்கின்றனர்",
        image: "/traffic-signs/cautionary/menatwork.png",
        description: "Workers on or near the road",
        descriptionTa: "சாலையில் அல்லது அருகில் தொழிலாளர்கள்",
        color: "yellow"
      },
      {
        name: "Guarded Level Crossing",
        nameTa: "காவலுடன் கூடிய இரயில் கடவை",
        image: "/traffic-signs/cautionary/levelcrossingwithbarrierahead.png",
        description: "Manned railway crossing with gates ahead",
        descriptionTa: "முன்னால் வாயில்களுடன் கூடிய காவல் இரயில் கடவை",
        color: "yellow"
      },
      {
        name: "Unguarded Level Crossing",
        nameTa: "காவலற்ற இரயில் கடவை",
        image: "/traffic-signs/cautionary/gapinmedian.png",
        description: "Unmanned railway crossing - extreme caution",
        descriptionTa: "ஆளில்லா இரயில் கடவை - அதிக எச்சரிக்கை",
        color: "yellow"
      }
    ]
  },
  {
    category: "Informatory Signs",
    categoryTa: "தகவல் அறிகுறிகள்",
    description: "Rectangular blue signs providing useful information about location or facilities.",
    descriptionTa: "இருப்பிடம் அல்லது வசதிகள் பற்றிய பயனுள்ள தகவலை வழங்கும் செவ்வக நீல அறிகுறிகள்.",
    signs: [
      {
        name: "Hospital",
        nameTa: "மருத்துவமனை",
        image: "/traffic-signs/informatory/hospital.png",
        description: "Medical facility location",
        descriptionTa: "மருத்துவ வசதி இருப்பிடம்",
        color: "blue"
      },
      {
        name: "First Aid Post",
        nameTa: "முதலுதவி நிலையம்",
        image: "/traffic-signs/informatory/firstaidpost.png",
        description: "First aid or medical assistance",
        descriptionTa: "முதலுதவி அல்லது மருத்துவ உதவி",
        color: "blue"
      },
      {
        name: "Eating Place",
        nameTa: "உணவகம்",
        image: "/traffic-signs/informatory/eatingfood.png",
        description: "Restaurant or food facility",
        descriptionTa: "உணவகம் அல்லது உணவு வசதி",
        color: "blue"
      },
      {
        name: "Light Refreshment",
        nameTa: "லேசான சிற்றுண்டி",
        image: "/traffic-signs/informatory/lightrefreshment.png",
        description: "Light snacks or refreshments available",
        descriptionTa: "லேசான சிற்றுண்டி அல்லது புத்துணர்வு கிடைக்கிறது",
        color: "blue"
      },
      {
        name: "Resting Place",
        nameTa: "ஓய்வு இடம்",
        image: "/traffic-signs/informatory/restingplace.png",
        description: "Rest area or lodging available",
        descriptionTa: "ஓய்வு பகுதி அல்லது தங்குமிடம் கிடைக்கிறது",
        color: "blue"
      },
      {
        name: "Public Telephone",
        nameTa: "பொது தொலைபேசி",
        image: "/traffic-signs/informatory/publictelephone.png",
        description: "Public telephone facility",
        descriptionTa: "பொது தொலைபேசி வசதி",
        color: "blue"
      },
      {
        name: "Bus Stop",
        nameTa: "பேருந்து நிறுத்தம்",
        image: "/traffic-signs/informatory/busstop.png",
        description: "Public bus stop location",
        descriptionTa: "பொது பேருந்து நிறுத்தம் இடம்",
        color: "blue"
      },
      {
        name: "Petrol Pump",
        nameTa: "எரிபொருள் நிலையம்",
        image: "/traffic-signs/informatory/petrolpump.png",
        description: "Fuel station - petrol/diesel available",
        descriptionTa: "எரிபொருள் நிலையம் - பெட்ரோல்/டீசல் கிடைக்கிறது",
        color: "blue"
      }
    ]
  }
];
