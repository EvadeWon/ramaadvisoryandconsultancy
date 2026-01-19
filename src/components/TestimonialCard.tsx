import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
    name: string;
    role: string;
    company: string;
    testimonial: string;
    rating: number;
}

const TestimonialCard = ({ name, role, company, testimonial, rating }: TestimonialCardProps) => {
    return (
        <Card className="bg-card border-border h-full">
            <CardContent className="pt-6">
                {/* Stars */}
                <div className="flex space-x-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={`w-7 h-7 ${i < rating ? "fill-[#EEB32B] text-white" : "text-muted"
                                }`}
                        />
                    ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#1933661A] rounded-full flex items-center justify-center">
                        <span className="text-[#193366] font-semibold text-lg">
                            {name.charAt(0)}
                        </span>
                    </div>
                    <div>
                        <p className="font-semibold text-foreground">{name}</p>
                        <p className="text-sm text-muted-foreground">
                            {role}, {company}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default TestimonialCard;
