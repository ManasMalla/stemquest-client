import Image from "next/image";
import Landing from "./components/landing";
import TheProblem from "./components/the-problem";
import RightArrow from "./components/right_arrow";

export default function Home() {
  return (
    <main className="flexa min-h-screen flex-col justify-between overflow-x-hidden">
      <div className="flex min-h-screen flex-col justify-between">
        <div className="flex justify-end md:px-24 items-center md:h-screen sky-background">
          <div className="relative h-screen w-full md:w-[unset] md:h-[85vh] md:aspect-[1/2] md:border-[10px] md:border-white md:rounded-[2.5rem] overflow-hidden z-10">
            <Landing className="w-full h-full" />
            <div className="absolute top-0 w-full h-8 hidden md:flex">
              <div className="w-1/2 bg-white h-full mx-auto rounded-b-xl" />
            </div>
          </div>
          <img
            src="/stemquest-logo.png"
            className="absolute top-0 left-0 w-1/4 m-20"
          />
          <div className="absolute w-56 h-56 -top-2 -right-4 hidden md:flex">
            <img
              src="/madeinindia.png"
              className="absolute top-0 z-20  rotate-[22deg]"
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
        <div className="w-full h-full absolute z-[5]">
          <img
            src="/trees-full.svg"
            className="h-[56%] absolute bottom-[18%] right-10"
            alt=""
          />
        </div>
      </div>
      <div className="relative bg-[#A8E25E] -translate-y-2 z-30">
        <img src="/mixer-1.svg" className="w-1/2 lg:w-1/5 ml-auto" alt="" />
      </div>
      <div className="pt-16 pb-4 px-8 lg:px-24 flex flex-col relative">
        <div className="h-1 w-8 bg-black rounded-full" />
        <p className="mt-3 text-xl uppercase opacity-20 font-bold">the what?</p>
        <h3 className="text-3xl mt-4 font-semibold uppercase">
          Science. Technology.
        </h3>
        <h3 className="text-3xl uppercase">Engineering. Maths.</h3>
        <p className="mt-6 opacity-70">
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
        <div className="grid grid-cols-1 gap-4 py-8">
          <div className="bg-amber-200 p-4 rounded-2xl">
            <img src="marketing.svg" className="w-10 h-10" />
            <p className="text-lg font-medium mt-3">Storytelling</p>
            <p className="text-sm mt-1 opacity-60">
              Explore a gadget-free comic character franchise blending education
              and fun seamlessly.
            </p>
          </div>
          <div className="bg-amber-300 p-4 rounded-2xl">
            <img src="Camera.svg" className="w-10 h-10" />
            <p className="text-lg font-medium mt-3">Visualization</p>
            <p className="text-sm mt-1 opacity-60">
              Offer visual-tactile STEM learning for practical understanding.
            </p>
          </div>
          <div className="bg-amber-500 p-4 rounded-2xl">
            <img src="Search.svg" className="w-10 h-10 p-1" />
            <p className="text-lg font-medium mt-3">Experimentation</p>
            <p className="text-sm mt-1 opacity-60">
              A VR playground with AI, powered by Generative AI, answers to all
              your curiosity.
            </p>
          </div>
          <div className="bg-amber-600 p-4 rounded-2xl">
            <img src="pen-tool.svg" className="w-10 h-10" />
            <p className="text-lg font-medium mt-3">Self-Assessment</p>
            <p className="text-sm mt-1 opacity-60">
              Boost learning with error-guided assessments for confidence and
              critical thinking.
            </p>
          </div>
        </div>
      </div>
      <div className="relative bg-white -scale-x-100 z-30">
        <img src="/mixer-5.svg" className="lg:w-1/3 ml-auto mr-auto" alt="" />
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
