import Image from "next/image";
import Waitlist from "./Waitlist";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center text-center font-sans overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/og-bg.jpg"
                    alt="Background"
                    fill
                    className="object-cover opacity-80" // Slight opacity to ensure text readability if needed, or remove if image is perfect
                    priority
                />
                {/* Optional: Add a subtle gradient overlay if text contrast is an issue */}
                {/* <div className="absolute inset-0 bg-white/30" /> */}
            </div>

            {/* Content */}
            <div className="relative z-10 px-4">
                <h1 className="text-5xl md:text-6xl font-serif tracking-widest text-gray-900 uppercase leading-tight mb-8 animate-fade-in drop-shadow-sm">
                    <span className="block">Iknowledge</span>
                </h1>

                <Waitlist />
            </div>
        </section>
    );
}
