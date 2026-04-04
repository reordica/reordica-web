interface AudienceCardProps {
  icon: string;
  title: string;
  description: string;
}

export function AudienceCard({ icon, title, description }: AudienceCardProps) {
  return (
    <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-slate-300">{description}</p>
    </div>
  );
}