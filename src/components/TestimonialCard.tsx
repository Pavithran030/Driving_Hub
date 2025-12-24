import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  location: string;
  course: string;
  quote: string;
  image?: string;
}

const TestimonialCard = ({ name, location, course, quote, image }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 card-elevated border border-border/50 relative">
      <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 relative z-10">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-primary font-bold text-lg">{name.charAt(0)}</span>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{location} • {course}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
