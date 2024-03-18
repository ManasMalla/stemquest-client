import RightArrow from "./right_arrow";

export default function TheProblem() {
  return (
    <div className="py-16 bg-blue-500 text-white px-8 lg:px-24 flex flex-col">
      <div className="h-1 w-8 bg-white rounded-full" />
      <p className="mt-3 text-xl uppercase opacity-40 font-bold">
        the problem?
      </p>
      {/* <h3 className="text-3xl mt-4 font-semibold uppercase">
      Learning is not fun,
    </h3>
    <h3 className="text-3xl uppercase">Knowledge is.</h3> */}
      <h3 className="text-3xl mt-4 font-semibold uppercase">The Student</h3>
      <h3 className="text-3xl uppercase">Struggle.</h3>
      <p className="mt-8 w-[32ch]">
        <span className="text-3xl font-medium flex items-center">
          30%{" "}
          <a
            href="https://www.researchgate.net/figure/Graph-showing-conceptual-understanding-for-both-learning-techniques_fig1_294721233"
            className="pl-1 flex items-center h-max scale-90 opacity-70"
          >
            <RightArrow />
          </a>
        </span>
        <span className="opacity-70">
          Understanding and engagement with traditional learning methods.
          <sup>1</sup>
        </span>
        <br /> <br />
        <span className="text-3xl flex items-center font-medium">
          57%{" "}
          <a
            href="https://img.asercentre.org/docs/Publications/ASER%20Reports/ASER%202017/aser2017fullreportfinal.pdf"
            className="pl-1 flex items-center h-max scale-90 opacity-70"
          >
            <RightArrow />
          </a>
        </span>
        <span className="opacity-70">
          Grapple with the daunting challenge of solving basic division.
          <sup>2</sup>
        </span>
        <br /> <br />
        <span className="text-3xl flex items-center font-medium">
          13000{" "}
          <a
            href="https://news.careers360.com/Ncrb-report-2023-over-13000-student-suicide-fail-in-exam-girls-national-crime-records-bureau"
            // href="https://www.drishtiias.com/daily-updates/daily-news-analysis/increasing-cases-of-suicides-in-educational-hubs"
            className="pl-1 flex items-center h-max scale-90 opacity-70"
          >
            <RightArrow />
          </a>
        </span>
        <span className="opacity-70">
          students died in 2021 in India at the rate of more than 35 every day,
          with 864 out of 10,732 suicides being due to &quot;failure in
          examination.&quot;
          <sup>3</sup>
        </span>
      </p>
    </div>
  );
}
