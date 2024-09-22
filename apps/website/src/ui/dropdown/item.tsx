import { MenuItem } from "@mui/material"
import { ReactNode } from "react"

interface Props {
  children: ReactNode
  onClick(): void
}
function DropdownMenuItem(props: Props) {
  return <MenuItem onClick={props?.onClick} className="text-[16px] font-medium px-[10px] py-[14px] hover:bg-[#D8E9E4] w-full">
    {props?.children}
  </MenuItem>
}

export default DropdownMenuItem