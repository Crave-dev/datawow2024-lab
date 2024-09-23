'use client'

import { Dialog, DialogContent, DialogTitle, Menu } from "@mui/material"
import { useRef, useState } from "react"
import { CloseIcon } from "../icons"
import { categories } from "@/app/utils/category"
import DropdownMenuItem from "../dropdown/item"

function CreatePostDialog() {
  const [open, setOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const [categoryOpen, setCateoryOpen] = useState(false)
  const [state, setState] = useState<{
    category: { value: string; text: string } | null,
    title: string
    description: string
  }>({
    category: null,
    title: '',
    description: ''
  })

  const onClose = () => {
    setOpen(false)
    
  }

  const onCancel = () => {
    onClose()
    setState({
      category: null,
      title: '',
      description: ''
    })
  }

  const onSelectCategory = (value: { value: string; text: string }) => {
    setState((prev) => ({...prev, category: value }) )
  }

  return <>
    <button onClick={() => setOpen(true)} className="bg-success rounded-[8px] w-[105px] font-semibold text-white px-[10px] py-[16px]">
      Create +
    </button>
    <Dialog open={open} onClose={onClose} PaperProps={{
      className: 'w-[685px] m-[16px]'
    }}>
      <DialogTitle className="flex items-center justify-between mb-[16px]">
        <span className="text-[28px] font-semibold">Create Post</span>
        <button onClick={onClose}>
          <CloseIcon />
        </button>
      </DialogTitle>
      <DialogContent>
      <div className="flex flex-col gap-[16px]">
        <button className="flex border text-success border-success rounded-[8px] items-center justify-center w-full lg:w-fit px-[8px] py-[14px] gap-[5px] font-semibold" onClick={() => setCateoryOpen(true)} ref={buttonRef}>
          <span>{state?.category ? state?.category?.text : 'Choose a community'}</span>
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
        <input type="text" value={state?.title} onChange={(e) => {
          setState((prev) => ({ ...prev, title: e.target.value }))
        }} placeholder="Title" className="px-[10px] py-[14px] border border-lightGrey rounded-[8px]" />
        <textarea rows={7} value={state?.description} onChange={(e) => {
          setState((prev) => ({ ...prev, description: e.target.value }))
        }} placeholder="What’s on your mind..." className="px-[10px] py-[14px] border border-lightGrey rounded-[8px] resize-none"></textarea>
      </div>
      </DialogContent>
      <div className="flex flex-col gap-[16px] px-[24px] py-[16px] items-center lg:flex-row lg:justify-end">
        <button onClick={onCancel} className="text-success border w-full border-success rounded-[8px] px-[10px] py-[16px] lg:w-[105px]">
          Cancel
        </button>
        <button className="text-white border border-success w-full bg-success rounded-[8px] lg:w-[105px] px-[10px] py-[16px]">
          Post
        </button>
      </div>
    </Dialog>
  </>
}

export default CreatePostDialog