import Waitlist from "./Waitlist";

export default function Hero() {
    return (
        <section className="pt-32 pb-16 text-center font-sans px-4 overflow-hidden">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif tracking-wider md:tracking-widest text-gray-900 uppercase leading-tight mb-8 animate-fade-in break-words">
                <span className="block">Iknowledge</span>
            </h1>

            <Waitlist />
        </section>
    );
}
