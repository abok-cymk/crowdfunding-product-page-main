import {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useCallback,
  useMemo,
} from "react";

const PledgedAmount = forwardRef((props, ref) => {
  const [currentAmount, setCurrentAmount] = useState(() => {
    // Initialize from localStorage or default value
    const storedAmount = localStorage.getItem("crowdfunding-pledged-amount");
    return storedAmount ? parseFloat(storedAmount) : 89914;
  });

  const [isAnimating, setIsAnimating] = useState(false);

  // Save to localStorage whenever amount changes
  useEffect(() => {
    localStorage.setItem(
      "crowdfunding-pledged-amount",
      currentAmount.toString()
    );
  }, [currentAmount]);

  // Method to add pledge amount
  const addPledge = useCallback((pledgeAmount) => {
    if (typeof pledgeAmount !== "number" || pledgeAmount <= 0) {
      console.warn("Invalid pledge amount:", pledgeAmount);
      return false;
    }

    setIsAnimating(true);
    setCurrentAmount((prevAmount) => {
      const newAmount = prevAmount + pledgeAmount;
      return Math.round(newAmount * 100) / 100; // Round to 2 decimal places
    });

    // Remove animation class after animation completes
    setTimeout(() => setIsAnimating(false), 600);
    return true;
  }, []);

  // Method to get current amount
  const getCurrentAmount = useCallback(() => currentAmount, [currentAmount]);

  // Method to get progress percentage (memoized for performance)
  const getProgressPercentage = useCallback(
    (goalAmount = 100000) => {
      return Math.min((currentAmount / goalAmount) * 100, 100);
    },
    [currentAmount]
  );

  // Method to reset amount (for testing/admin purposes)
  const resetAmount = useCallback((newAmount = 89914) => {
    setCurrentAmount(newAmount);
  }, []);

  // Expose methods to parent components via ref
  useImperativeHandle(
    ref,
    () => ({
      addPledge,
      getCurrentAmount,
      getProgressPercentage,
      resetAmount,
    }),
    [addPledge, getCurrentAmount, getProgressPercentage, resetAmount]
  );

  // Format amount with commas (memoized)
  const formattedAmount = useMemo(() => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(currentAmount);
  }, [currentAmount]);

  return (
    <div className="flex flex-col gap-1">
      <strong
        className={`font-bold text-2xl transition-all duration-300 ${
          isAnimating ? "text-green-600 scale-110" : ""
        }`}
      >
        ${formattedAmount}
      </strong>
      <span className="block font-medium text-gray-500">
        of $100,000 backed
      </span>
    </div>
  );
});

PledgedAmount.displayName = "PledgedAmount";

export default PledgedAmount;
