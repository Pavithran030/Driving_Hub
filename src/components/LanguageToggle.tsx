import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-muted rounded-lg p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
          language === 'en'
            ? 'bg-card text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ta')}
        className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200 ${
          language === 'ta'
            ? 'bg-card text-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        தமிழ்
      </button>
    </div>
  );
};

export default LanguageToggle;
