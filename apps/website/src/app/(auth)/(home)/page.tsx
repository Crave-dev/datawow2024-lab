import { categories } from "@/app/utils/category";
import BlogListItem from "@/ui/blog/list-item";
import CreatePostDialog from "@/ui/dialog/create-blog";
import DropdownMenuNav from "@/ui/dropdown/nav-menu";
import { SearchIcon } from "@/ui/icons";


export default function Home() {
  return (
  <>
  <div className="flex-1 basis-[600px] lg:min-w-[600px] px-[16px] lg:px[32px] pt-[32px]">
    <section className="flex gap-[16px] items-center mb-[36px]">
      <search className="border border-white rounded-[8px] px-[10px] py-[14px] bg-transparent flex-1">
        <form >
          <label htmlFor="search" className="flex gap-2">
            <span>
              <SearchIcon />
            </span>
            <input type="search" name="search" placeholder="Search" className="bg-transparent focus:outline-0 w-full" />
          </label>
        </form>
      </search>
      <div className="basis-[130px]">
        <DropdownMenuNav items={categories} />
      </div>
      <div className="basis-[105px]">
        <CreatePostDialog />
      </div>
    </section>
    <section>
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
            type='Base'
        />
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
            type="Base"
        />
      </div>
    </section>
  </div>
  <div className="hidden lg:block basis-[360px] shrink flex-grow-0"></div>
  </>
  )
}
