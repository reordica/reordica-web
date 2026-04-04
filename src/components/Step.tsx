import { ReactNode } from 'react';

interface StepProps {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
  gradient: string;
}

export function Step({ number, title, description, icon, gradient }: StepProps) {
  return (
    <div className="relative">
      <div className="text-center">
        <div className={`mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-6`}>
          {icon}
        </div>
        <div className="text-sm font-bold text-slate-400 mb-2">{number}</div>
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}