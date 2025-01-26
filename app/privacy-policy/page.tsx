import React from 'react';
import Heading from "@/components/Headings/Heading";
import SubHeading from "@/components/Headings/SubHeading";
import Heading3 from "@/components/Headings/Heading3";

const Page: React.FC = () => {
    return (
        (
            <div className="mx-auto container max-w-4xl px-6 py-12">
                <Heading text={"Privacy Policy"}/>
                <p className="text-base text-neutral-700 mb-6">
                    Effective Date: <strong>Sunday 26th January 2025</strong>
                </p>
                <section className="mb-10">
                    <SubHeading text={"1. Introduction\n"}/>
                    <p className="text-base text-neutral-700">
                        Farhan Keriwala values your privacy and is committed
                        to protecting your personal information. This Privacy Policy outlines
                        how I collect, use, and safeguard information provided through my
                        portfolio website,
                        <a href="https://www.farhankeriwala.com" className="text-blue-600 hover:underline">
                            www.farhankeriwala.com
                        </a>. If you have any questions, feel free to contact me at <a className={"text-blue-600"}
                                                                                       href={"mailto:contact@farhankeriwala.com"}>contact@farhankeriwala.com</a>.
                    </p>
                </section>

                <section className="mb-10">
                    <SubHeading text={"2. Information I Collect"}/>
                    <Heading3 text={"2.1 Information You Provide"}/>
                    <p className="text-base text-neutral-700">
                        When you contact me through the contact form on my website, I
                        collect:
                    </p>
                    <ul className="list-disc list-inside text-base text-neutral-700 mt-4">
                        <li>Your First Name</li>
                        <li>Your Email Address</li>
                        <li>Your Contact Message</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <SubHeading text={"3. How I Use Your Information"}/>

                    <p className="text-base text-neutral-700">
                        The information you provide is used solely to:
                    </p>
                    <ul className="list-disc list-inside text-base text-neutral-700 mt-4">
                        <li>Respond to your inquiries or messages.</li>
                        <li>Provide information about my services, if requested.</li>
                    </ul>
                    <p className="text-base text-neutral-700 mt-4">
                        I do not use your data for marketing purposes unless you explicitly
                        opt-in.
                    </p>
                </section>

                <section className="mb-10">
                    <SubHeading text={"4. Data Sharing"}/>

                    <p className="text-base text-neutral-700">
                        I do not share your personal data with third parties. Your
                        information is handled confidentially and used exclusively for the
                        purposes outlined in this policy.
                    </p>
                </section>

                <section className="mb-10">
                    <SubHeading text={"5. Data Retention"}/>
                    <p className="text-base text-neutral-700">
                        I retain your contact form submissions only as long as necessary to
                        respond to your inquiries or messages. If you would like your data
                        removed, please contact me at <a className={"text-blue-600"}
                                                         href={"mailto:contact@farhankeriwala.com"}>contact@farhankeriwala.com</a>.
                    </p>
                </section>

                <section className="mb-10">
                    <SubHeading text={"6. Your Rights"}/>
                    <p className="text-base text-neutral-700">
                        Under applicable data protection laws, you have the right to:
                    </p>
                    <ul className="list-disc list-inside text-base text-neutral-700 mt-4">
                        <li>Request access to the personal data I hold about you.</li>
                        <li>Request correction of any inaccurate or incomplete data.</li>
                        <li>Request deletion of your data (&quot;right to be forgotten&quot;).</li>
                    </ul>
                    <p className="text-base text-neutral-700 mt-4">
                        To exercise your rights, contact me at <a className={"text-blue-600"}
                                                                  href={"mailto:contact@farhankeriwala.com"}>contact@farhankeriwala.com</a>.
                    </p>
                </section>

                <section className="mb-10">
                    <SubHeading text={"7. Security"}/>
                    <p className="text-base text-neutral-700">
                        I take reasonable measures to protect your personal data from
                        unauthorized access, disclosure, alteration, or destruction. However,
                        no method of transmission over the Internet is completely secure.
                    </p>
                </section>

                <section className="mb-10">
                    <SubHeading text={"8. Changes to This Policy"}/>
                    <p className="text-base text-neutral-700">
                        I may update this Privacy Policy from time to time to reflect changes
                        to our practices or for legal reasons. Any updates will be posted on
                        this page with the updated effective date.
                    </p>
                </section>

                <section>
                    <p className="text-base text-neutral-700">
                        If you have any questions about this Privacy Policy, please contact me
                        at <a className={"text-blue-600"}
                              href={"mailto:contact@farhankeriwala.com"}>contact@farhankeriwala.com</a>.
                    </p>
                </section>
            </div>
        )
    );
};

export default Page;