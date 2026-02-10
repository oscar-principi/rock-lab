interface FeatureProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const Feature = ({ title, desc, icon }: FeatureProps) => (
  <div className="group p-8 rounded-3xl border border-gray-200 bg-white/50 backdrop-blur-sm hover:shadow-2xl hover:border-red-600/20 transition-all duration-500 dark:bg-zinc-900/40 dark:border-zinc-800">
    <div className="flex items-center gap-4 mb-4">
      <div className="p-2.5 bg-red-600 text-white rounded-xl shadow-lg shadow-red-600/30 group-hover:rotate-6 transition-transform shrink-0">
        {icon}
      </div>
      <h3 className="font-bold text-2xl dark:text-zinc-100">{title}</h3>
    </div>
    <p className="text-gray-600 dark:text-zinc-400 text-md leading-relaxed">{desc}</p>
  </div>
);
