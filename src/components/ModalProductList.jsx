import { useState } from "react";
import ModalProduct from "./ModalProduct";
import Button from "./ui/Button";
import { useForm } from "react-hook-form";

const pledges = {
  "Pledge with no reward": {
    description:
      "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    minAmount: 1,
  },
  "Bamboo Stand": {
    pledgeTip: "Pledge $25 or more",
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    itemsLeft: 101,
    minAmount: 25,
  },
  "Black Edition Stand": {
    pledgeTip: "Pledge $75 or more",
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    itemsLeft: 64,
    minAmount: 75,
  },
  "Mahogany Special Edition": {
    pledgeTip: "Pledge $200 or more",
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    itemsLeft: 0,
    minAmount: 200,
  },
};

const ModalProductList = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [selectedPledge, setSelectedPledge] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  const watchedPledge = watch("pledge");

  const onSubmit = (data) => {
    console.log("Pledge submitted:", data);
    setShowThankYou(true);
  };

  const handlePledgeChange = (pledgeName) => {
    setSelectedPledge(pledgeName);
  };

  if (showThankYou) {
    return (
      <div className="text-center py-8">
        <h4 className="text-xl font-bold text-black mb-4">
          Thanks for your support!
        </h4>
        <p className="text-Gray-500 font-medium mb-6">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <Button variant="primary" onClick={onClose}>
          Got it!
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-4">
        {Object.entries(pledges).map(([key, values]) => {
          const isDisabled = values.itemsLeft === 0;
          const isSelected = watchedPledge === key;

          return (
            <div
              key={key}
              className={`border rounded-lg p-4 ${
                isDisabled
                  ? "border-gray-200 opacity-50"
                  : isSelected
                  ? "border-Green-400"
                  : "border-gray-300"
              }`}
            >
              <label className="flex items-start gap-4 cursor-pointer">
                <input
                  type="radio"
                  value={key}
                  disabled={isDisabled}
                  {...register("pledge", {
                    required: "Please select a pledge option",
                  })}
                  onChange={() => handlePledgeChange(key)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <ModalProduct
                    name={key}
                    pledgeTip={values.pledgeTip}
                    amountLeft={values.itemsLeft}
                    description={values.description}
                  />
                </div>
              </label>

              {isSelected && !isDisabled && (
                <div className="border-t mt-4 pt-4">
                  <p className="text-sm text-Gray-500 mb-3">
                    Enter your pledge
                  </p>
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <input
                        type="number"
                        min={values.minAmount || 1}
                        placeholder={`$${values.minAmount || 1}`}
                        {...register(`amount`, {
                          required: "Please enter a pledge amount",
                          min: {
                            value: values.minAmount || 1,
                            message: `Minimum pledge is $${
                              values.minAmount || 1
                            }`,
                          },
                        })}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-Green-400"
                      />
                      {errors.amount && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.amount.message}
                        </p>
                      )}
                    </div>
                    <Button variant="primary" type="submit">
                      Continue
                    </Button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {errors.pledge && (
        <p className="text-red-500 text-sm">{errors.pledge.message}</p>
      )}
    </form>
  );
};

export default ModalProductList;
