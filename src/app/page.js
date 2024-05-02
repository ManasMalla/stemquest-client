import Image from "next/image";
import Landing from "./components/landing";
import TheProblem from "./components/the-problem";
import RightArrow from "./components/right_arrow";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flexa min-h-screen flex-col justify-between overflow-x-hidden">
      <div className="flex min-h-screen flex-col justify-between ">
        <div className="flex justify-end md:px-24 items-center md:h-screen sky-background ">
          <div className="relative h-screen w-full md:w-[unset] md:h-[85vh] md:aspect-[1/2] md:border-[10px] md:border-white md:rounded-[2.5rem] overflow-hidden z-10">
            <Landing className="w-full h-full" />
            <div className="absolute top-0 w-full h-8 hidden md:flex">
              <div className="w-1/2 bg-white h-full mx-auto rounded-b-xl" />
            </div>
          </div>

          <div className="absolute w-56 h-56 -top-2 -right-4 hidden md:flex overflow-clip">
            <img
              src="/madeinindia.png"
              className="absolute top-0 z-20  rotate-[22deg] "
              alt="Made in Bharat"
            />
            <img
              src="/madeinindia2.png"
              className="absolute mix-blend-multiply top-0 z-10 opacity-50 rotate-[22deg]"
              alt=""
            />
          </div>
        </div>
        <div className="absolute bottom-0 bg-[#A8E25E] h-[27.28%] w-full"></div>
        <img
          src="/stemquest-logo.png"
          className="absolute top-0 left-0 w-[8.5%] m-8 hidden lg:flex z-10"
        />
        <div className="w-full h-full absolute z-[5]">
          <img src="/desktop-background.png" className="" alt="" />

          <div className="flex flex-col absolute h-screen items-start justify-center lg:px-32 px-8 py-16 z-20 -translate-y-8 translate-x-16 top-12 left-32">
            <div className="flex items-center justify-between grow">
              <div className="sm:w-5/12">
                <h2 className="font-semibold text-4xl py-1 text-[#1E5B85]">
                  Learn STEM
                  <br />
                  in Bright World
                </h2>
                <h2 className="medium text-base text-[#1E5B85] py-1">
                  Discover, learn, and create with our interactive comprehensive
                  engaging STEM-based educational kits .{" "}
                </h2>
              </div>
            </div>
            <div className="flex absolute items-center bottom-16 sm:left-40 sm:bottom-24 border-dashed rounded-lg border-white border-2 px-3 py-3">
              <p className="bold absolute top-0 left-0 text-white text-base -mt-3 -ml-1 pr-2 bg-[#A8E25E]">
                Know More:
              </p>
              <Link href="#the-what">
                {" "}
                <button className="medium bg-[#78A3F3] hover:bg-[#6b95e3] text-white px-2 py-1 mx-2 rounded-md z-20 duration-200">
                  as student
                </button>
              </Link>
              <Link href="#the-what">
                <button className="medium bg-[#BF8FFD] hover:bg-[#b081ed] text-white px-2 py-1 mx-2 rounded-md z-20 duration-200">
                  as parent
                </button>
              </Link>
              <Link href="#the-what">
                <button className="medium bg-[#F9A587e7] hover:bg-[#ea8f6d] text-white px-2 py-1 mx-2 rounded-md z-20 duration-200">
                  as educators
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative bg-[#A8E25E] -translate-y-2 z-30">
        <img src="/mixer-1.svg" className="w-1/2 lg:w-1/5 ml-auto" alt="" />
      </div>
      <div
        className="pt-16 pb-4 px-8 lg:px-24 flex flex-col relative"
        id="the-what"
      >
        <div className="h-1 w-8 bg-black rounded-full" />
        <p className="mt-3 text-xl uppercase opacity-20 font-bold">the what?</p>
        <h3 className="text-3xl mt-4 font-semibold uppercase">
          Science. Technology.
        </h3>
        <h3 className="text-3xl uppercase">Engineering. Maths.</h3>
        <p className="mt-6 opacity-70 lg:w-[50ch]">
          Incorporates experimental interactive hands-on learning through
          real-world applications, igniting creativity and critical thinking,
          and strengthening their foundation.
        </p>
        <div className="w-16 h-16 bg-black rounded-full mt-8 flex items-center justify-center">
          <RightArrow />
        </div>
        {/* <div className="h-8"></div> */}
        <img
          src="/chitra-science.svg"
          className="w-48 absolute -bottom-48 -scale-x-100 -rotate-[22deg] -right-24"
          alt="Chitra, the deer holding a microscope signifying experimentation and mystery!"
        />
      </div>
      <div className="relative -scale-x-100 z-30">
        <img src="/mixer-2.svg" className="w-1/2 lg:w-1/5 ml-auto" alt="" />
      </div>
      <TheProblem />
      <div className="relative bg-blue-500 scale-x-100 z-30">
        <img src="/mixer-3.svg" className="w-1/2 lg:w-1/5 ml-auto" alt="" />
      </div>
      <div className="bg-[#F1F8FE] py-16 px-8 lg:px-24 flex flex-col">
        <div className="h-1 w-8 bg-amber-400 rounded-full" />
        <p className="mt-3 text-xl uppercase opacity-20 font-bold">the why?</p>
        <h3 className="text-3xl mt-4 uppercase">
          Learning today
          <br />
          <span className="opacity-50 line-through decoration-black/50 decoration-[2px]">
            isn&apos;t
          </span>{" "}
          interesting,
        </h3>
        <h3 className="text-3xl uppercase font-semibold ">Knowledge is.</h3>
        <p className="mt-8 ">
          Traditional education falls short in engaging young minds with STEM
          subjects, grasp abstract ideas, lacking immersive and comprehensive
          experiences, hindering effective holistic learning and inhibits their
          ability to apply knowledge in real-world scenarios.
        </p>
      </div>
      <div className="relative bg-[#F1F8FE] -scale-x-100 z-30">
        <img src="/mixer-4.svg" className="w-1/2 lg:w-1/5 ml-auto" alt="" />
      </div>
      <div className="bg-amber-400 py-16 px-8 lg:px-24 flex flex-col">
        <div className="h-1 w-8 bg-white rounded-full" />
        <p className="mt-3 text-xl uppercase opacity-20 font-bold">
          the solution
        </p>
        <h3 className="text-3xl mt-4 uppercase">Engage. Educate.</h3>
        <h3 className="text-3xl uppercase font-semibold ">Empower.</h3>
        <p className="mt-8 opacity-70">
          We bring the joy of learning to children to create a unique
          comprehensive learning experience that keeps children excited,
          entertained, and educated while fostering creativity and parent child
          interaction
        </p>
        <div className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-2">
          <div className="bg-amber-200 p-4 lg:p-8 rounded-2xl">
            <img src="marketing.svg" className="w-10 h-10" />
            <p className="text-lg font-medium mt-3">Storytelling</p>
            <p className="text-sm mt-1 opacity-60 lg:w-[42ch]">
              Explore a gadget-free comic character franchise blending education
              and fun seamlessly.
            </p>
          </div>
          <div className="bg-amber-300 p-4 lg:p-8 rounded-2xl">
            <img src="Camera.svg" className="w-10 h-10" />
            <p className="text-lg font-medium mt-3">Visualization</p>
            <p className="text-sm mt-1 opacity-60 lg:w-[42ch]">
              Offer visual-tactile STEM learning for practical understanding.
            </p>
          </div>
          <div className="bg-amber-500 p-4 lg:p-8 rounded-2xl">
            <img src="Search.svg" className="w-10 h-10 p-1" />
            <p className="text-lg font-medium mt-3">Experimentation</p>
            <p className="text-sm mt-1 opacity-60 lg:w-[42ch]">
              A VR playground with AI, powered by Generative AI, answers to all
              your curiosity.
            </p>
          </div>
          <div className="bg-amber-600 p-4 lg:p-8 rounded-2xl">
            <img src="pen-tool.svg" className="w-10 h-10" />
            <p className="text-lg font-medium mt-3">Self-Assessment</p>
            <p className="text-sm mt-1 opacity-60 lg:w-[42ch]">
              Boost learning with error-guided assessments for confidence and
              critical thinking.
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-white -scale-x-100 z-30">
        <img src="/mixer-5.svg" className="lg:w-1/3 ml-auto mr-auto" alt="" />
      </div>
      <div className="flex flex-col px-8 py-12 gap-y-4 items-center">
        <h3 className="text-2xl mb-4 font-medium">We are supported by</h3>
        <div className="grid grid-cols-2 gap-x-12 lg:gap-x-[unset] lg:flex mx-auto lg:space-x-12">
          <img
            src="https://vdc.gitam.edu/assets/img/red_vdc.png"
            className="h-12"
          />
          <img
            src="https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/358721195_764533292345098_8804877883054308439_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vraTAobJKdcQ7kNvgFjI-sv&_nc_ht=scontent-sin6-4.xx&oh=00_AfA9N7Vfq7fh3Zfp0ZsS2nWiVfaTNMYdTw8KEcTHRYpR_w&oe=6639DE0F&dl=1"
            className="h-16"
          />
          <img
            src="https://greenkogroup.com/images/new-logo.svg"
            className="h-12"
          />
          <img
            src="https://drishticps.iiti.ac.in/wp-content/uploads/2023/05/drishti_logo.png"
            className="h-12"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-[unset] lg:items-end px-8 py-12 gap-y-4 justify-between">
        <div>
          <ul className="flex gap-x-4">
            <li>
              <a href="">X</a>
            </li>
            <li>
              <a href="https://instagram.com/stemquest.in">Instagram</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/thestemquest">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-1">
          <a href="mailto:stemquest@theananta.in">stemquest@theananta.in</a>
          <p>
            © STEMQuest 2024.{" "}
            <span className="opacity-50">All Rights Reserved.</span>
          </p>
        </div>
      </div>
    </main>
  );
}
