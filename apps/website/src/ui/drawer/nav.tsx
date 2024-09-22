'use client'

import { ReactElement, useState } from "react"
import Drawer from "@mui/material/Drawer"
import { Hamburger } from "../icons";
import NavItem from "../nav/item";

interface Props {
  navItems: { href: string; icon: ReactElement; text: string }[]
}

function NavDrawer(props: Props) {
  const [isOpen, setOpen] = useState(false)
  const onClose = () => {
    setOpen(false)
  }

  return ( 
  <>
    <button onClick={() => {
      setOpen(true)
    }}>
      <Hamburger />
    </button>
    <Drawer open={isOpen} onClose={onClose} anchor="right" PaperProps={{
      className: 'w-[80vw] bg-darkGreen rounded-tl-[12px] rounded-bl-[12px]'
    }}>
    <aside className="pt-[32px] pl-[32px]">
      <button className="py-[32px] px-4" onClick={onClose}>
        <svg className="w-[23px] h-[24px]" width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.10645 7.48804L17.1064 7.48804M17.1064 7.48804L11.1064 1.48804M17.1064 7.48804L11.1064 13.488" stroke="#D8E9E4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <ul>
        {props?.navItems?.map((item) => {
          return <li key={item.href}>
            <NavItem href={item.href} icon={item.icon} text={item.text} className="flex p-4 text-white items-center gap-4" />
          </li>
        })}
      </ul>
    </aside>
    </Drawer>
  </>
  )
}

export default NavDrawer