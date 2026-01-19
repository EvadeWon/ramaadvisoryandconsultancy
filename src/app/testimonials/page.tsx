import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";
import Link from "next/link";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Rajesh Kumar",
            role: "Managing Director",
            company: "Kumar Enterprises",
            testimonial:
                "Rama Advisory has been handling our accounting and tax matters for over 5 years. Their professionalism and attention to detail is exceptional. They always ensure we're compliant and help us save on taxes legally.",
            rating: 5,
        },
        {
            name: "Priya Sharma",
            role: "Founder",
            company: "TechStart Solutions",
            testimonial:
                "When I started my business, I had no idea about GST and compliance. The team at Rama Advisory guided me through everything - from company registration to monthly GST returns. Highly recommended!",
            rating: 5,
        },
        {
            name: "Amit Patel",
            role: "Partner",
            company: "Patel & Associates",
            testimonial:
                "Their bookkeeping services are top-notch. We now have complete clarity on our finances with their detailed MIS reports. The team is always available whenever we have questions.",
            rating: 5,
        },
        {
            name: "Sunita Devi",
            role: "Proprietor",
            company: "SD Textiles",
            testimonial:
                "I was struggling with my tax returns for years. Rama Advisory not only filed them correctly but also helped me get a substantial refund. Very trustworthy and professional service.",
            rating: 5,
        },
        {
            name: "Mohammad Irfan",
            role: "CEO",
            company: "MI Trading Co.",
            testimonial:
                "The best thing about working with Rama Advisory is their proactive approach. They remind us of all deadlines and ensure we never face any penalties. Great value for money!",
            rating: 5,
        },
        {
            name: "Kavita Joshi",
            role: "Director",
            company: "Joshi Pharmaceuticals",
            testimonial:
                "We've been using their audit services and are extremely satisfied. Their thorough approach has helped us identify areas of improvement in our financial processes.",
            rating: 4,
        },
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="bg-[#193366] text-white py-16 md:py-26">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                        Do not just take our word for it. Here is what our valued clients have to say about our services.
                    </p>
                </div>
            </section>

            {/* Featured Testimonial */}
            <section className="py-16 md:py-24 bg-[#1933661A]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-[#fff] rounded-2xl p-8 md:p-12 relative border border-border">
                        <Quote className="absolute top-8 left-8 w-12 h-12 text-orange-500 opacity-30" />
                        <div className="text-center">
                            <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed italic">
                                Choosing Rama Advisory was one of the best business decisions we made.
                                Their expertise in taxation and accounting has helped us grow while staying
                                fully compliant. They are not just service providers; they are true partners
                                in our success.
                            </p>
                            <div className="flex items-center justify-center space-x-4">
                                <div className="w-16 h-16 bg-[#1933661A] rounded-full flex items-center justify-center">
                                    <span className="text-[#193366] font-semibold text-2xl">R</span>
                                </div>
                                <div className="text-left">
                                    <p className="font-semibold text-lg">Rajesh Kumar</p>
                                    <p className="text-muted-foreground">Managing Director, Kumar Enterprises</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                            What Our Clients Say
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Real feedback from real clients who have experienced our professional services.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} {...testimonial} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-16 bg-[#1933661A]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="font-serif text-4xl font-bold text-primary mb-2">500+</p>
                            <p className="text-muted-foreground">Happy Clients</p>
                        </div>
                        <div>
                            <p className="font-serif text-4xl font-bold text-primary mb-2">98%</p>
                            <p className="text-muted-foreground">Client Retention</p>
                        </div>
                        <div>
                            <p className="font-serif text-4xl font-bold text-primary mb-2">4.9/5</p>
                            <p className="text-muted-foreground">Average Rating</p>
                        </div>
                        <div>
                            <p className="font-serif text-4xl font-bold text-primary mb-2">100%</p>
                            <p className="text-muted-foreground">Recommendation Rate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-24 bg-[#193366] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
                        Join Our Growing Family of Satisfied Clients
                    </h2>
                    <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                        Experience the difference of working with a dedicated team of financial professionals.
                    </p>
                    <Button size="lg" asChild className="bg-[#EEB32B] text-black hover:bg-[#cb9411]">
                        <Link href="/contact">
                            Get Started Today
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

export default Testimonials;
