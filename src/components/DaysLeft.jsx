import { useState, useEffect } from "react";

const DaysLeft = () => {
  const [daysLeft, setDaysLeft] = useState(() => {
    // Check if there's a stored value in localStorage
    const storedDays = localStorage.getItem("crowdfunding-days-left");
    const storedTimestamp = localStorage.getItem("crowdfunding-start-time");

    if (storedDays && storedTimestamp) {
      const now = new Date().getTime();
      const startTime = parseInt(storedTimestamp);
      const daysPassed = Math.floor((now - startTime) / (1000 * 60 * 60 * 24));
      const remainingDays = Math.max(0, parseInt(storedDays) - daysPassed);
      return remainingDays;
    }

    // If no stored value, initialize with 56 days
    const initialDays = 56;
    localStorage.setItem("crowdfunding-days-left", initialDays.toString());
    localStorage.setItem(
      "crowdfunding-start-time",
      new Date().getTime().toString()
    );
    return initialDays;
  });

  useEffect(() => {
    const updateDaysLeft = () => {
      const storedDays = localStorage.getItem("crowdfunding-days-left");
      const storedTimestamp = localStorage.getItem("crowdfunding-start-time");

      if (storedDays && storedTimestamp) {
        const now = new Date().getTime();
        const startTime = parseInt(storedTimestamp);
        const daysPassed = Math.floor(
          (now - startTime) / (1000 * 60 * 60 * 24)
        );
        const remainingDays = Math.max(0, parseInt(storedDays) - daysPassed);
        setDaysLeft(remainingDays);
      }
    };

    // Update immediately
    updateDaysLeft();

    const interval = setInterval(updateDaysLeft, 1000 * 60 * 60); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-1">
      <strong className="font-bold text-2xl">{daysLeft}</strong>
      <span className="block font-medium text-Gray-500">days left</span>
    </div>
  );
};

DaysLeft.displayName = "DaysLeft";

export default DaysLeft;
