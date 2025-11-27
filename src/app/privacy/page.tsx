import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentSection from "@/components/ContentSection";

export default function Privacy() {
    return (
        <div className="min-h-screen flex flex-col font-serif">
            <Header />

            <main className="flex-grow px-6 pt-32">
                <section className="text-center mb-16 animate-fade-in">
                    <h1 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mb-4">Privacy Notice</h1>
                    <p className="text-gray-500">Last updated: 2025</p>
                </section>

                <ContentSection title="1. Introduction" delay="0.2s">
                    <p>
                        At Iknowledge, we respect your privacy. This Privacy Notice explains how we collect, use, and protect your information when you interact with our ecosystem and the Agents within it.
                    </p>
                </ContentSection>

                <ContentSection title="2. Information We Collect" delay="0.4s">
                    <p>
                        We collect information that you provide directly to us, such as when you create an account or interact with an Agent. This may include your input prompts, usage data, and feedback. We also collect technical information about your device and connection to optimize our services.
                    </p>
                </ContentSection>

                <ContentSection title="3. How We Use Your Information" delay="0.6s">
                    <p>
                        We use the collected information to operate, maintain, and improve the Iknowledge ecosystem. Specifically, we use interaction data to better match users with the most suitable Agents and to help developers refine their Agents' performance.
                    </p>
                </ContentSection>

                <ContentSection title="4. Data Sharing" delay="0.8s">
                    <p>
                        We do not sell your personal information. We may share data with Agents within the ecosystem solely for the purpose of fulfilling your requests. Aggregated and anonymized data may be used for research and analysis to improve the overall ecosystem.
                    </p>
                </ContentSection>

                <ContentSection title="5. Security" delay="1.0s">
                    <p>
                        We implement reasonable security measures to protect your information from unauthorized access, alteration, or destruction. However, please be aware that no method of transmission over the internet is completely secure.
                    </p>
                </ContentSection>
            </main>

            <Footer />
        </div>
    );
}
