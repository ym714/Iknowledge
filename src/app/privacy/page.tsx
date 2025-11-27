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
                    <p className="text-gray-500">Last updated: November 28, 2025</p>
                </section>

                <ContentSection title="1. Introduction" delay="0.2s">
                    <p>
                        Iknowledge is an artificial intelligence research and product company. Our Privacy Notice (the “Notice”) describes how we collect, use and disclose your information when you access or use our website, applications and services, or otherwise interact with us (collectively, “Services”). For the purpose of this Privacy Notice, Iknowledge is the data controller of your information. By using our Services, you agree to our collection, use, and disclosure of your information described here. If you do not understand or agree with this Privacy Notice, please do not use our Services.
                    </p>
                    <p className="mt-4">
                        If you have questions about our Privacy Notice or wish to exercise your applicable privacy rights you can contact us at <a href="mailto:privacy@iknowledge.ai" className="underline hover:text-gray-600">privacy@iknowledge.ai</a>.
                    </p>
                </ContentSection>

                <ContentSection title="2. Changes to the privacy notice" delay="0.3s">
                    <p>
                        We may update this Policy Notice from time to time. If we do, we will publish an updated version here with an effective date informing you of the update. If we make material changes to how we use or disclose information, we will use reasonable efforts to notify you in accordance with applicable law.
                    </p>
                </ContentSection>

                <ContentSection title="3. Personal information we collect and how we use it" delay="0.4s">
                    <p>
                        When you access or use our Services, we collect personal information about you from a variety of sources, as described below. In addition to the specific uses discussed below, we may use this information for our legitimate interest to provide and improve the Services, maintain our business relationship, enhance the safety and security of our Services, provide customer support, comply with applicable legal obligations, enforce any applicable terms of service, prevent fraud, illegal activity and misuse of our Services, and protect our rights and the rights of our employees, users or other third parties.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">What you provide us</h3>
                    <p>We receive the following personal information that you provide us.</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li><strong>Communications information:</strong> We collect your name, email address, and any other information you might provide when you communicate with, such as via email or social media (e.g., X), because it is in our legitimate interests to communicate with you and be responsive to you.</li>
                    </ul>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">What we receive automatically</h3>
                    <p>
                        We and third parties collect the following personal information when you use our Services. This includes information collected via cookies or related technologies, which you may configure your browser to disable but which may impact the Services, for example our ability to remember your website preferences. This information is collected and used because it is in our legitimate interests to tailor your experience with the Services, run analytics, and better understand user interaction. Where required, we will obtain your consent prior to using non-essential cookies and related technologies.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li><strong>Device information:</strong> We collect information such as your device type, unique device identifier, and internet protocol (IP) address.</li>
                        <li><strong>Location information:</strong> We may determine the general area from where your device uses our Services based on information like your IP address.</li>
                        <li><strong>Log data:</strong> We collect information that your browser sends to us automatically through your use of our Services, such as your browser type and settings and how you interact with our Services.</li>
                        <li><strong>Usage data:</strong> We collect information about your use of our Services, such as the content you access on our website, your activity on our website.</li>
                    </ul>
                    <p className="mt-4">
                        Your browser may allow you to transmit a “Do Not Track”, “opt out preference” signal or other mechanism for exercising choices relating to the collection of your information online. Like many websites, our website is not designed to respond to such signals and we do not use or disclose your personal information in a way that would legally require us to recognize opt-out preference signals like Global Privacy Control.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">What we receive from third parties</h3>
                    <p>
                        We may receive personal information from third parties, such as from service providers that help us operate our services including cloud and security. We also collect information that is publicly available on the internet.
                    </p>
                </ContentSection>

                <ContentSection title="4. How we disclose personal information" delay="0.5s">
                    <p>We may disclose personal information to the following third parties for the reasons listed below:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>Vendors or service providers:</strong> We may disclose your personal information to third parties who help us provide our Services, including for system administration, cloud storage, security, and web analytics.</li>
                        <li><strong>Affiliates:</strong> We may disclose your personal information to our affiliates and others within our corporate group, as a matter of our legitimate interests to provide our Services and operate our business.</li>
                        <li><strong>Professional advisors:</strong> We may disclose your personal information to auditors, law firms, or accounting firms to comply with our legal and regulatory obligations and in our legitimate interests to assess, protect, enforce and defend our rights and those of our employees and users.</li>
                        <li><strong>Business transactions:</strong> We may disclose your personal information to third parties in connection with or anticipation of an asset sale, merger, bankruptcy, or other business transaction, as a matter of our legitimate interests to run a successful and efficient business.</li>
                        <li><strong>Government authorities or other related third parties:</strong> We may disclose your personal information to government authorities or other related third parties in our legitimate interest to comply with legal requirements, law enforcement or regulatory inquiries, to enforce our terms of service, and to ensure the safety and security of our business, employees, and users.</li>
                    </ul>
                </ContentSection>

                <ContentSection title="5. How long we store personal information" delay="0.6s">
                    <p>
                        We keep personal information for as long as reasonably necessary for the purposes explained in this Privacy Notice. The length of time depends on several factors, including whether we need the personal information to provide our Services, to resolve any disputes, to comply with any contractual or legal obligations, to enforce our contracts, to prevent harm, to promote safety, security, and integrity, or to protect ourselves, including our rights or those of our employees. We also consider the amount and nature of the personal information, as well as the risk of harm if that personal information was lost or stolen.
                    </p>
                </ContentSection>

                <ContentSection title="6. How we protect personal information" delay="0.7s">
                    <p>
                        We make reasonable efforts to protect your personal information from loss, misuse, or unauthorized access or disclosure but we cannot guarantee “perfect security.” We encourage you to take care when disclosing information to us.
                    </p>
                </ContentSection>

                <ContentSection title="7. Your personal information rights" delay="0.8s">
                    <p>Depending on where you live, your legal rights over your data may include the right to:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Access or know what personal information we have about you and how it is processed;</li>
                        <li>Delete your personal information that we hold about you;</li>
                        <li>Update or correct inaccurate personal information that we hold about you</li>
                        <li>Transfer a copy of your personal information to a third-party;</li>
                        <li>Restrict, stop, or suspend our processing of your personal information;</li>
                        <li>Object to our processing of your personal information;</li>
                        <li>Withdraw your consent to our processing of your personal information, to the extent we rely on consent for such processing.</li>
                    </ul>
                    <p className="mt-4">
                        These rights are not absolute and we may decline your request where permitted by law. You can email us at <a href="mailto:privacy@iknowledge.ai" className="underline hover:text-gray-600">privacy@iknowledge.ai</a> to exercise these rights. We will not discriminate against you for doing so. For your security, we may require you, or any agent acting on behalf, to verify your identity and any agent authorization before exercising these rights. If we deny your request, and where permitted by law, you may appeal our decision by emailing us at <a href="mailto:privacy@iknowledge.ai" className="underline hover:text-gray-600">privacy@iknowledge.ai</a>.
                    </p>
                </ContentSection>

                <ContentSection title="8. Children’s privacy" delay="0.9s">
                    <p>
                        Our Services are not intended for or directed at children under the age of 13 and we do not knowingly collect personal information about them. If you believe we have unknowingly done so please email us at <a href="mailto:privacy@iknowledge.ai" className="underline hover:text-gray-600">privacy@iknowledge.ai</a>, and we will make commercially reasonable efforts to delete such information.
                    </p>
                </ContentSection>

                <ContentSection title="9. Third parties" delay="1.0s">
                    <p>
                        We may provide links or integrations with third parties, such as social media websites, in our Services, and you may, at your choice, disclose personal information to those third parties. We are not responsible for the privacy rights or security features of those third parties. We recommend reviewing those third parties’ Privacy Notices and contacting those third parties directly with any questions or concerns.
                    </p>
                </ContentSection>

                <ContentSection title="10. Additional U.S. state disclosures" delay="1.1s">
                    <p>
                        Some U.S. states, such as California, require additional disclosures about what personal information we collect and how we use or disclose it. For purposes of this Section, personal information also includes “sensitive personal information” as defined under the California Consumer Privacy Act (“CCPA”).
                    </p>
                    <p className="mt-4">
                        The table below sets out the categories of personal information that we collect and disclose, and have collected and disclosed over the past 12 months.
                    </p>

                    <div className="mt-6 overflow-x-auto">
                        <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200">
                            <thead className="bg-gray-50 text-gray-900 font-bold">
                                <tr>
                                    <th className="px-4 py-2 border-b">Category of personal information</th>
                                    <th className="px-4 py-2 border-b">Use of personal information</th>
                                    <th className="px-4 py-2 border-b">Disclosure of personal information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="px-4 py-2 align-top">
                                        <strong>We collect the following categories of personal information.</strong><br />
                                        Identifiers, such as your name, IP address, and device information<br />
                                        Personal information listed in the California Customer Records statute such as name<br />
                                        Internet and similar network activity information, such as information about your use of our Services<br />
                                        Geolocation data, such as IP address and general location of your device when you access our Services
                                    </td>
                                    <td className="px-4 py-2 align-top">
                                        <strong>We use personal information for the following purposes.</strong><br />
                                        To communicate with you<br />
                                        To provide, analyze, and improve our Services<br />
                                        To conduct research<br />
                                        To prevent fraud or illegal activity<br />
                                        To comply with our legal or contractual obligations<br />
                                        To protect the safety and security of our Services, you, any other users, or the public or third parties
                                    </td>
                                    <td className="px-4 py-2 align-top">
                                        <strong>We disclose personal information to the following third parties.</strong><br />
                                        Service providers, in order to provide our Services<br />
                                        Governmental or regulatory bodies to comply with applicable law
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p className="mt-4">
                        For information regarding the specific purposes for which we collect and disclose your information, and the categories of sources from which we collect such information, please see the sections above, “Personal Information We Collect” and “How We Disclose Personal Information”. Information about our retention practices is described above in “How Long We Store Personal Information”. We only use and disclose sensitive personal information for the purposes specified in the CCPA or otherwise in line with your consent.
                    </p>
                    <p className="mt-4">
                        We do not “sell” or “share” personal information as those terms are defined in the CCPA nor have we done so in the prior 12 months. Further, we do not have actual knowledge that we sell or share personal information of individuals under 16 years of age.
                    </p>
                </ContentSection>

                <ContentSection title="11. Data transfers" delay="1.2s">
                    <p>
                        We are based in the United States. If you are using the Services outside the United States, please be aware that the information we collect from you may be transferred to, stored and processed in the United States or other countries outside of your country of residence, which may have data privacy or protection rules that are different from your country of residence.
                    </p>
                </ContentSection>

                <ContentSection title="12. How can you contact us?" delay="1.3s">
                    <p>
                        Please email us at <a href="mailto:privacy@iknowledge.ai" className="underline hover:text-gray-600">privacy@iknowledge.ai</a> if you have any questions or would like to exercise any of your rights as described herein.
                    </p>
                </ContentSection>
            </main>

            <Footer />
        </div>
    );
}
