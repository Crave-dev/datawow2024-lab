import { ReactNode } from "react"
import NavItem from "@/ui/nav/item"
import Navbar from "@/ui/nav/bar"
import { BlogIcon, BlogOutlineIcon, HomeIcon, HomeOutlineIcon } from "@/ui/icons"


function Layout(props: { children: ReactNode }) {
  return <>
    <header>
      <Navbar session={null} navItems={[
        { href: '/', icon: <HomeIcon />, text: 'Home'},
        { href: '/ourblogs', icon: <BlogIcon />, text: 'Our Blogs'}
      ]} />
    </header>
    <main className="flex min-h-[calc(100dvh_-_60px)] bg-bgp">
      <aside className="hidden lg:block basis-[360px] shrink flex-grow-0 pt-[32px]">
      <ul>
        <li>
          <NavItem href={"/"} icon={<HomeOutlineIcon />} text={"Home"} className="flex p-4 text-darkGreen items-center gap-4" />
        </li>
        <li>
          <NavItem href={"/ourblogs"} icon={<BlogOutlineIcon />} text={"Our Blog"} className="flex p-4 text-darkGreen items-center gap-4"/>
        </li>
      </ul>
      </aside>
      {props?.children}
    </main>
    
  </>
}

export default Layout