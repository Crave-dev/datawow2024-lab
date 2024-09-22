'use client'

import { useState } from "react";
import type { Post } from "../../../utils/types";
import { categories } from "../../../utils/category";
import EditPostDialog from "@/ui/dialog/edit-blog";
import BlogListItem from "@/ui/blog/list-item";

function PostsAndEdit() {
  const [open, setOpen] = useState(false)
  const [state, setState] = useState<Pick<Post, 'id' | 'category' | 'description' | 'title'> | null>(null)

  const onEdit = (post: Post) => {
    setOpen(true)
    setState({
      id: post.id,
      category: post.category,
      title: post.title,
      description: post.description
    })
  }

  const onDelete = (post: Post) => {
    console.log('delete ', post.id)
  }

  return <>
    <EditPostDialog 
      open={open} 
      onClose={() => setOpen(false)} 
      onCancel={() => {
        setState(null)
        setOpen(false)
      } } 
      value={state} 
      onSelectCategory={(value) => {
        setState((prev) => {
          if (!prev) return prev
          return {
            ...prev,
            category: value
          }
        })
      }}
      onTitleChange={(value) => {
        setState((prev) => {
          if (!prev) return prev
          return {
            ...prev,
            title: value
          }
        })
      }}
      onDescChange={(value) => {
        setState((prev) => {
          if (!prev) return prev
          return {
            ...prev,
            description: value
          }
        })
      }}
    />
    
    <div className="flex flex-col gap-[1px]">
        <BlogListItem 
            owner={{
              image_url: "",
              username: "me"
            }} 
            post={{
              id: 0,
              category: categories?.[0],
              title: "The Beginning of the End of the World",
              description: "The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.",
              comments: 43
            }}
            className="rounded-t-[8px]"
            type='Editable'
            onEdit={onEdit}
            onDelete={onDelete}
        />
        <BlogListItem 
            owner={{
              image_url: "",
              username: "me"
            }} 
            post={{
              id: 1,
              category: categories?.[0],
              title: "The Beginning of the End of the World",
              description: "The afterlife sitcom The Good Place comes to its culmination, the show’s two protagonists, Eleanor and Chidi, contemplate their future. Having lived thousands upon thousands of lifetimes together, and having experienced virtually everything this life has to offer, they are weary. It is time for it all to end. The show’s solution to this perpetual happiness-cum-weariness is extinction. When you have had enough, when you are utterly sated by love and joy and pleasure, you can walk through a passage to nothingness. And Chidi has had enough.",
              comments: 43
            }}
            type="Editable"
            onEdit={onEdit}
            onDelete={onDelete}
        />
      </div>
  </>
}

export default PostsAndEdit