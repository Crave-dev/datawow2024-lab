import Image from "next/image"

function SignInPage() {
  return <main className="bg-darkGreen min-h-[100dvh] grid place-items-center lg:grid-cols-2 grid-rows-signinGridRowSm grid-flow-row lg:grid-rows-none">
    <div className="bg-lightGreen w-full h-full grid place-content-center rounded-bl-[36px] rounded-br-[36px] lg:rounded-br-none lg:rounded-tl-[36px] lg:col-start-2">
      <Image src={"/login_banner.png"} alt={"banner"} width={200} height={200} className="lg:w-[300px] lg:h-[230px]" />
      <span className="text-white text-center text-[24px] italic">a Board</span>
    </div>
    <div className="lg:col-start-1 lg:row-start-1">
      <form className="flex flex-col w-[384px] max-w-[80vw]">
        <legend className="text-white font-semibold text-[28px] mb-[42px]">Sign in</legend>
        <label htmlFor="username" className="mb-[24px]">
          <input type="text" placeholder="Username" className="px-[10px] py-[12px] rounded-[8px] w-full"/>
        </label>
        <button type="submit" className="text-white bg-success px-[10px] py-[12px] rounded-[8px] font-semibold">Sign in</button>
      </form>
    </div>
  </main>
}

export default SignInPage