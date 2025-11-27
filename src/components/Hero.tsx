export default function Hero() {
    return (
        <section className="pt-32 pb-16 text-center font-sans">
            <h1 className="text-5xl md:text-6xl font-sans tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-600 to-gray-400 uppercase leading-tight mb-8 animate-fade-in">
                <span className="block">Iknowledge</span>
            </h1>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600 mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <span className="px-1.5 py-0.5 rounded bg-gray-200 text-[10px] font-bold text-gray-500 uppercase tracking-wider transition-transform hover:scale-105 cursor-default">New</span>
                <span>Introducing Iknowledge</span>
            </div>
        </section>
    );
}
