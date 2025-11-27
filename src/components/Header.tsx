import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 right-0 p-6 z-50 font-sans">
            <nav className="flex gap-6 text-sm font-medium text-gray-600">
                <Link href="#" className="hover:text-gray-900 transition-colors">
                    Tinker
                </Link>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                    Blog
                </Link>
                <Link href="#" className="hover:text-gray-900 transition-colors">
                    Join us
                </Link>
            </nav>
        </header>
    );
}
