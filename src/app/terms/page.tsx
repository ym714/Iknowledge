import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContentSection from "@/components/ContentSection";
import Link from "next/link";

export default function Terms() {
    return (
        <div className="min-h-screen flex flex-col font-serif">
            <Header />

            <main className="flex-grow px-6 pt-32">
                <section className="text-center mb-16 animate-fade-in">
                    <h1 className="text-3xl md:text-4xl font-sans font-bold text-gray-900 mb-4">Terms of Service</h1>
                    <p className="text-gray-500">Last updated: November 28, 2025</p>
                </section>

                <ContentSection delay="0.2s">
                    <p>
                        These Terms of Service ("Terms") constitute a binding agreement between you and Iknowledge ("we," "us," or "Company") regarding your access to and use of the iknowledge.ai website and any related services, tools, or features (collectively, the "Services").
                    </p>
                    <p>
                        By accessing or using our Services, you confirm that you have read, understood, and agreed to be bound by these Terms. If you do not agree to these Terms, you must not use our Services.
                    </p>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm mt-4">
                        <strong>IMPORTANT NOTICE: ARBITRATION AND CLASS ACTION WAIVER.</strong> PLEASE NOTE THAT SECTION 7 CONTAINS A MANDATORY ARBITRATION CLAUSE AND CLASS ACTION WAIVER. THIS AFFECTS HOW DISPUTES BETWEEN YOU AND I KNOWLEDGE ARE RESOLVED. BY ACCEPTING THESE TERMS, YOU AGREE TO RESOLVE DISPUTES THROUGH BINDING INDIVIDUAL ARBITRATION RATHER THAN IN COURT, AND YOU WAIVE YOUR RIGHT TO PARTICIPATE IN CLASS ACTIONS.
                    </div>
                </ContentSection>

                <ContentSection title="1. Eligibility" delay="0.3s">
                    <p>
                        To use our Services, you must be at least 18 years old and capable of forming a binding contract. By using the Services, you represent and warrant that you meet this age requirement and that your use of the Services will not violate any applicable law or regulation.
                    </p>
                </ContentSection>

                <ContentSection title="2. Privacy Policy" delay="0.4s">
                    <p>
                        Your privacy is important to us. Our <Link href="/privacy" className="underline hover:text-gray-600">Privacy Notice</Link> explains how we collect, use, and protect your personal information. It is incorporated into these Terms by reference.
                    </p>
                </ContentSection>

                <ContentSection title="3. License and Restrictions" delay="0.5s">
                    <h3 className="font-bold text-gray-900 mb-2">Limited License</h3>
                    <p>
                        Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Services for your personal, non-commercial use.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Prohibited Conduct</h3>
                    <p>
                        You agree not to engage in any of the following prohibited activities:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>Copying or Distributing:</strong> You may not reproduce, distribute, modify, or create derivative works of any part of the Services without our express written permission.</li>
                        <li><strong>Scraping or Automation:</strong> You may not use bots, scrapers, crawlers, or other automated means to access or collect data from the Services.</li>
                        <li><strong>Security Violations:</strong> You may not attempt to compromise the security of the Services, including introducing viruses, bypassing authentication measures, or interfering with the proper working of the Services.</li>
                        <li><strong>Illegal Use:</strong> You may not use the Services for any unlawful purpose or to solicit the performance of any illegal activity.</li>
                        <li><strong>Harmful Content:</strong> You may not transmit any content that is abusive, harassing, defamatory, obscene, or otherwise objectionable.</li>
                    </ul>
                </ContentSection>

                <ContentSection title="4. Intellectual Property" delay="0.6s">
                    <p>
                        All content, features, and functionality of the Services, including but not limited to text, graphics, logos, and software, are the exclusive property of Iknowledge or its licensors and are protected by copyright, trademark, and other intellectual property laws.
                    </p>
                    <p className="mt-4">
                        <strong>Feedback:</strong> We value your input. If you provide us with any ideas, suggestions, or feedback ("Feedback"), you agree that we may use such Feedback for any purpose without obligation or compensation to you.
                    </p>
                </ContentSection>

                <ContentSection title="5. Third-Party Links" delay="0.7s">
                    <p>
                        The Services may contain links to third-party websites or services that are not owned or controlled by Iknowledge. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites. You access them at your own risk.
                    </p>
                </ContentSection>

                <ContentSection title="6. Disclaimers and Limitation of Liability" delay="0.8s">
                    <h3 className="font-bold text-gray-900 mb-2">Disclaimer of Warranties</h3>
                    <p className="uppercase text-xs">
                        THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, IKNOWLEDGE DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Limitation of Liability</h3>
                    <p className="uppercase text-xs">
                        IN NO EVENT SHALL IKNOWLEDGE, ITS AFFILIATES, OR THEIR RESPECTIVE DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES. OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING OUT OF THESE TERMS SHALL NOT EXCEED THE AMOUNT YOU PAID TO US, IF ANY, IN THE PAST SIX MONTHS, OR $100, WHICHEVER IS GREATER.
                    </p>
                </ContentSection>

                <ContentSection title="7. Dispute Resolution" delay="0.9s">
                    <p>
                        <strong>Arbitration Agreement:</strong> You and Iknowledge agree that any dispute, claim, or controversy arising out of or relating to these Terms or the Services shall be settled by binding arbitration administered by JAMS in accordance with its Comprehensive Arbitration Rules and Procedures. The arbitration will take place on an individual basis; class arbitrations and class actions are not permitted.
                    </p>
                    <p className="mt-4">
                        <strong>Opt-Out:</strong> You may opt out of this arbitration agreement by notifying us in writing at terms@iknowledge.ai within 30 days of your first use of the Services.
                    </p>
                    <p className="mt-4">
                        <strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                    </p>
                </ContentSection>

                <ContentSection title="8. Modifications and Termination" delay="1.0s">
                    <p>
                        We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by updating the date at the top of these Terms or through other appropriate means. Your continued use of the Services after such changes constitutes your acceptance of the new Terms.
                    </p>
                    <p className="mt-4">
                        We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                </ContentSection>

                <ContentSection title="9. Contact Us" delay="1.1s">
                    <p>
                        If you have any questions about these Terms, please contact us at <a href="mailto:terms@iknowledge.ai" className="underline hover:text-gray-600">terms@iknowledge.ai</a>.
                    </p>
                </ContentSection>
            </main>

            <Footer />
        </div>
    );
}
