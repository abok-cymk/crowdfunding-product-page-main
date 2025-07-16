import clsx from "clsx";
import { forwardRef } from "react";
import Button from "./ui/Button";

const Product = forwardRef(
  ({ name, pledgeTip, description, amountLeft }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "border rounded-md px-8 py-6 flex flex-col gap-4 bg-white",
          amountLeft === 0
            ? "border-gray-200 bg-opacity-10"
            : "border-Gray-500/50"
        )}
      >
        <div className="md:flex items-center justify-between">
          <h3
            className={clsx(
              "font-bold text-lg",
              amountLeft === 0 ? "text-Gray-500" : "text-black"
            )}
          >
            {name}
          </h3>
          <p
            className={clsx(
              "font-bold text-base",
              amountLeft === 0 ? "text-Green-700/30" : "text-Green-400"
            )}
          >
            {pledgeTip}
          </p>
        </div>
        <p
          className={clsx(
            "font-medium",
            amountLeft === 0 ? "text-Gray-500/20" : "text-Gray-500"
          )}
        >
          {description}
        </p>

        <div className="md:flex items-center justify-between">
          <div className="flex items-center gap-2">
            <strong
              className={clsx(
                "font-bold text-2xl",
                amountLeft === 0 ? "text-Gray-500" : "text-black"
              )}
            >
              {amountLeft}
            </strong>
            <span
              className={clsx(
                "text-sm",
                amountLeft === 0 ? "text-Gray-500/20" : "text-Gray-500"
              )}
            >
              left
            </span>
          </div>
          <Button
            variant={amountLeft === 0 ? "ghost" : "primary"}
            className="max-md:block max-md:mt-1"
          >
            {amountLeft === 0 ? "Out of stock" : "Select Reward"}
          </Button>
        </div>
      </div>
    );
  }
);

Product.displayName = "Product";

export default Product;
