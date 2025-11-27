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
                        Welcome to the Terms of Service (these “Terms”) for the website, iknowledge.ai (the “Website”), provided by Iknowledge (“Company”, “we” or “us”). The Website and any content, tools, features and functionality offered on or through our Website are collectively referred to as the “Services”.
                    </p>
                    <p>
                        These Terms govern your access to and use of the Services. Certain of our current or future product or services may be subject to other terms that we may designate from time to time. Please read these Terms carefully, as they include important information about your legal rights. By accessing and/or using the Services, you are agreeing to these Terms. If you do not understand or agree to these Terms, please do not use the Services.
                    </p>
                    <p>
                        For purposes of these Terms, “you” and “your” means you as the user of the Services. If you use the Services on behalf of a company or other entity then “you” includes you and that entity, and you represent and warrant that (a) you are an authorized representative of the entity with the authority to bind the entity to these Terms, and (b) you agree to these Terms on the entity’s behalf.
                    </p>
                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-sm">
                        <strong>SECTION 7 CONTAINS AN ARBITRATION CLAUSE AND CLASS ACTION WAIVER.</strong> BY AGREEING TO THESE TERMS, YOU AGREE (A) TO RESOLVE ALL DISPUTES (WITH LIMITED EXCEPTION) RELATED TO THE COMPANY’S SERVICES AND/OR PRODUCTS THROUGH BINDING INDIVIDUAL ARBITRATION, WHICH MEANS THAT YOU WAIVE ANY RIGHT TO HAVE THOSE DISPUTES DECIDED BY A JUDGE OR JURY, AND (B) TO WAIVE YOUR RIGHT TO PARTICIPATE IN CLASS ACTIONS, CLASS ARBITRATIONS, OR REPRESENTATIVE ACTIONS, AS SET FORTH BELOW. YOU HAVE THE RIGHT TO OPT-OUT OF THE ARBITRATION CLAUSE AND THE CLASS ACTION WAIVER AS EXPLAINED IN SECTION 7.
                    </div>
                </ContentSection>

                <ContentSection title="1. Who may use the services" delay="0.3s">
                    <p>
                        You must be 18 years of age or older and reside in the United States or any of its territories to use the Services. By using the Services, you represent and warrant that you meet these requirements.
                    </p>
                </ContentSection>

                <ContentSection title="2. Location of our privacy notice" delay="0.4s">
                    <p>
                        Our privacy notice describes how we handle the information you provide to us when you use the Services. For an explanation of our privacy practices, please visit our <Link href="/privacy" className="underline hover:text-gray-600">privacy notice</Link>.
                    </p>
                </ContentSection>

                <ContentSection title="3. Rights we grant you" delay="0.5s">
                    <h3 className="font-bold text-gray-900 mb-2">Right to use services</h3>
                    <p>
                        We hereby permit you to use the Services for your personal non-commercial use only, provided that you comply with these Terms in connection with all such use. Your access and use of the Services may be interrupted from time to time for any of several reasons, including, without limitation, the malfunction of equipment, periodic updating, maintenance or repair of the Service or other actions that Company, in its sole discretion, may elect to take.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Restrictions on your use of the services</h3>
                    <p>
                        You may not do any of the following in connection with your use of the Services, unless applicable laws or regulations prohibit these restrictions or you have our written permission to do so:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li>Download, modify, copy, distribute, transmit, display, perform, reproduce, duplicate, publish, license, create derivative works from, or offer for sale any information contained on, or obtained from or through, the Services, except for temporary files that are automatically cached by your web browser for display purposes, or as otherwise expressly permitted in these Terms;</li>
                        <li>Use, reproduce or remove any copyright, trademark, service mark, trade name, slogan, logo, image, or other proprietary notation displayed on or through the Services;</li>
                        <li>Access or use the Services in any manner that could disable, overburden, damage, disrupt or impair the Services or interfere with any other party’s access to or use of the Services or use any device, software or routine that causes the same;</li>
                        <li>Attempt to gain unauthorized access to, interfere with, damage or disrupt the Services, or the computer systems or networks connected to the Services;</li>
                        <li>Circumvent, remove, alter, deactivate, degrade or thwart any technological measure or content protections of the Services;</li>
                        <li>Use any robot, spider, crawlers, scraper, or other automatic device, process, software or queries that intercepts, “mines,” scrapes, extracts, or otherwise accesses the Services to monitor, extract, copy or collect information or data from or through the Services, or engage in any manual process to do the same;</li>
                        <li>Introduce any viruses, trojan horses, worms, logic bombs or other materials that are malicious or technologically harmful into our systems;</li>
                        <li>Submit, transmit, display, perform, post or store any content that is unlawful, defamatory, obscene, excessively violent, pornographic, invasive of privacy or publicity rights, harassing, abusive, hateful, or cruel, or otherwise use the Services in a manner that is obscene, excessively violent, harassing, hateful, cruel, abusive, pornographic, inciting, organizing, promoting or facilitating violence or criminal activities;</li>
                        <li>Violate any applicable law or regulation in connection with your access to or use of the Services; or</li>
                        <li>Access or use the Services in any way not expressly permitted by these Terms.</li>
                    </ul>
                </ContentSection>

                <ContentSection title="4. Ownership and content" delay="0.6s">
                    <h3 className="font-bold text-gray-900 mb-2">Ownership of the services</h3>
                    <p>
                        The Services, including their “look and feel” (e.g., text, graphics, images, logos), proprietary content, information and other materials, are protected under copyright, trademark and other intellectual property laws. You agree that the Company and/or its licensors own all right, title and interest in and to the Services (including any and all intellectual property rights therein) and you agree not to take any action(s) inconsistent with such ownership interests. We and our licensors reserve all rights in connection with the Services and its content, including, without limitation, the exclusive right to create derivative works.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Ownership of trademarks</h3>
                    <p>
                        The Company’s name, trademarks, logos and all related names, logos, product and service names, designs and slogans are trademarks of the Company or its affiliates or licensors. Other names, logos, product and service names, designs and slogans that appear on the Services are the property of their respective owners, who may or may not be affiliated with, connected to, or sponsored by us.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Ownership of feedback</h3>
                    <p>
                        We welcome feedback, comments and suggestions for improvements to the Services (“Feedback”). You acknowledge and expressly agree that any contribution of Feedback does not and will not give or grant you any right, title or interest in the Services or in any such Feedback. All Feedback becomes the sole and exclusive property of the Company, and the Company may use and disclose Feedback in any manner and for any purpose whatsoever without further notice or compensation to you and without retention by you of any proprietary or other right or claim. You hereby assign to the Company any and all right, title and interest (including, but not limited to, any patent, copyright, trade secret, trademark, show-how, know-how, moral rights and any and all other intellectual property right) that you may have in and to any and all Feedback.
                    </p>
                </ContentSection>

                <ContentSection title="5. Third-party services and materials" delay="0.7s">
                    <h3 className="font-bold text-gray-900 mb-2">Use of third-party materials in the services</h3>
                    <p>
                        Certain Services may display, include or make available content, data, information, applications or materials from third parties or provide links to third-party websites (“Third-Party Materials”). By using the Services, you acknowledge and agree that the Company is not responsible for examining or evaluating the content, accuracy, completeness, availability, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect of such Third-Party Materials. We do not warrant or endorse and do not assume and will not have any liability or responsibility to you or any other person for any Third-Party Materials or for any other materials, products, or services of third parties. Third-Party Materials are provided solely as a convenience to you.
                    </p>
                </ContentSection>

                <ContentSection title="6. Disclaimers, limitations of liability and indemnification" delay="0.8s">
                    <h3 className="font-bold text-gray-900 mb-2">Disclaimers</h3>
                    <p>
                        Your access to and use of the Services are at your own risk. You understand and agree that the Services are provided to you on an “AS IS” and “AS AVAILABLE” basis. Without limiting the foregoing, to the maximum extent permitted under applicable law, the Company, its parents, affiliates, related companies, officers, directors, employees, agents, representatives, partners and licensors (the “Company Entities”) DISCLAIM ALL WARRANTIES AND CONDITIONS, WHETHER EXPRESS OR IMPLIED, OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. The Company Entities make no warranty or representation and disclaim all responsibility and liability for: (a) the completeness, accuracy, availability, timeliness, security or reliability of the Services; (b) any harm to your computer system, loss of data, or other harm that results from your access to or use of the Services; (c) the operation or compatibility with any other application or any particular system or device; and (d) whether the Services will meet your requirements or be available on an uninterrupted, secure or error-free basis. No advice or information, whether oral or written, obtained from the Company Entities or through the Services, will create any warranty or representation not expressly made herein.
                    </p>
                    <p className="mt-4 uppercase text-xs">
                        THE LAWS OF CERTAIN JURISDICTIONS, INCLUDING THE STATE OF NEW JERSEY, DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES AS SET FORTH IN SECTION 6.2 BELOW. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS, EXCLUSIONS, OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Limitations of liability</h3>
                    <p className="uppercase text-xs">
                        TO THE EXTENT NOT PROHIBITED BY LAW, YOU AGREE THAT IN NO EVENT WILL THE COMPANY ENTITIES BE LIABLE (A) FOR DAMAGES OF ANY KIND, INCLUDING INDIRECT SPECIAL, EXEMPLARY, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, LOSS OF USE, DATA OR PROFITS, BUSINESS INTERRUPTION OR ANY OTHER DAMAGES OR LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OR INABILITY TO USE THE SERVICES), HOWEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, WHETHER UNDER THESE TERMS OR OTHERWISE ARISING IN ANY WAY IN CONNECTION WITH THE SERVICES OR THESE TERMS AND WHETHER IN CONTRACT, STRICT LIABILITY OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) EVEN IF THE COMPANY ENTITIES HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE, OR (B) FOR ANY OTHER CLAIM, DEMAND OR DAMAGES WHATSOEVER RESULTING FROM OR ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE DELIVERY, USE OR PERFORMANCE OF THE SERVICES. THE COMPANY ENTITIES’ TOTAL LIABILITY TO YOU FOR ANY DAMAGES FINALLY AWARDED SHALL NOT EXCEED ONE HUNDRED DOLLARS ($100.00). THE FOREGOING LIMITATIONS WILL APPLY EVEN IF THE ABOVE STATED REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Indemnification</h3>
                    <p>
                        By entering into these Terms and accessing or using the Services, you agree that you shall defend, indemnify and hold the Company Entities harmless from and against any and all claims, costs, damages, losses, liabilities and expenses (including attorneys’ fees and costs) incurred by the Company Entities arising out of or in connection with: (a) your violation or breach of any term of these Terms or any applicable law or regulation; (b) your violation of any rights of any third party; (c) your misuse of the Services; or (d) your negligence or wilful misconduct. If you are obligated to indemnify any Company Entity hereunder, then you agree that Company (or, at its discretion, the applicable Company Entity) will have the right, in its sole discretion, to control any action or proceeding and to determine whether Company wishes to settle, and if so, on what terms, and you agree to fully cooperate with Company in the defense or settlement of such claim.
                    </p>
                </ContentSection>

                <ContentSection title="7. Arbitration and class action waiver" delay="0.9s">
                    <p className="uppercase text-xs font-bold mb-4">
                        PLEASE READ THIS SECTION CAREFULLY – IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT AND TO HAVE A JURY HEAR YOUR CLAIMS. IT CONTAINS PROCEDURES FOR MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.
                    </p>

                    <h3 className="font-bold text-gray-900 mb-2">Informal process first</h3>
                    <p>
                        You and the Company agree that in the event of any dispute, either party will first contact the other party and make a good faith sustained effort to resolve the dispute before resorting to more formal means of resolution, including without limitation, any court action, after first allowing the receiving party thirty (30) days in which to respond. Both you and the Company agree that this dispute resolution procedure is a condition precedent which must be satisfied before initiating any arbitration against the other party.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Arbitration agreement and class action waiver</h3>
                    <p>
                        After the informal dispute resolution process, any remaining dispute, controversy, or claim (collectively, “Claim”) relating in any way to the Company’s services and/or products, including the Services, and any use or access or lack of access thereto, will be resolved by arbitration, including threshold questions of arbitrability of the Claim. You and the Company agree that any Claim will be settled by final and binding arbitration, using the English language, administered by JAMS under its Comprehensive Arbitration Rules and Procedures (the “JAMS Rules”) then in effect (those rules are deemed to be incorporated by reference into this section, and as of the date of these Terms). Because your contract with the Company, these Terms, and this Arbitration Agreement concern interstate commerce, the Federal Arbitration Act (“FAA”) governs the arbitrability of all disputes. However, the arbitrator will apply applicable substantive law consistent with the FAA and the applicable statute of limitations or condition precedent to suit. Arbitration will be handled by a sole arbitrator in accordance with the JAMS Rules. Judgment on the arbitration award may be entered in any court that has jurisdiction. Any arbitration under these Terms will take place on an individual basis – class arbitrations and Class Actions are not permitted. You understand that by agreeing to these Terms, you and the Company are each waiving the right to trial by jury or to participate in a Class Action or class arbitration.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Exceptions</h3>
                    <p>Notwithstanding the foregoing, you and the Company agree that the following types of Claims will be resolved in a court of proper jurisdiction:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-2">
                        <li>Claims within the jurisdiction of a small claims court consistent with the jurisdictional and dollar limits that may apply, as long as it is brought and maintained as an individual dispute and not as a class, representative, or consolidated action or proceeding;</li>
                        <li>Claims where the sole form of relief sought is injunctive relief (including public injunctive relief); or</li>
                        <li>Intellectual property Claims.</li>
                    </ul>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Costs of arbitration</h3>
                    <p>
                        Payment of all filing, administration, and arbitrator costs and expenses will be governed by the JAMS Rules, except that if you demonstrate that any such costs and expenses owed by you under those rules would be prohibitively more expensive than a court proceeding, the Company will pay the amount of any such costs and expenses that the arbitrator determines are necessary to prevent the arbitration from being prohibitively more expensive than a court proceeding (subject to possible reimbursement as set forth below). Fees and costs may be awarded as provided pursuant to applicable law. If the arbitrator finds that either the substance of your claim or the relief sought in the demand is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all fees will be governed by the JAMS Rules. In that case, you agree to reimburse the Company for all monies previously disbursed by it that are otherwise your obligation to pay under the applicable rules. If you prevail in the arbitration and are awarded an amount that is less than the last written settlement amount offered by the Company before the arbitrator was appointed, the Company will pay you the amount it offered in settlement. The arbitrator may make rulings and resolve disputes as to the payment and reimbursement of fees or expenses at any time during the proceeding and upon request from either party made within fourteen (14) days of the arbitrator’s ruling on the merits.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Opt-Out</h3>
                    <p>
                        You have the right to opt-out and not be bound by the arbitration provisions set forth in these Terms by sending written notice of your decision to opt-out to terms@iknowledge.ai. The notice must be sent to the Company within thirty (30) days of your first registering to use the Services or agreeing to these Terms; otherwise, you shall be bound to arbitrate disputes on a non-class basis in accordance with these Terms. If you opt out of only the arbitration provisions, and not also the Class Action waiver, the Class Action waiver still applies. You may not opt out of only the Class Action waiver and not also the arbitration provisions. If you opt-out of these arbitration provisions, the Company also will not be bound by them.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Waiver of right to bring class action and representative claims</h3>
                    <p className="uppercase text-xs">
                        TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, YOU AND THE COMPANY EACH AGREE THAT ANY PROCEEDING TO RESOLVE ANY DISPUTE, CLAIM OR CONTROVERSY WILL BE BROUGHT AND CONDUCTED ONLY IN THE RESPECTIVE PARTY’S INDIVIDUAL CAPACITY AND NOT AS PART OF ANY CLASS (OR PURPORTED CLASS), CONSOLIDATED, MULTIPLE-PLAINTIFF, OR REPRESENTATIVE ACTION OR PROCEEDING (“CLASS ACTION”). YOU AND THE COMPANY AGREE TO WAIVE THE RIGHT TO PARTICIPATE AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS ACTION. YOU AND THE COMPANY EXPRESSLY WAIVE ANY ABILITY TO MAINTAIN A CLASS ACTION IN ANY FORUM. IF THE DISPUTE IS SUBJECT TO ARBITRATION, THE ARBITRATOR WILL NOT HAVE THE AUTHORITY TO COMBINE OR AGGREGATE CLAIMS, CONDUCT A CLASS ACTION, OR MAKE AN AWARD TO ANY PERSON OR ENTITY NOT A PARTY TO THE ARBITRATION. FURTHER, YOU AND THE COMPANY AGREE THAT THE ARBITRATOR MAY NOT CONSOLIDATE PROCEEDINGS FOR MORE THAN ONE PERSON’S CLAIMS, AND IT MAY NOT OTHERWISE PRESIDE OVER ANY FORM OF A CLASS ACTION. FOR THE AVOIDANCE OF DOUBT, HOWEVER, YOU CAN SEEK PUBLIC INJUNCTIVE RELIEF TO THE EXTENT AUTHORIZED BY LAW AND CONSISTENT WITH THE EXCEPTIONS CLAUSE ABOVE. IF THIS CLASS ACTION WAIVER IS LIMITED, VOIDED, OR FOUND UNENFORCEABLE, THEN, UNLESS THE PARTIES MUTUALLY AGREE OTHERWISE, THE PARTIES’ AGREEMENT TO ARBITRATE SHALL BE NULL AND VOID WITH RESPECT TO SUCH PROCEEDING SO LONG AS THE PROCEEDING IS PERMITTED TO PROCEED AS A CLASS ACTION. IF A COURT DECIDES THAT THE LIMITATIONS OF THIS PARAGRAPH ARE DEEMED INVALID OR UNENFORCEABLE, ANY PUTATIVE CLASS, PRIVATE ATTORNEY GENERAL, OR CONSOLIDATED OR REPRESENTATIVE ACTION MUST BE BROUGHT IN A COURT OF PROPER JURISDICTION AND NOT IN ARBITRATION.
                    </p>
                </ContentSection>

                <ContentSection title="8. Additional provisions" delay="1.0s">
                    <h3 className="font-bold text-gray-900 mb-2">Updating these terms</h3>
                    <p>
                        We may modify these Terms from time to time in which case we will update the “Last Revised” date at the top of these Terms. If we make changes that are material, we will use reasonable efforts to attempt to notify you, such as by e-mail and/or by placing a prominent notice on the first page of the Website. However, it is your sole responsibility to review these Terms from time to time to view any such changes. The updated Terms will be effective as of the time of posting, or such later date as may be specified in the updated Terms. Your continued access or use of the Services after the modifications have become effective will be deemed your acceptance of the modified Terms. No amendment shall apply to a dispute for which an arbitration has been initiated prior to the change in Terms.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Termination of license</h3>
                    <p>
                        If you breach any of the provisions of these Terms, all licenses granted by the Company will terminate automatically. All sections which by their nature should survive the termination of these Terms shall continue in full force and effect subsequent to and notwithstanding any termination of these Terms by the Company or you. Termination will not limit any of the Company’s other rights or remedies at law or in equity.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Injunctive relief</h3>
                    <p>
                        You agree that a breach of these Terms will cause irreparable injury to the Company for which monetary damages would not be an adequate remedy and the Company shall be entitled to equitable relief in addition to any remedies it may have hereunder or at law without a bond, other security or proof of damages.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">California residents</h3>
                    <p>
                        If you are a California resident, in accordance with Cal. Civ. Code § 1789.3, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs by contacting them in writing at 1625 North Market Blvd., Suite N 112 Sacramento, CA 95834, or by telephone at (800) 952-5210.
                    </p>

                    <h3 className="font-bold text-gray-900 mt-6 mb-2">Miscellaneous</h3>
                    <p>
                        If any provision of these Terms shall be unlawful, void or for any reason unenforceable, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions. These Terms and the licenses granted hereunder may be assigned by the Company but may not be assigned by you without the prior express written consent of the Company. No waiver by either party of any breach or default hereunder shall be deemed to be a waiver of any preceding or subsequent breach or default. The section headings used herein are for reference only and shall not be read to have any legal effect. The Services are operated by us in the United States. Those who choose to access the Services from locations outside the United States do so at their own initiative and are responsible for compliance with applicable local laws. These Terms are governed by the laws of the State of California, without regard to conflict of laws rules, and the proper venue for any disputes arising out of or relating to any of the same will be the arbitration venue set forth in Section 7, or if arbitration does not apply, then the state and federal courts located in San Francisco, California.
                    </p>
                </ContentSection>

                <ContentSection title="9. How to contact us" delay="1.1s">
                    <p>
                        You may contact us regarding the Services or these Terms by e-mail at <a href="mailto:terms@iknowledge.ai" className="underline hover:text-gray-600">terms@iknowledge.ai</a>.
                    </p>
                </ContentSection>
            </main>

            <Footer />
        </div>
    );
}
