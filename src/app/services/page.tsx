"use client"
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Typewriter from 'typewriter-effect'
import {
    ArrowRight,
    Building2,
    Calculator,
    CheckCircle2,
    ClipboardCheck,
    FileCheck,
    FileText,
    Scale
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";


const Services = () => {
    const [animate,setAnimate]=useState(false);
    useEffect(()=>{
        setAnimate(true);
    },[])
    const services = [
        {
            icon: FileText,
            title: "Tax Filing & Returns",
            description:
                "Comprehensive income tax filing services for individuals, businesses, and corporations. We ensure accurate filing and maximum legitimate deductions.",
            features: [
                "Individual ITR Filing (ITR-1 to ITR-7)",
                "Business & Corporate Tax Returns",
                "TDS Return Filing & Compliance",
                "Tax Planning & Advisory",
                "Refund Tracking & Assistance",
                "Tax Audit Support",
            ],
        },
        {
            icon: Calculator,
            title: "GST Registration & Returns",
            description:
                "End-to-end GST compliance services from registration to regular return filing. Stay compliant with all GST regulations hassle-free.",
            features: [
                "GST Registration (New & Amendments)",
                "GSTR-1, GSTR-3B Monthly/Quarterly Filing",
                "GSTR-9 & GSTR-9C Annual Returns",
                "E-way Bill Generation",
                "GST Audit & Assessment Support",
                "Input Tax Credit Reconciliation",
            ],
        },
        {
            icon: FileCheck,
            title: "Bookkeeping & Accounting",
            description:
                "Professional bookkeeping services to maintain accurate financial records. Get clear insights into your business finances.",
            features: [
                "Daily Transaction Recording",
                "Ledger & Journal Maintenance",
                "Bank Reconciliation",
                "Financial Statement Preparation",
                "MIS Reports & Dashboards",
                "Accounts Payable/Receivable Management",
            ],
        },
        {
            icon: Building2,
            title: "Business Registration",
            description:
                "Complete business incorporation services to help you start your entrepreneurial journey with proper legal structure.",
            features: [
                "Private Limited Company Registration",
                "LLP (Limited Liability Partnership)",
                "Partnership Firm Registration",
                "Sole Proprietorship Setup",
                "MSME/Udyam Registration",
                "Startup India Registration",
            ],
        },
        {
            icon: ClipboardCheck,
            title: "Compliance & Filings",
            description:
                "Stay compliant with all statutory requirements. We handle ROC filings, annual returns, and other regulatory compliance.",
            features: [
                "Annual ROC Filings",
                "Director KYC & DIN Services",
                "Company Annual Returns",
                "Event-based Compliance",
                "Statutory Audit Coordination",
                "Legal Entity Identifier (LEI)",
            ],
        },
        {
            icon: Scale,
            title: "Audit & Assurance",
            description:
                "Professional audit services to ensure accuracy and compliance of your financial statements and business operations.",
            features: [
                "Statutory Audit",
                "Internal Audit",
                "Tax Audit (44AB)",
                "GST Audit",
                "Stock Audit",
                "Due Diligence",
            ],
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="bg-[#193366] text-white py-16 md:py-26">
                <div className="container mx-auto px-4 text-center">
                    <h1 className={`font-serif text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000
                        ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                        `}>OUR SERVICES</h1>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        <Typewriter
                            options={{
                                strings: [
                                    `<span style="color:#EEB32B;font-weight:bold;">TDS RETURN</span>`,
                                    `<span style="color:#70e000;font-weight:bold;">GST COMPLIANCES</span>`,
                                    `<span style="color:#ffffff;font-weight:bold;">INCOME TAX FILING</span>`,
                                    `<span style="color:#f38a3f;font-weight:bold;">ACCOUNTING</span>`],
                                autoStart: true,
                                delay: 80,
                                deleteSpeed: 40,
                                loop: true,
                                cursor:""
                            }}
                        />
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className="w-14 h-14 bg-[#1933661A] rounded-lg flex items-center justify-center flex-shrink-0">
                                        <service.icon className="w-7 h-7 text-[#193366]" />
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-xl font-semibold mb-2">{service.title}</h3>
                                        <p className="text-muted-foreground text-sm">{service.description}</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {service.features.map((feature, fIndex) => (
                                        <div key={fIndex} className="flex items-start space-x-2">
                                            <CheckCircle2 className="w-4 h-4 text-[#EEB32B] flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-muted-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 md:py-24 bg-[#1933661A]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                            How We Work
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Our streamlined process ensures efficient service delivery with complete transparency.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Consultation", desc: "Understand your requirements" },
                            { step: "02", title: "Documentation", desc: "Collect necessary documents" },
                            { step: "03", title: "Processing", desc: "Expert handling of your work" },
                            { step: "04", title: "Delivery", desc: "Timely completion & support" },
                        ].map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-[#193366] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-serif text-xl font-bold">
                                    {item.step}
                                </div>
                                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-[#193366] text-[#fff]">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                        Need a Specific Service?
                    </h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Contact us to discuss your requirements. We offer customized solutions for unique business needs.
                    </p>
                    <Button size="lg" asChild className="bg-[#EEB32B] text-black hover:bg-[#bc880d]">
                        <Link href="/contact">
                            Request a Quote
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </div>
            </section>

            <Footer />
            <FloatingContact />
        </div>
    );
};

export default Services;
