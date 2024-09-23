'use client'

import { Dialog, DialogContent, DialogTitle, Menu } from "@mui/material"
import { useRef, useState } from "react"
import { CloseIcon } from "../icons"
import DropdownMenuItem from "../dropdown/item"
import { categories } from "@/app/utils/category"
import type { Category, Post } from "@/app/utils/types"

interface Props {
  open: boolean
  onClose(): void
  onCancel(): void

  value: Pick<Post, 'id' | 'category' | 'description' | 'title'> | null
  onSelectCategory(value: { value: Category; text: string }): void
  onTitleChange(value: string): void
  onDescChange(value: string): void
}
function EditPostDialog(props: Props) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const [categoryOpen, setCateoryOpen] = useState(false)

  const onSelectCategory = (value: { value: Category; text: string }) => {
    props?.onSelectCategory(value)
  }

  return <Dialog open={props?.open} onClose={props?.onClose} PaperProps={{
      className: 'w-[685px] m-[16px]'
    }}>
      <DialogTitle className="flex items-center justify-between mb-[16px]">
        <span className="text-[28px] font-semibold">Edit Post</span>
        <button onClick={props?.onClose}>
          <CloseIcon />
        </button>
      </DialogTitle>
      <DialogContent>
      <div className="flex flex-col gap-[16px]">
        <button className="flex border text-success border-success rounded-[8px] items-center justify-center w-full lg:w-fit px-[8px] py-[14px] flex gap-[5px] font-semibold" onClick={() => setCateoryOpen(true)} ref={buttonRef}>
          <span>{props?.value?.category ? props?.value?.category?.text : 'Choose a community'}</span>
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.56738 8.11865L10.5674 13.1187L15.5674 8.11865" stroke="#49A569" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <Menu open={categoryOpen} onClose={() => setCateoryOpen(false)} anchorEl={buttonRef.current}>
          {categories?.map((item) => {
            return <DropdownMenuItem key={item.value} onClick={() => onSelectCategory(item)}>
              {item.value}
            </DropdownMenuItem>
          })}    
        </Menu>
        <input onChange={(e) => props?.onTitleChange(e.target.value)} type="text" placeholder="Title" className="px-[10px] py-[14px] border border-lightGrey rounded-[8px]" />
        <textarea onChange={(e) => props?.onDescChange(e.target.value)} rows={7} placeholder="What’s on your mind..." className="px-[10px] py-[14px] border border-lightGrey rounded-[8px] resize-none"></textarea>
      </div>
      </DialogContent>
      <div className="flex flex-col gap-[16px] px-[24px] py-[16px] items-center lg:flex-row lg:justify-end">
        <button onClick={props?.onCancel} className="text-success border w-full border-success rounded-[8px] px-[10px] py-[16px] lg:w-[105px]">
          Cancel
        </button>
        <button className="text-white border border-success w-full bg-success rounded-[8px] lg:w-[105px] px-[10px] py-[16px]">
          Post
        </button>
      </div>
    </Dialog>
}

export default EditPostDialog