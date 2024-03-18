export default function Landing(props) {
  return (
    <div className={`relative ${props.className}`}>
      <div className="h-full w-full sky-background">
        <div className="absolute bottom-0 bg-[#A8E25E] h-[27.28%] w-full"></div>
        <img
          src="/trees.svg"
          className="absolute bottom-[21.26%] w-full object-cover"
        />
        <div className="absolute w-40 h-40 -top-2 -right-4 md:hidden flex">
          <img
            src="/madeinindia.png"
            className="absolute top-0 z-10  rotate-[22deg]"
          />
          <img
            src="/madeinindia2.png"
            className="absolute mix-blend-multiply top-0  rotate-[22deg]"
          />
        </div>
        <div className="h-full w-full flex flex-col z-10 absolute">
          <div className="grow" />
          <img src="/characters.svg" className="w-[97.5%] h-max mb-24" />
          {/* <div className="flex">
            <div>
              <a href="https://stemquest.theananta.in">
                https://stemquest.theananta.in
              </a>
              <p>
                © STEMQuest 2024. <span>All Rights Reserved</span>
              </p>
            </div>
            <div>
              <a className="block">stemquest@theananta.in</a>
              <a>@stemquest.official</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
