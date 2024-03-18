import Image from "next/image";
import Landing from "./components/landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
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
            />
            <img
              src="/madeinindia2.png"
              className="absolute mix-blend-multiply top-0 z-10 opacity-50 rotate-[22deg]"
            />
          </div>
        </div>
        <div className="absolute bottom-0 bg-[#A8E25E] h-[27.28%] w-full"></div>
        <div className="w-full h-full absolute z-[5]">
          <img
            src="/trees-full.svg"
            className="h-[56%] absolute bottom-[18%] right-10"
          />
        </div>
      </div>
      <div className="relative bg-[#A8E25E] -translate-y-2 z-30">
        <img src="/mixer-1.svg" className="w-1/2 lg:w-1/5 ml-auto" />
      </div>
      <div className="py-16 px-8 flex flex-col">
        <div className="h-1 w-8 bg-blue-500 rounded-full" />
        <p className="mt-3 text-xl uppercase opacity-20 font-bold">
          the problem?
        </p>
        <h3 className="text-3xl mt-4 font-semibold">Learning is not fun,</h3>
        <h3 className="text-3xl">Knowledge is.</h3>
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
