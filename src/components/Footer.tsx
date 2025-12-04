import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-700/50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-neutral-400 text-sm font-light">
            © 2024 Eighty-Ate Events. All rights reserved.
          </div>

          <div className="flex items-center space-x-8">
            <Link href="/gallery" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm font-light">
              Gallery
            </Link>
            <Link href="/contact" className="text-neutral-400 hover:text-amber-400 transition-colors text-sm font-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
