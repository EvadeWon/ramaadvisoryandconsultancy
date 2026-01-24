"use client"
import {
  ArrowRight,
  Award,
  Building2,
  Calculator,
  Clock,
  FileCheck,
  FileText,
  LucideIcon,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";

import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  const services = [
    {
      icon: FileText,
      title: "Tax Filing & Returns",
      description:
        "Expert income tax filing services for individuals and businesses.",
      features: ["ITR Filing", "TDS Returns", "Tax Planning", "Refund Assistance"],
    },
    {
      icon: Calculator,
      title: "GST Registration & Returns",
      description: "Complete GST compliance solutions for your business.",
      features: [
        "GST Registration",
        "Monthly/Quarterly Returns",
        "GST Audit",
        "E-way Bills",
      ],
    },
    {
      icon: FileCheck,
      title: "Bookkeeping & Accounting",
      description:
        "Professional bookkeeping to keep your finances organized.",
      features: [
        "Financial Statements",
        "Ledger Maintenance",
        "Reconciliation",
        "MIS Reports",
      ],
    },
    {
      icon: Building2,
      title: "Business Registration",
      description:
        "Start your business journey with proper legal registration.",
      features: [
        "Company Incorporation",
        "LLP Registration",
        "MSME Registration",
        "Trademark Filing",
      ],
    },
  ];

  const stats = [
    { number: 500, suffix: "+", label: "Happy Clients" },
    { number: 5, suffix: "+", label: "Years Experience" },
    { number: 1000, suffix: "+", label: "Tax Returns Filed" },
    { number: 100, suffix: "%", label: "Compliance Rate" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="flex items-center h-screen relative bg-gradient-to-br from-[#193d75] via-[#1a3f7a] to-[#0f2a56]">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className={`text-white font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000
      ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              Trusted Financial
              <span className="block text-[#EEB32B]">
                Advisory & Consultancy
              </span>
            </h1>

            <p className="text-lg md:text-xl opacity-90 mb-8 text-white">
              Expert accounting, taxation, and business advisory services to help
              your business thrive.
            </p>

            <div className=" text-[#1B2232] flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-[#EEB32B] hover:bg-[#f8c03d]">
                <Link href="/contact">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>

              <Button className="bg-[#ffffff] hover:bg-[#c2dbc1f8]" size="lg" variant="outline" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[#f3f4f7]">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <span>{stat.number}</span>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">
              Why Choose Ramaadvisoryandconsultancy?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature icon={Shield} title="Trusted Expertise" description="Years of experience in handling complex tax and accounting matters." />
            <Feature icon={Users} title="Client-Focused" description="Personalized solutions tailored to your specific business needs." />
            <Feature icon={Award} title="Quality Assurance" description="100% compliance rate with all regulatory requirements." />
            <Feature icon={Clock} title="Timely Delivery" description="Meeting all deadlines without compromising on accuracy." />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-[#f3f4f7]">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl font-bold">Our services</h1>
          <p className="text-center text-gray-600 mb-10">Comprehensive financial services to support every aspect of your business journey.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/services" className="bg-[#193366] text-white">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </div>
  );
}

function Feature({
  icon: Icon,
  title,
  description
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center p-6">
      <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#1933661A]">
        <Icon className="w-8 h-8 text-blue-950" />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-[#625d84]">{description}</p>
    </div>
  );
}

