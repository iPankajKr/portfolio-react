import Intro from "./Intro"
import NavList from "./NavList"
import Social from "../footer/Socials"

const Main = () => {
  return (
    <div className="static flex flex-col justify-between w-full p-[24px] sm:p-[32px] md:max-w-[496px] md:fixed md:h-screen lg:py-[88px] lg:pl-[88px] md:pr-[72px] lg:pr-0">
        <div className="flex flex-col">
            <Intro />
            <NavList />
        </div>
        <Social />
    </div>
  )
}

export default Main