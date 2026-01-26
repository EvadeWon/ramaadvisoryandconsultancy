// components/ServiceCard.tsx
"use client"
import { useInView } from "@/hooks/useInView";
import { LucideIcon } from "lucide-react";

type ServiceCardProps = {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
    delay?: number; // staggered animation ke liye
};

export default function ServiceCard({
    icon: Icon,
    title,
    description,
    features,
    delay = 0
}: ServiceCardProps) {
    const { ref, isVisible } = useInView(0.2);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-700 ease-out
        ${isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50"}
      `}
        >
            <div className="w-14 h-14 mb-4 flex items-center justify-center rounded-lg bg-[#1933661A]">
                <Icon className="w-7 h-7 text-blue-950" />
            </div>

            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>

            <ul className="space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-blue-950 rounded-full mr-2"></span>
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
}