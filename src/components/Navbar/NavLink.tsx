import { Link } from "react-router-dom";
import { type ReactNode } from "react";

export default function NavLink({ children, to, onClick }: { children: ReactNode; to: string; onClick?: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-gray-700 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-500 transition text-lg md:text-sm font-semibold md:font-medium"
    >
      {children}
    </Link>
  );
}
