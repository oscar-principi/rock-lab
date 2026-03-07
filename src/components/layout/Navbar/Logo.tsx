import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/" className="flex flex-col leading-none group items-center">
      <div className="text-3xl md:text-4xl font-black tracking-tighter">
        <span className="text-red-600">Rock</span>
        <span className="text-black dark:text-zinc-100">Lab</span>
      </div>
      <span className="text-[10px] md:text-s uppercase tracking-[0.2em] font-bold text-gray-500 dark:text-zinc-500 mt-1 transition-colors group-hover:text-red-600">
        desarrollo de Software
      </span>
    </Link>
  );
}
