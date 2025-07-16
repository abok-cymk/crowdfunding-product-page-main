import { usePledge } from "../context/PledgeContext";

const Backers = () => {
  const {
    state: { totalBackers },
  } = usePledge();

  return (
    <div className="flex flex-col gap-1">
      <strong className={`font-bold text-2xl transition-all duration-300`}>
        {new Intl.NumberFormat("en-US").format(totalBackers)}
      </strong>
      <span className="block font-medium text-gray-500">total backers</span>
    </div>
  );
};

Backers.displayName = "Backers";

export default Backers;
