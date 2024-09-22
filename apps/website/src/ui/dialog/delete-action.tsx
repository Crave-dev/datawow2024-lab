'use client'

import { Dialog, DialogContent, DialogTitle } from "@mui/material"

interface Props {
  open: boolean
  onClose(): void

  onDelete(): void
}
function DeleteActionDialog(props: Props) {
  return <Dialog open={props?.open} onClose={(e, reason) => {
      if (reason === 'backdropClick') e?.preventDefault?.()
      props?.onClose()
    }}>
    <DialogTitle className="mb-[16px]">
      <span className="block text-[20px] font-semibold text-center">
        Edit PostPlease confirm if you wish to delete the post
      </span>
    </DialogTitle>
    <DialogContent>
      <span className="block text-[#5B5B5B] text-center">Are you sure you want to delete the post? Once deleted, it cannot be recovered.</span>
    </DialogContent>
    <div className="flex flex-col gap-[16px] px-[24px] py-[16px] items-center lg:flex-row lg:justify-end">
      <button onClick={(e) => {
        e.preventDefault()
        props?.onDelete()
      }} className="text-white bg-[#F23536] border w-full border-[#F23536] rounded-[8px] px-[10px] py-[16px] lg:w-[105px]">
        Delete
      </button>
      <button onClick={(e) => {
        e.preventDefault()
        props?.onClose()
      }} className="border border-[#DADADA] w-full bg-white rounded-[8px] lg:w-[105px] px-[10px] py-[16px]">
        Cancel
      </button>
    </div>
  </Dialog>
}

export default DeleteActionDialog