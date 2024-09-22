import { ReactElement } from "react";
import Link from "next/link";
import NavDrawer from "../drawer/nav";

interface Props {
  session: { profilePic: string; username: string } | null
  navItems: { href: string; icon: ReactElement; text: string }[]
}

function Navbar(props: Props) {
  const isSession = Boolean(props?.session)
  return (
    <nav className="flex justify-between items-center h-[60px] px-[16px] lg:px-[32px] bg-darkGreen">
      <div className="text-white italic text-[20px]">
          a Board
      </div>
      {/* drawer */}
      <div className="lg:hidden p-[8px]">
        <NavDrawer navItems={props?.navItems} />
      </div>
      {/* sign in button */}
      {
        !isSession && 
        (<div className="hidden lg:block">
          <Link href='/signin' className="bg-success px-[16px] py-[10px] text-white rounded-[8px]">
            Sign In
          </Link>
        </div>)
      }
    </nav>
  )
}

export default Navbar