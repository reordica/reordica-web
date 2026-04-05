import { ReactNode } from "react";

interface AudienceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function AudienceCard({ icon, title, description }: AudienceCardProps) {
  return (
    <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
      <div className="text-blue-400 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}