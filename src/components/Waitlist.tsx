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
                <p className="text-gray-500 text-sm">We'll be in touch soon.</p>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-xs text-gray-400 hover:text-gray-600 underline"
                >
                    Add another email
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto animate-fade-in">
            <div className="flex flex-col sm:flex-row gap-3">
                <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-grow px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all font-sans"
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
                >
                    {status === "loading" ? "Joining..." : "Join waitlist"}
                </button>
            </div>
            <p className="mt-4 text-xs text-gray-400">
                Join the waitlist for early access.
            </p>
        </form>
    );
}
