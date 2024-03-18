export default function Landing(props) {
  return (
    <div className={`relative ${props.className}`}>
      <div className="h-full w-full sky-background">
        <div className="absolute bottom-0 bg-[#A8E25E] h-[27.28%] w-full"></div>
        <img
          src="/trees.svg"
          className="absolute bottom-[21.26%] w-full object-cover"
          alt=""
        />
        <div className="absolute w-40 h-40 -top-2 -right-4 md:hidden flex">
          <img
            src="/madeinindia.png"
            className="absolute top-0 z-10  rotate-[22deg]"
            alt="Made in Bharat"
          />
          <img
            src="/madeinindia2.png"
            className="absolute mix-blend-multiply top-0  rotate-[22deg]"
            alt=""
          />
        </div>
        <img
          src="/theanantastudio-logo.svg"
          className="absolute w-20 h-20 mx-4 mt-2"
          alt="The Ananta Studio."
        />
        <div className="w-full h-[unset] lg:h-full flex flex-col z-10 absolute">
          <div className="grow" />
          <div className="lg:hidden">
            <div className="h-[12.5vh] w-full" />
            <img
              src="/stemquest-logo.png"
              className="w-[63.62%] mx-auto"
              alt="STEMQuest"
            />
            <div className="text-center text-[#1E5B85]">
              <p className="text-lg font-bold">Discover | Learn | Create</p>
              <p className="text-[12px] w-[32ch] mx-auto">
                Help your children learn with engaging STEM-based educational
                kits
              </p>
              <div className="mt-4 mx-auto w-max">
                <a href="">
                  <div class="btn-submit cursor-pointer flex gap-2 lg:gap-4 items-center mb-4 lg:mb-16 lg:mb-0 style_container__ZhG39">
                    <span class="initial items-center z-[2] flex gap-2 items-center">
                      <div autoplay="" class="w-6 lg:w-12">
                        <img src="party_popper.svg" />
                      </div>
                      Join Us!
                    </span>
                    <span
                      aria-hidden="true"
                      class="secondary  h-full z-[2] flex gap-2 items-center"
                    >
                      <div autoplay="" class="w-6 lg:w-12">
                        <img src="party_popper.svg" />
                      </div>
                      Join Us!
                    </span>
                    <span class="btn-submit cursor-pointer flex gap-2 lg:gap-4 items-center mb-4 lg:mb-16 lg:mb-0 !mb-0 bg-box absolute !w-full h-full"></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <img
            src="/characters-2.svg"
            className="w-[97%] h-max mb-24 lg:mt-[unset] mt-8"
            alt="Playful young characters jumping excitedly!"
          />
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
