import { AvartarIcon } from "../../../../ui/icons"

function PostComment() {
  return <div className="flex flex-col gap-[8px]">
    <div className="flex items-center gap-[8px]">
      <span><AvartarIcon /></span>
      <span className="font-medium text-[14px]">A</span>
      <span className="text-[12px] text-[#939494]">5mo. ago</span>
    </div>
    <p className="pl-[48px] text-[12px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolore cumque voluptatibus optio, quod eius facilis quos atque voluptatem. Nihil libero maxime mollitia quibusdam, alias recusandae assumenda culpa natus porro quas, aliquid rerum velit, modi quo reprehenderit iure harum laudantium consequatur vitae impedit esse inventore minus. Officiis voluptatum totam est.</p>
  </div>
}

export default PostComment