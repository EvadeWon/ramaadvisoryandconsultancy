"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, forwardRef } from "react";

interface NavLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
    className?: string;
    activeClassName?: string;
    pendingClassName?: string;
    href: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
    ({ className, activeClassName, pendingClassName, href, children, ...props }, ref) => {
        const pathname = usePathname();
        const isActive = pathname === href || pathname.startsWith(href + "/");

        return (
            <Link
                ref={ref}
                href={href}
                className={cn(className, isActive && activeClassName)}
                {...props}
            >
                {children}
            </Link>
        );
    }
);

NavLink.displayName = "NavLink";

export { NavLink };
