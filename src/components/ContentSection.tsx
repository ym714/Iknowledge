import React from "react";

interface ContentSectionProps {
    title?: string;
    children: React.ReactNode;
    className?: string;
    delay?: string;
}

export default function ContentSection({ title, children, className = "", delay = "0s" }: ContentSectionProps) {
    return (
        <section className={`max-w-2xl mx-auto mb-16 animate-fade-in ${className}`} style={{ animationDelay: delay }}>
            {title && (
                <h2 className="text-xl font-serif font-bold text-gray-800 mb-4">
                    {title}
                </h2>
            )}
            <div className="text-sm md:text-base leading-relaxed text-gray-800 space-y-6 font-serif">
                {children}
            </div>
        </section>
    );
}
