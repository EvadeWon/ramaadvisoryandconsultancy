// components/StatItem.tsx
"use client"
import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

type StatItemProps = {
    number: number;
    suffix: string;
    label: string;
};

export default function StatItem({ number, suffix, label }: StatItemProps) {
    const { ref, isVisible } = useInView(0.3);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        if (!isVisible) {
            setCount(0);
            return;
        }

        let start = 0;
        const end = number;
        const duration = 1000;
        const stepTime = 20;
        const step = Math.ceil(end / (duration / stepTime));

        const timer = setInterval(() => {
            start += step;
            if (start >= end) {
                start = end;
                clearInterval(timer);
            }
            setCount(start);
        }, stepTime);

        return () => clearInterval(timer);
    }, [isVisible, number]);

    return (
        <div
            ref={ref}
            className={`text-center transition-all duration-700 ease-out
        ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
        `}
        >
            <span className="text-lg font-bold">
                {count}
                {suffix}
            </span>
            <p className="text-sm text-gray-600">{label}</p>
        </div>
    );
}