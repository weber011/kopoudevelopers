import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#171717] text-white flex flex-col items-center justify-center p-6 text-center">
      <span className="text-[#C8A45D] text-xs uppercase tracking-widest font-semibold mb-2">
        Error 404
      </span>
      <h1 className="text-4xl sm:text-6xl font-serif font-bold mb-4">
        Page Not Found
      </h1>
      <p className="text-[#E9E3D8]/70 text-sm max-w-md mb-8">
        The page you are looking for does not exist or has been moved. Discover our residential projects in Tezpur, Assam.
      </p>
      <Link
        href="/"
        className="btn-gold inline-flex items-center gap-2 text-sm font-semibold py-3 px-6"
      >
        <Home size={16} /> Return to Kopou Developers
      </Link>
    </div>
  );
}
