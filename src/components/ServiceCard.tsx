import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function ServiceCard({ title, description, Icon }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-slate-900">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}