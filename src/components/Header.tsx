"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "Contact", path: "/contact" },
    ];

    const isActive = (path: string) =>
        pathname === path || pathname.startsWith(path + "/");

    return (
        <header className="sticky top-0 left-0 w-full z-50 bg-white/60 backdrop-blur border-black/5">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-1">
                        <div className="w-10 h-10 bg-[#193366] rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">R</span>
                        </div>
                        <h1 className="hidden sm:block font-bold text-lg">Rama<span className="text-muted-foreground">Advisory</span></h1>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={cn(
                                    "text-xs font-medium transition-colors hover:text-primary",
                                    isActive(link.path)
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button variant="outline" className="border-black" size="sm" color="#ffffff" asChild>
                            <Link href="tel:7061850744">
                                <Phone className="w-4 h-4 mr-2" />
                                Call Us
                            </Link>
                        </Button>

                        <Button size="sm" asChild className="bg-green-600 hover:bg-green-700 text-white">
                            <Link
                                href="https://wa.me/917061850744"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                WhatsApp
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t py-4">
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={cn(
                                        "text-sm font-medium",
                                        isActive(link.path)
                                            ? "text-primary"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="flex flex-col gap-3 pt-4">
                                <Button variant="outline" size="sm" asChild>
                                    <a href="tel:7061850744">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Call Us
                                    </a>
                                </Button>

                                <Button size="sm" asChild className="bg-green-600 hover:bg-green-700">
                                    <a
                                        href="https://wa.me/917061850744"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <MessageCircle className="w-4 h-4 mr-2" />
                                        WhatsApp
                                    </a>
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
