"use client"
import ContactForm from "@/components/ContactForm";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const Contact = () => {
    const contactInfo = [
        {
            icon: Phone,
            title: "Call Us",
            content: "7061850744",
            link: "tel:7061850744",
            description: "Mon-Sat, 9:00 AM - 7:00 PM",
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            content: "Chat with us",
            link: "https://wa.me/917061850744",
            description: "Quick responses guaranteed",
            external: true,
        },
        {
            icon: Mail,
            title: "Email Us",
            content: "ramaassociates7061@gmail.com",
            link: "mailto:ramaassociates7061@gmail.com",
            description: "We'll respond within 24 hours",
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="bg-[#193366] text-white py-16 md:py-26">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">CONTACT US</h1>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Get in touch with us for any queries or to schedule a consultation. We're here to help!
                    </p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="py-12 bg-[#1933661A]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactInfo.map((info, index) => (
                            <Link
                                key={index}
                                href={info.link}
                                target={info.external ? "_blank" : undefined}
                                rel={info.external ? "noopener noreferrer" : undefined}
                                className="bg-white border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1 group"
                            >
                                <div className="w-14 h-14 bg-[#1933661A] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#193366] transition-colors">
                                    <info.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                                <p className="text-[#193366] font-medium mb-1">{info.content}</p>
                                <p className="text-muted-foreground text-sm">{info.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <div>
                            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                                Send Us a Message
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Fill out the form below and we'll get back to you as soon as possible.
                                All inquiries are treated with complete confidentiality.
                            </p>
                            <ContactForm />
                        </div>

                        {/* Info */}
                        <div className="lg:pl-8">
                            <div className="rounded-2xl p-8 mb-8 bg-[#1933661A]">
                                <h3 className="font-serif text-xl font-semibold mb-6">Business Hours</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <Clock className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <p className="font-medium">Monday - Saturday</p>
                                            <p className="text-muted-foreground">9:00 AM - 7:00 PM</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <Clock className="w-5 h-5 text-primary mt-1" />
                                        <div>
                                            <p className="font-medium">Sunday</p>
                                            <p className="text-muted-foreground">By Appointment Only</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#193366] text-white rounded-2xl p-8">
                                <h3 className="font-serif text-xl font-semibold mb-4">Quick Response</h3>
                                <p className="opacity-90 mb-6">
                                    Need immediate assistance? Reach us directly via WhatsApp for the fastest response.
                                </p>
                                <Link
                                    href="https://wa.me/917061850744"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>Chat on WhatsApp</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="py-16 bg-[#1933661A]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {[
                            {
                                q: "What documents do I need for tax filing?",
                                a: "You'll need PAN card, Aadhaar, Form 16 (for salaried), bank statements, investment proofs, and any other income documents.",
                            },
                            {
                                q: "How long does GST registration take?",
                                a: "GST registration typically takes 3-7 working days once all documents are submitted correctly.",
                            },
                            {
                                q: "Do you offer services for startups?",
                                a: "Yes! We specialize in startup services including company registration, compliance setup, and ongoing accounting support.",
                            },
                        ].map((faq, index) => (
                            <div key={index} className="bg-white border border-border rounded-lg p-6">
                                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                                <p className="text-muted-foreground">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingContact />
        </div>
    );
};

export default Contact;
