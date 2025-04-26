import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 h-[110px] w-full bg-transparent z-50">
      <nav className="h-full flex items-center justify-end px-8 mr-[70px]">
        <div className="flex items-center [&>*:not(:last-child)]:mr-[70px]">
          <Link href="/" className="!text-white text-[40px] hover:!text-gray-300 transition-colors no-underline">Home</Link>
          <Link href="/portfolio" className="!text-white text-[40px] hover:!text-gray-300 transition-colors no-underline">Portfolio</Link>
          <Link href="/Contacto" className="!text-white text-[40px] hover:!text-gray-300 transition-colors no-underline">Contacto</Link>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="!text-white hover:!text-gray-300 transition-colors no-underline"
          >
            <Instagram size={40} />
          </a>
        </div>
      </nav>
    </header>
  );
}
