import { MessageIcon } from "@/ui/icons"
import BackButton from "./_component/back-button"
import PostComment from "./_component/comment"
import CommentAction from "./_component/comment-action"

function BlogDetailPage(props: { params: { id: string }}) {
  return <div className="flex-1 bg-white px-[16px] lg:pl-[128px] lg:px[32px] pt-[32px]">
    <BackButton />
    <section className="pt-[36px] flex flex-col gap-[16px]">
      <div className="flex gap-[5px] items-center">
        <span>
          <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.339844" y="0.406738" width="40" height="40" rx="20" fill="#F3F3F3"/>
            <path d="M28.3398 29.4067V27.4067C28.3398 26.3459 27.9184 25.3285 27.1683 24.5783C26.4181 23.8282 25.4007 23.4067 24.3398 23.4067H16.3398C15.279 23.4067 14.2616 23.8282 13.5114 24.5783C12.7613 25.3285 12.3398 26.3459 12.3398 27.4067V29.4067M24.3398 15.4067C24.3398 17.6159 22.549 19.4067 20.3398 19.4067C18.1307 19.4067 16.3398 17.6159 16.3398 15.4067C16.3398 13.1976 18.1307 11.4067 20.3398 11.4067C22.549 11.4067 24.3398 13.1976 24.3398 15.4067Z" stroke="#979797" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        <span className="font-medium">Zach</span>
        <span className="text-[12px] text-[#939494]">5mo. ago</span>
      </div>
      <span className="w-fit bg-[#F3F3F3] text-[12px] rounded-[16px] px-[8px] py-[4px]">
        History
      </span>
      <h1 className="font-semibold text-[28px]">Title</h1>
      <p className="max-w-full text-[12px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem omnis a eveniet harum deleniti, id ullam quod ipsam odit consectetur labore exercitationem dolore eum nesciunt? Earum inventore voluptate quae commodi quis? Libero officia commodi ipsum totam cum, amet harum iure quia impedit eaque asperiores? Perspiciatis tempora molestiae quod beatae ex cumque vero repellat itaque quasi, rem tenetur provident quisquam doloribus corrupti laboriosam, facere fugiat praesentium error. Nemo, nulla quidem! Dicta aut, dolorum facere impedit architecto voluptatibus quae reprehenderit ut dolores, labore provident, voluptas atque praesentium iusto officia earum iure deserunt! Ratione magni ad dolores facilis reprehenderit eligendi et blanditiis deleniti?</p>
      <div className="flex gap-[5px] text-darkGrey">
        <MessageIcon />
        <span className="text-[12px]">{`${5}`} Comment</span>
      </div>
    </section>
    <section>
      <CommentAction />
    </section>
    <section className="mt-[36px]">
      <div className="flex flex-col gap-[16px]">
        {[1, 2]?.map((item) => {
          return <PostComment key={item} />
        })}
      </div>
    </section>
  </div>
}

export default BlogDetailPage