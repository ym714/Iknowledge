import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentSection from "@/components/ContentSection";
import Link from "next/link";

export default function Privacy() {
    return (
        <div className="min-h-screen flex flex-col font-serif">
            <Header />

            <main className="flex-grow px-6 pt-32">
                <section className="text-center mb-16 animate-fade-in">
                    <h1 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mb-4">Privacy Notice</h1>
                    <p className="text-gray-500">Last updated: November 28, 2025</p>
                </section>

                <ContentSection title="1. Overview" delay="0.2s">
                    <p>
                        At Iknowledge ("we," "us," or "Company"), we value your trust and are committed to protecting your privacy. This Privacy Notice explains how we collect, use, disclose, and safeguard your information when you visit our website iknowledge.ai and use our services (collectively, the "Services").
                    </p>
                    <p className="mt-4">
                        By using our Services, you consent to the data practices described in this notice. If you have any questions, please contact us at <a href="mailto:privacy@iknowledge.ai" className="underline hover:text-gray-600">privacy@iknowledge.ai</a>.
                    </p>
                </ContentSection>

                <ContentSection title="2. Information We Collect" delay="0.3s">
                    <h3 className="font-bold text-gray-900 mb-2">Information You Provide</h3>
                    <p>
                        We collect information that you voluntarily provide to us, such as when you communicate with us via email or social media. This may include your name, email address, and the contents of your messages.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Automated Data Collection</h3>
                    <p>
                        When you access our Services, we may automatically collect certain information about your device and usage patterns. This includes:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li><strong>Device Data:</strong> IP address, browser type, operating system, and device identifiers.</li>
                        <li><strong>Usage Data:</strong> Pages visited, time spent on pages, and referring websites.</li>
                        <li><strong>Cookies:</strong> We use cookies and similar technologies to enhance your experience and analyze site traffic. You can control cookie preferences through your browser settings.</li>
                    </ul>
                </ContentSection>

                <ContentSection title="3. How We Use Your Information" delay="0.4s">
                    <p>
                        We use the information we collect for various business purposes, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>Service Delivery:</strong> To operate, maintain, and improve our Services.</li>
                        <li><strong>Communication:</strong> To respond to your inquiries and send you updates or administrative information.</li>
                        <li><strong>Security:</strong> To monitor and prevent fraud, abuse, and security threats.</li>
                        <li><strong>Compliance:</strong> To comply with legal obligations and enforce our Terms of Service.</li>
                    </ul>
                </ContentSection>

                <ContentSection title="4. Sharing and Disclosure" delay="0.5s">
                    <p>
                        We do not sell your personal information. We may share your information in the following circumstances:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf, such as hosting, analytics, and customer support.</li>
                        <li><strong>Legal Requirements:</strong> If required by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
                        <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                    </ul>
                </ContentSection>

                <ContentSection title="5. Data Security and Retention" delay="0.6s">
                    <p>
                        We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                    <p className="mt-4">
                        We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Notice, unless a longer retention period is required or permitted by law.
                    </p>
                </ContentSection>

                <ContentSection title="6. Your Rights" delay="0.7s">
                    <p>
                        Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict the processing of your data. To exercise these rights, please contact us at <a href="mailto:privacy@iknowledge.ai" className="underline hover:text-gray-600">privacy@iknowledge.ai</a>. We will respond to your request in accordance with applicable law.
                    </p>
                </ContentSection>

                <ContentSection title="7. International Transfers" delay="0.8s">
                    <p>
                        Our Services are operated in the United States. If you are located outside the U.S., please be aware that your information may be transferred to, stored, and processed in the United States, where data protection laws may differ from those in your jurisdiction.
                    </p>
                </ContentSection>

                <ContentSection title="8. Children's Privacy" delay="0.9s">
                    <p>
                        Our Services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                    </p>
                </ContentSection>

                <ContentSection title="9. Changes to This Notice" delay="1.0s">
                    <p>
                        We may update this Privacy Notice from time to time. The "Last updated" date at the top of this page indicates when the latest revisions were made. We encourage you to review this notice periodically to stay informed about how we are protecting your information.
                    </p>
                </ContentSection>

                <ContentSection title="10. Contact Us" delay="1.1s">
                    <p>
                        If you have any questions or concerns about this Privacy Notice or our data practices, please contact us at <a href="mailto:privacy@iknowledge.ai" className="underline hover:text-gray-600">privacy@iknowledge.ai</a>.
                    </p>
                </ContentSection>
            </main>

            <Footer />
        </div>
    );
}
