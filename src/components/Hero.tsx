import Waitlist from "./Waitlist";

export default function Hero() {
    return (
        <section className="pt-32 pb-16 text-center font-sans px-4 overflow-hidden">
            <h1 className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-3xl sm:text-4xl md:text-6xl font-cinzel tracking-wider text-[#2C3E50] uppercase leading-tight mb-8 animate-fade-in">
                <span className="opacity-90">know</span>
                <span className="text-3xl sm:text-4xl md:text-6xl font-bold">I</span>
                <span className="opacity-90">edge</span>
            </h1>

            <Waitlist />
        </section>
    );
}
