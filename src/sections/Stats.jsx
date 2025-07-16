import { useRef, useCallback, useMemo } from "react";
import Backers from "../components/Backers";
import DaysLeft from "../components/DaysLeft";
import PledgedAmount from "../components/PledgedAmount";
import ProgressBar from "../components/ProgressBar";

const Stats = () => {
  const pledgedAmountRef = useRef();
  const backersRef = useRef();

 const handleNewPledge = useCallback((pledgeAmount, backerId) => {
   // Add the pledge amount
   const pledgeAdded = pledgedAmountRef.current?.addPledge(pledgeAmount);

   // Add the backer (only increments if new)
   const isNewBacker = backersRef.current?.addBacker(backerId);

   console.log("Pledge added:", pledgeAdded);
   console.log("New backer:", isNewBacker);
 }, []);

  // progress percentage
  const progressPercentage = useMemo(() => {
    return pledgedAmountRef.current?.getProgressPercentage() || 0;
  }, [pledgedAmountRef.current?.getCurrentAmount()]);

  return (
    <section className="relative mx-auto -translate-y-1/5 md:-translate-y-1/3 lg:max-w-3xl md:max-w-2xl bg-white rounded-md shadow px-9 py-10 w-full">
      <ul className="grid grid-cols-1 md:grid-cols-3 divide-x max-md:divide-x-0 divide-Gray-500/40 max-md:text-center">
        <li className="max-md:border-b max-md:py-4 max-md:w-max max-md:mx-auto">
          <PledgedAmount ref={pledgedAmountRef} />
        </li>
        <li className="md:pl-8 max-md:border-b max-md:py-4 max-md:w-max max-md:mx-auto">
          <Backers ref={backersRef} />
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
