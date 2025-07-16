import { useMemo } from "react";
import { usePledge } from "../context/PledgeContext";

const PledgedAmount = () => {
  const {
    state: { totalPledged },
  } = usePledge();

  // Format amount with commas (memoized)
  const formattedAmount = useMemo(() => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(totalPledged);
  }, [totalPledged]);

  return (
    <div className="flex flex-col gap-1">
      <strong className={`font-bold text-2xl transition-all duration-300`}>
        ${formattedAmount}
      </strong>
      <span className="block font-medium text-gray-500">
        of $100,000 backed
      </span>
    </div>
  );
};

PledgedAmount.displayName = "PledgedAmount";

export default PledgedAmount;
