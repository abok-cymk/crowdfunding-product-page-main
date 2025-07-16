import clsx from "clsx";
import Button from "./ui/Button";

const ModalProduct = ({
  product,
  isSelected,
  onSelect,
  onPledge,
  onAmountChange,
  pledgeAmount,
}) => {
  const { id, name, pledgeAmount: minPledge, description, itemsLeft } = product;
  const isDisabled = itemsLeft === 0;

  return (
    <div
      className={clsx(
        "border rounded-lg p-6 transition-all",
        isDisabled ? "opacity-50 pointer-events-none" : "",
        isSelected ? "border-Green-400" : "border-gray-300"
      )}
    >
      <div className="inline md:flex items-start gap-4">
        <input
          type="radio"
          id={`product-${id}`}
          name="product-selection"
          checked={isSelected}
          onChange={onSelect}
          disabled={isDisabled}
          className="mt-1"
        />
        <div className="flex-1 max-md:inline">
          <div className="md:flex justify-between items-center">
            <div className="md:flex gap-2">
              <label htmlFor={`product-${id}`} className="cursor-pointer">
                <h4 className="font-bold hover:text-Green-400">{name}</h4>
              </label>
              {minPledge > 0 && (
                <p className="font-bold text-Green-400">
                  Pledge ${minPledge} or more
                </p>
              )}
            </div>
            {itemsLeft !== null && (
              <div className="max-md:hidden flex items-center gap-2 mt-4">
                <strong className="font-bold text-xl">{itemsLeft}</strong>
                <span>left</span>
              </div>
            )}
          </div>
          <p className="text-Gray-500 mt-2">{description}</p>
          {itemsLeft !== null && (
            <div className="md:hidden flex items-center gap-2 mt-4">
              <strong className="font-bold text-xl">{itemsLeft}</strong>
              <span>left</span>
            </div>
          )}
        </div>
      </div>
      {isSelected && (
        <div className="mt-4 pt-4 border-t border-gray-200 flex max-md:flex-col justify-between items-center max-md:text-center">
          <p className="text-Gray-500 max-md:pb-3">Enter your pledge</p>
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-Gray-500 font-bold">
                $
              </span>
              <input
                type="number"
                value={pledgeAmount}
                onChange={(e) => onAmountChange(id, e.target.value)}
                min={minPledge}
                className="w-24 rounded-full border border-gray-300 font-bold text-center py-2 px-8"
              />
            </div>
            <Button onClick={() => onPledge(id)}>Continue</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalProduct;
