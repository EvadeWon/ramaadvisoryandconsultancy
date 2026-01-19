import { Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#193366] text-white">
            <div className="container mx-auhref px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-[white] rounded-lg flex items-center justify-center text-[#193366]">
                                <span className="text-primary font-serif font-bold text-xl">R</span>
                            </div>
                            <div>
                                <span className="font-serif font-bold text-lg">Rama</span>
                                <span className="font-serif text-lg opacity-80">Advisory</span>
                            </div>
                        </div>
                        <p className="text-sm opacity-80 leading-relaxed">
                            Your trusted partner for comprehensive accounting, taxation, and business advisory services.
                            We help businesses grow with expert financial guidance.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-serif font-semibold text-lg">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                Home
                            </Link>
                            <Link href="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                About Us
                            </Link>
                            <Link href="/services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                Our Services
                            </Link>
                            <Link href="/testimonials" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                Testimonials
                            </Link>
                            <Link href="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                Contact Us
                            </Link>
                        </nav>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="font-serif font-semibold text-lg">Our Services</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                Tax Filing & Returns
                            </Link>
                            <Link href="/services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                GST Registration & Returns
                            </Link>
                            <Link href="/services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                Bookkeeping & Accounting
                            </Link>
                            <Link href="/services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                Business Registration
                            </Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="font-serif font-semibold text-lg">Contact Us</h3>
                        <div className="flex flex-col space-y-3">
                            <a
                                href="tel:7061850744"
                                className="flex items-center space-x-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
                            >
                                <Phone className="w-4 h-4" />
                                <span>7061850744</span>
                            </a>
                            <a
                                href="https://wa.me/917061850744"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>WhatsApp Us</span>
                            </a>
                            <a
                                href="mailhref:ramaassociates7061@gmail.com"
                                className="flex items-center space-x-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
                            >
                                <Mail className="w-4 h-4" />
                                <span>ramaassociates7061@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bothrefm Bar */}
                <div className="mt-12 pt-8 border-t border-primary-foreground/20">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm opacity-80">
                            © {currentYear} Ramaadvisoryandconsultancy. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6">
                            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                Privacy Policy
                            </a>
                            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
