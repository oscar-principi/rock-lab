    import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface HeroButtonProps {
  to: string;
  children: React.ReactNode;
}

export const HeroButton = ({ to, children }: HeroButtonProps) => (
  <Link
    to={to}
    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500 transition-all shadow-xl shadow-red-600/20"
  >
    {children}
    <ArrowRight size={16} />
  </Link>
);
