'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement } from "react";

function NavItem(props: { href: string; icon: ReactElement; text: string; className: string }) {
  const pathname = usePathname()
  const isActive = pathname === props?.href
  return <Link href={props?.href}>
    <div className={isActive ? `${props?.className} font-extrabold` : props?.className}>
      {props?.icon}
      {props?.text}
    </div>
  </Link>
}

export default NavItem