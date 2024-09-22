'use client'

import Link from "next/link";
import { AvartarIcon, EditPostIcon, MessageIcon, TrashIcon } from "../icons";
import { useState } from "react";
import { Post } from "@/app/utils/types";
import DeleteActionDialog from "../dialog/delete-action";

interface BaseProps {
  owner: { image_url: string; username: string; }
  post: Post
  className?: string | undefined
}

type Props = ({ type: "Editable"; onEdit(post: Post): void; onDelete(post: Post): void } & BaseProps) | ({ type: 'Base'} & BaseProps)

function BlogListItem(props: Props) {
  const [deleteAction, setDeleteAction] = useState(false)

  return <Link href={`/blogs/${props?.post?.id}`}>
    <div className={props?.className ? `${props?.className} p-[20px] bg-white flex flex-col gap-2` : "p-[20px] bg-white flex flex-col gap-2"}>
      <div className="flex mb-[16px] items-center gap-[16px]">
        <span><AvartarIcon /></span>
        <span className="text-darkGrey font-medium">{props?.owner?.username}</span>
        {props?.type === 'Editable' && <div className="flex gap-[5px] ml-auto">
          <button onClick={(e) => {
            e.preventDefault()
            props?.onEdit(props?.post)
          }} className="p-[6px]">
            <EditPostIcon />
          </button>
          <button onClick={(e) => {
            e.preventDefault()
            setDeleteAction(true)
          }} className="p-[6px]">
            <TrashIcon />
          </button>
        </div>}
      </div>
      <div className="mb-[16px]">
        <button className="rounded-[16px] px-[8px] py-[4px] bg-[#F3F3F3] text-[#4A4A4A]">
          {props?.post?.category?.text}
        </button>
      </div>
      <div>
        <span className="font-semibold text-[16px]">
          {props?.post?.title}
        </span>
        <p className="text-[12px] mt-2">
          {props?.post?.description}
        </p>
      </div>
      <div className="flex gap-[5px] text-darkGrey">
        <MessageIcon />
        <span className="text-[12px]">{`${props?.post?.comments}`} Comment</span>
      </div>
    </div>
    {props?.type === 'Editable' && <DeleteActionDialog 
      onClose={() => {
        setDeleteAction(false);
      }}
      onDelete={() => {
        props?.onDelete(props?.post)
        setDeleteAction(false)
      }} open={deleteAction}    
      />}
  </Link>
}

export default BlogListItem