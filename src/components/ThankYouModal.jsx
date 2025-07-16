import { usePledge } from "../context/PledgeContext";
import Button from "./ui/Button";
import iconCheck from "/icon-check.svg";

const ThankYouModal = () => {
  const { dispatch } = usePledge();

  const handleClose = () => {
    dispatch({ type: "CLOSE_THANK_YOU_MODAL" });
  };

  return (
    <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 max-md:w-[90vw] max-md:mx-auto">
      <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
        <img src={iconCheck} alt="Success" className="mx-auto mb-6" />
        <h2 className="text-2xl font-bold mb-4">Thanks for your support!</h2>
        <p className="text-Gray-500 mb-6">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <Button onClick={handleClose}>Got it!</Button>
      </div>
    </div>
  );
};

export default ThankYouModal;
