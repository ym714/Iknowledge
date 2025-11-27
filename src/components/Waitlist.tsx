"use client";

import { useState } from "react";

export default function Waitlist() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setStatus("success");
        setEmail("");
    };

    if (status === "success") {
        return (
            <div className="animate-fade-in text-center">
                <p className="text-gray-900 font-serif text-lg mb-2">You're on the list.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-xs text-gray-400 hover:text-gray-600 underline"
                >
                    Add another
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-xs mx-auto animate-fade-in">
            <div className="flex items-center border-b border-gray-300 focus-within:border-gray-900 transition-colors">
                <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-grow py-2 bg-transparent text-center text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none font-sans"
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="ml-2 py-2 text-xs font-medium text-gray-500 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors uppercase tracking-wider"
                >
                    {status === "loading" ? "..." : "Join"}
                </button>
            </div>
        </form>
    );
}
