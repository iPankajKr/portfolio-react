import { AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
import { MdCallMade } from "react-icons/md";

function App() {
  return (
    <div className="relative flex flex-col w-screen mx-auto font-sans text-base max-w-[1440px] md:flex-row">
      {/* Left Column */}
      <div className="static flex flex-col justify-between w-full p-[24px] sm:p-[32px] md:max-w-[496px] md:fixed md:h-screen lg:py-[88px] lg:pl-[88px] md:pr-[72px] lg:pr-0">
        <div className="flex flex-col">
          <div>
            <h1 className="text-4xl font-bold leading-tight lg:text-6xl lg:leading-none title-color">Pankaj Kumar</h1>
            <h2 className="mt-[16px] sm:text-2xl text-[20px] font-semibold leading-tight title-color">Front End Engineer</h2>
            <div className="leading-loose">
              <p className="mt-[32px]">
                I mostly do front-end development, I was a WordPress nerd, but recently I started working or React and fell in love with it. 
                I can't shut up about the importance of good user experience and clean design. 
                Apart from programming, I love travelling and doing my work from anywhere I want.
              </p>
            </div>
          </div>
          {/* Navigation */}
          <nav className="hidden text-sm font-bold uppercase text-widest mt-[72px] md:block">
            <ul className="flex flex-row md:flex-col md:-my-[16px]">
              <li className="md:my-[16px]">
                <a 
                  className="inline-flex items-center hover:text-white transition group text-color"
                  href="#projects"
                >
                  <span className="text-xs tracking-wide">01</span>
                  <span className="inline-block h-px mx-[16px] -mt-px group-hover:w-[48px] group-hover:bg-white transition w-[24px] bg-gray"></span>
                  <span className="text-xs tracking-widest uppercase">Projects</span>
                </a>
              </li>
              <li className="md:my-[16px]">
                <a
                  className="inline-flex items-center hover:text-white transition group text-color"
                  href="#experiences"
                >
                  <span className="text-xs tracking-wide">02</span>
                  <span className="inline-block h-px mx-[16px] -mt-px group-hover:w-[48px] group-hover:bg-white transition w-[24px] bg-gray"></span>
                  <span className="text-xs tracking-widest uppercase">Experiences</span>
                </a>
              </li>
              <li className="md:my-[16px]">
                <a
                  className="inline-flex items-center hover:text-white transition group text-color"
                  href="#articles"
                >
                  <span className="text-xs tracking-wide">03</span>
                  <span className="inline-block h-px mx-[16px] -mt-px group-hover:w-[48px] group-hover:bg-white transition w-[24px] bg-gray"></span>
                  <span className="text-xs tracking-widest uppercase">Articles</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Left Footer */}
        <div className="flex items-center w-full mt-[32px] md:mt-[72px]">
          <div className="w-[48px] h-[48px] mr-[35px] rounded-full bg-gray relative">
            <span className="box-border block overflow-hidden bg-none relative border-0 m-0 p-0">
            </span>
            <img 
              alt=""
              src="/profile-pic.jpg" 
              className="rounded-full absolute top-0 left-0 bottom-0 right-0 box-border" 
            />
          </div>
          <ul className="flex -mx-[16px] text-white">
            <li className="mx-[16px] text-white">
              <a href="https://www.instagram.com/i.pankajkr/" rel="noopener noreferrer" target="_blank">
                <AiOutlineInstagram className="inline"/>
                <span className="ml-2">Instagram</span>
                <span className="w-[16px] p-[2px] ml-2">
                  <MdCallMade className="inline"/>
                </span>
              </a>
            </li>
            <li className="mx-[16px] text-white">
              <a href="https://github.com/iPankajKr" rel="noopener noreferrer" target="_blank">
                <AiOutlineGithub className="inline" />
                <span className="text-sm ml-2">GitHub</span>
                <span className="w-[16px] p-[2px] ml-2">
                  <MdCallMade className="inline" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>  
    </div>
  );
}

export default App;
