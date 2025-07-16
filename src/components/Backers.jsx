import {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from "react";

const Backers = forwardRef((props, ref) => {
  const [currentBackers, setCurrentBackers] = useState(() => {
    // Initialize from localStorage or default value
    const storedBackers = localStorage.getItem("crowdfunding-backers-count");
    const storedBackersList = localStorage.getItem("crowdfunding-backers-list");

    if (storedBackers && storedBackersList) {
      return parseInt(storedBackers);
    }
    return 5007;
  });

  const [backersSet, setBackersSet] = useState(() => {
    // Track unique backers using Set for O(1) lookup
    const storedBackersList = localStorage.getItem("crowdfunding-backers-list");
    if (storedBackersList) {
      try {
        const backersList = JSON.parse(storedBackersList);
        return new Set(backersList);
      } catch (error) {
        console.warn("Failed to parse stored backers list:", error);
      }
    }
    return new Set();
  });

  const [isAnimating, setIsAnimating] = useState(false);

  // Save to localStorage whenever backers change
  useEffect(() => {
    localStorage.setItem(
      "crowdfunding-backers-count",
      currentBackers.toString()
    );
    localStorage.setItem(
      "crowdfunding-backers-list",
      JSON.stringify([...backersSet])
    );
  }, [currentBackers, backersSet]);

  // Method to add a new backer
  const addBacker = useCallback(
    (backerId) => {
      if (!backerId) {
        console.warn("Invalid backer ID:", backerId);
        return false;
      }

      // Convert to string to ensure consistent comparison
      const backerIdStr = String(backerId);

      // Only increment if this is a new backer
      if (!backersSet.has(backerIdStr)) {
        setIsAnimating(true);
        setBackersSet((prevSet) => new Set([...prevSet, backerIdStr]));
        setCurrentBackers((prevCount) => prevCount + 1);

        // Remove animation class after animation completes
        setTimeout(() => setIsAnimating(false), 600);
        return true; // New backer added
      }

      return false; // Existing backer, no change
    },
    [backersSet]
  );

  // Method to check if someone is already a backer
  const isBacker = useCallback(
    (backerId) => {
      return backersSet.has(String(backerId));
    },
    [backersSet]
  );

  // Method to get current backers count
  const getCurrentBackers = useCallback(() => currentBackers, [currentBackers]);

  // Method to get all backer IDs
  const getAllBackers = useCallback(() => [...backersSet], [backersSet]);

  // Method to reset backers (for testing/admin purposes)
  const resetBackers = useCallback((newCount = 5007, newBackersList = []) => {
    setCurrentBackers(newCount);
    setBackersSet(new Set(newBackersList.map(String)));
  }, []);

  // Expose methods to parent components via ref
  useImperativeHandle(
    ref,
    () => ({
      addBacker,
      isBacker,
      getCurrentBackers,
      getAllBackers,
      resetBackers,
    }),
    [addBacker, isBacker, getCurrentBackers, getAllBackers, resetBackers]
  );

  // Format backers count with commas
  const formatBackers = (count) => {
    return new Intl.NumberFormat("en-US").format(count);
  };

  return (
    <div className="flex flex-col gap-1">
      <strong
        className={`font-bold text-2xl transition-all duration-300 ${
          isAnimating ? "text-blue-600 scale-110" : ""
        }`}
      >
        {formatBackers(currentBackers)}
      </strong>
      <span className="block font-medium text-gray-500">total backers</span>
    </div>
  );
});

Backers.displayName = "Backers";

export default Backers;
