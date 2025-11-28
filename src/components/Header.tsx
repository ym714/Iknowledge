import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 w-full p-6 z-50 font-sans backdrop-blur-sm flex justify-between items-center">
            <Link href="/" className="text-lg font-serif font-bold text-gray-900 hover:text-gray-700 transition-colors">
                <span>know I edge © 2025</span>           </Link>

        </header>
    );
}
