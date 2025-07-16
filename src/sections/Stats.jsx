import { usePledge } from "../context/PledgeContext";
import Backers from "../components/Backers";
import DaysLeft from "../components/DaysLeft";
import PledgedAmount from "../components/PledgedAmount";
import ProgressBar from "../components/ProgressBar";

const Stats = () => {
  const {
    state: { totalPledged },
  } = usePledge();

  const progressPercentage = (totalPledged / 100000) * 100;

  return (
    <section className="relative mx-auto -translate-y-1/5 md:-translate-y-1/3 lg:max-w-3xl md:max-w-2xl bg-white rounded-md shadow px-9 py-10 w-full">
      <ul className="grid grid-cols-1 md:grid-cols-3 divide-x max-md:divide-x-0 divide-Gray-500/40 max-md:text-center">
        <li className="max-md:border-b max-md:py-4 max-md:w-max max-md:mx-auto">
          <PledgedAmount />
        </li>
        <li className="md:pl-8 max-md:border-b max-md:py-4 max-md:w-max max-md:mx-auto">
          <Backers />
        </li>
        <li className="md:pl-8 max-md:py-4 max-md:w-max max-md:mx-auto">
          <DaysLeft />
        </li>
      </ul>
      {/* Progress indicator */}
      <div className="mt-8 w-full">
        <ProgressBar
          percentage={progressPercentage}
          className="w-full"
          height="h-2"
          bgColor="bg-gray-200"
          fillColor="bg-Green-400"
          animated={true}
        />
      </div>
    </section>
  );
};

Stats.displayName = "Stats";

export default Stats;
