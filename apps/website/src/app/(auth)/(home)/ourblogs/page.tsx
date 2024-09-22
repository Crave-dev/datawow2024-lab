import { SearchIcon } from "@/ui/icons"
import PostsAndEdit from "./_components/posts"
import DropdownMenuNav from "@/ui/dropdown/nav-menu"
import CreatePostDialog from "@/ui/dialog/create-blog"
import { categories } from "@/app/utils/category"

function OurBlogPage() {
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
      <PostsAndEdit />
    </section>
  </div>
  <div className="hidden lg:block basis-[360px] shrink flex-grow-0"></div>
  </>
  )
}

export default OurBlogPage