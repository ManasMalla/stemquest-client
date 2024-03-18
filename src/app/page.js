import Image from "next/image";
import Landing from "./components/landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between overflow-x-hidden">
      <div className="flex min-h-screen flex-col justify-between">
        <div className="flex justify-end md:px-24 items-center md:h-screen sky-background">
          <div className="relative h-screen w-full md:w-[unset] md:h-[85vh] md:aspect-[1/2] md:border-[10px] md:border-white md:rounded-[2.5rem] overflow-hidden z-10">
            <Landing className="w-full h-full" />
            <div className="absolute top-0 w-full h-8 hidden md:flex">
              <div className="w-1/2 bg-white h-full mx-auto rounded-b-xl" />
            </div>
          </div>
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
      <div className="pt-16 pb-4 px-8 flex flex-col relative">
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
          <svg
            class="w-6 h-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.34106 6.02155L18 6.00006L17.9796 15.6602"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M18 6.00153L6.00037 18"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
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
      <div className="py-16 bg-blue-500 text-white px-8 flex flex-col">
        <div className="h-1 w-8 bg-white rounded-full" />
        <p className="mt-3 text-xl uppercase opacity-20 font-bold">
          the problem?
        </p>
        <h3 className="text-3xl mt-4 font-semibold uppercase">
          Learning is not fun,
        </h3>
        <h3 className="text-3xl uppercase">Knowledge is.</h3>
        <p className="mt-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut
          ultrices justo. Duis eu sagittis sapien. Phasellus iaculis vitae
          lectus ac mollis. Nullam id nisi eget mauris dictum mattis. Vivamus
          aliquam aliquam enim a venenatis. Sed venenatis ullamcorper ipsum, at
          tempor metus finibus nec. Suspendisse vel dapibus urna.
        </p>
      </div>
    </main>
  );
}
