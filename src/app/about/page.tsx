"use client";

import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    CheckCircle2,
    Eye,
    Heart,
    Target,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';

const About = () => {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);
    const values = [
        {
            icon: Target,
            title: "Mission",
            description:
                "To provide accessible, reliable, and professional financial services that empower businesses and individuals to achieve their financial goals with confidence.",
        },
        {
            icon: Eye,
            title: "Vision",
            description:
                "To be the most trusted name in accounting and taxation services, known for integrity, expertise, and client satisfaction.",
        },
        {
            icon: Heart,
            title: "Values",
            description:
                "Integrity, Excellence, Client-First Approach, Continuous Learning, and Transparency in all our dealings.",
        },
    ];

    const whyUs = [
        "Experienced team of qualified professionals",
        "Personalized attention to every client",
        "Transparent and competitive pricing",
        "Up-to-date knowledge of latest tax laws",
        "Quick turnaround time on all services",
        "Strong track record of 100% compliance",
        "Confidential handling of all financial data",
        "Long-term partnership approach",
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="bg-[#193366] text-white py-16 md:py-26">
                <div className="container mx-auto px-4 text-center">
                    <h1 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-1000
                        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                        `}>
                        ABOUT US
                    </h1>
                    <p className={`text-lg opacity-90 max-w-2xl mx-auto transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <Typewriter
                            options={{
                                strings: [
                                    `<span style="color:#EEB32B;font-weight:bold;">WHO WE ARE?</span>`,
                                    `<span style="color:#70e000;font-weight:bold;">WHY WE EXIST?</span>`,
                                    `<span style="color:#ffffff;font-weight:bold;">WHY WE CAN BE TRUSTED?</span>`],
                                autoStart: true,
                                delay: 200,
                                deleteSpeed: 40,
                                loop: true
                            }}
                        />
                    </p>
                    <p className="text-lg opacity-90 max-w-4xl mx-auto">
                        Rama Advisory & Consultancy is a professional financial and compliance services firm dedicated to helping businesses and individuals manage their accounting, taxation, and regulatory requirements with confidence.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                                Your Trusted Financial Partner
                            </h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Ramaadvisoryandconsultancy was founded with a simple mission:
                                    to make professional accounting and taxation services
                                    accessible to businesses of all sizes.
                                </p>
                                <p>
                                    With over 5 years of experience, our team has helped hundreds
                                    of clients achieve compliance and financial clarity.
                                </p>
                                <p>
                                    From startups to established businesses, we deliver expert
                                    guidance tailored to your needs.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#f3f4f7] rounded-2xl text-[#193366] p-8 md:p-12">
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    ["500+", "Satisfied Clients"],
                                    ["5+", "Years Experience"],
                                    ["1000+", "Returns Filed"],
                                    ["100%", "Compliance Rate"],
                                ].map(([value, label]) => (
                                    <div key={label} className="text-center">
                                        <p className="font-serif text-4xl font-bold text-primary">
                                            {value}
                                        </p>
                                        <p className="text-muted-foreground text-sm">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Vision Values */}
            <section className="py-16 md:py-24 bg-[#f3f4f7]">
                <h1 className="text-center font-bold text-4xl mb-10">What Drives Us</h1>
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-8 text-center border"
                            >
                                <div className="w-16 h-16 bg-[#1933661A] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="w-8 h-8 text-[#193366]" />
                                </div>
                                <h3 className="font-serif text-xl font-semibold mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                            Why Choose Us?
                        </h2>
                        <p className="text-[#626D84] mt-4 mb-4 p-4">We believe in building lasting relationships with our clients based on trust, transparency, and exceptional service delivery.</p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {whyUs.map((item, index) => (
                                <div key={index} className="flex gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#EEB32B]" />
                                    <span className="text-sm text-muted-foreground">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#193366] rounded-2xl p-8 text-primary-foreground text-[#ffffff]">
                        <h3 className="font-serif text-2xl font-bold mb-4">
                            Ready to Work Together?
                        </h3>
                        <p className="opacity-90 mb-6">
                            Let us help your business grow with professional financial
                            services.
                        </p>

                        <Button size="lg" asChild>
                            <Link href="/contact" className="bg-[#EEB32B] text-black">
                                Get in Touch
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingContact />
        </div>
    );
};

export default About;
