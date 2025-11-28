import Waitlist from "./Waitlist";

export default function Hero() {
    return (
        <section className="pt-32 pb-16 text-center font-sans">
            <h1 className="text-5xl md:text-6xl font-serif tracking-widest text-gray-900 uppercase leading-tight mb-8 animate-fade-in">
                <span className="block">Iknowledge</span>
            </h1>

            <Waitlist />
        </section>
    );
}
