interface PainPointProps {
  icon: string;
  text: string;
}

export function PainPoint({ icon, text }: PainPointProps) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800 border border-slate-700">
      <span className="text-2xl">{icon}</span>
      <span className="text-slate-300">{text}</span>
    </div>
  );
}