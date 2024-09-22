'use client'

import { Menu } from "@mui/material"
import { useMemo, useRef, useState } from "react"
import { ArrowDownIcon } from "../icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import DropdownMenuItem from "./item";

interface Props<T> {
  items: T[]
}
function DropdownMenuNav<T extends { value: string; text: string }>(props: Props<T>) {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const router = useRouter()
  const pathname = usePathname()

  const currentValue = useMemo(() => {
    return props?.items?.find(item => item.value === category)
  }, [category, props?.items])

  const onClose = () => {
    setOpen(false)
  }

  const onChange = (value: T) => {
    const params = new URLSearchParams(searchParams)
    params.set('category', value.value)
    router.replace(pathname + `?${params.toString()}`)    
  }

  return (<>
    <button className="flex items-center justify-center w-full px-[8px] py-[14px] gap-[5px] font-semibold" onClick={() => setOpen(true)} ref={buttonRef}>
      <span>{currentValue ? currentValue?.text: 'Community'}</span>
      <ArrowDownIcon />
    </button>
    <Menu open={open} onClose={onClose} anchorEl={buttonRef.current}>
      {props?.items?.map((item) => {
        return <DropdownMenuItem key={item.value} onClick={() => onChange(item)}>
          {item.text}
        </DropdownMenuItem>
      })}    
    </Menu>
  </>)
}

export default DropdownMenuNav