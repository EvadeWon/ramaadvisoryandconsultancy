// components/Feature.tsx (Alternative - Bouncy pop)
"use client"
import { useInView } from "@/hooks/useInView";
import { LucideIcon } from "lucide-react";

type FeatureProps = {
    icon: LucideIcon;
    title: string;
    description: string;
    delay?: number;
};

export default function Feature({
    icon: Icon,
    title,
    description,
    delay = 0
}: FeatureProps) {
    const { ref, isVisible } = useInView(0.2);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`text-center p-6 transition-all duration-700
        ${isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-50"}
      `}
        >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#1933661A]">
                <Icon className="w-8 h-8 text-blue-950" />
            </div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-[#625d84]">{description}</p>
        </div>
    );
}