import Image from "next/image";
import Landing from "./components/landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
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
    </main>
  );
}
