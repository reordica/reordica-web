interface StatCardProps {
  label: string;
  value: string;
  trend: string;
}

export function StatCard({ label, value, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      <p className="text-sm text-slate-600 font-medium">{label}</p>
      <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
      <p className="text-sm text-green-600 mt-1">{trend}</p>
    </div>
  );
}