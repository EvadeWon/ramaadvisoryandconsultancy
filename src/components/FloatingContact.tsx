import { MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const FloatingContact = () => {
    return (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
            {/* WhatsApp Button */}
            <Link
                href="https://wa.me/917061850744"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="w-6 h-6" />
            </Link>

            {/* Call Button */}
            <Link
                href="tel:7061850744"
                className="w-14 h-14 bg-[#193366] hover:bg-navy-light text-primary-foreground rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110 text-white shadow-amber-100"
                aria-label="Call us"
            >
                <Phone className="w-6 h-6" />
            </Link>
        </div>
    );
};

export default FloatingContact;
