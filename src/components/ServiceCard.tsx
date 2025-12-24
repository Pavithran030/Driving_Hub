import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link = '/services' }: ServiceCardProps) => {
  return (
    <Link
      to={link}
      className="group block bg-card rounded-2xl p-6 md:p-8 card-elevated border border-border/50"
    >
      <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </Link>
  );
};

export default ServiceCard;
