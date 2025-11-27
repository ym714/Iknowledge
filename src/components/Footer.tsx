import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-12 text-center text-xs text-gray-500">
            <div className="flex justify-center gap-2">
                <span>Iknowledge © 2025</span>
                <span>·</span>
                <Link href="/terms" className="hover:text-gray-700">Terms of service</Link>
                <span>·</span>
                <Link href="/privacy" className="hover:text-gray-700">Privacy notice</Link>
            </div>
        </footer>
    );
}
