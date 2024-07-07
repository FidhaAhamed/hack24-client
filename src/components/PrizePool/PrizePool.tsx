import Prize from "./Prize";
import winner from "../../assets/winner.png";
import firstRunnerUp from "../../assets/1st-runner-up.png";
import secondRunnerUp from "../../assets/2nd-runner-up.png";
import bestProject from "../../assets/best-project.png";
import TotalPrize from "./TotalPrize";
import Heading from "../heading";

const PrizePool = () => {
  return (
    <section
      id="prizepool"
      className="px-3 md:px-5 w-dvw pt-12 lg:px-32 bg-void-m min-h-dvh flex flex-col place-content-center"
    >
      <Heading
        heading="Prize Pool"
        subheading="Take a Peek at the Prizes"
      ></Heading>

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center justify-center mt-10 sm:mt-16">
          <TotalPrize amount={100000} className="block md:hidden" />
          <Prize icon={winner} label="Winner" />
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <Prize icon={firstRunnerUp} label="1st Runner Up" />
          <TotalPrize amount={100000} className="hidden md:block" />
          <Prize icon={secondRunnerUp} label="2nd Runner Up" />
        </div>
        <div className="flex flex-col items-center md:gap-x-2 md:flex-row md:justify-between">
          <Prize icon={bestProject} label="Best Software" />
          <Prize icon={bestProject} label="Best Hardware" />
          <Prize icon={bestProject} label="Best Innovation" />
          <Prize icon={bestProject} label="Best Amateur" />
        </div>
      </div>
    </section>
  );
};
export default PrizePool;
