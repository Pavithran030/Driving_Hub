import { LucideIcon } from 'lucide-react';

interface WhyChooseCardProps {
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const WhyChooseCard = ({ icon: Icon, title, description }: WhyChooseCardProps) => {
  return (
    <div className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-white border-2 border-purple-200 flex items-center justify-center shrink-0 p-2 shadow-sm">
        <Icon className="w-full h-full text-purple-600" />
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseCard;
