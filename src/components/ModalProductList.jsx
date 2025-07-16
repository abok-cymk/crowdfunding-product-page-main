import { useState } from "react";
import ModalProduct from "./ModalProduct";
import { usePledge } from "../context/PledgeContext";
import toast from "react-hot-toast";

const ModalProductList = () => {
  const {
    state: { products, selectedProduct },
    dispatch,
  } = usePledge();
  const [pledgeAmounts, setPledgeAmounts] = useState({});

  const handlePledge = (productId) => {
    const pledgeAmount = parseInt(pledgeAmounts[productId], 10) || 0;
    const product = products.find((p) => p.id === productId);

    if (pledgeAmount >= product.pledgeAmount) {
      dispatch({
        type: "MAKE_PLEDGE",
        payload: { productId, pledgeAmount },
      });
    } else {
      toast.error(`Pledge amount must be at least $${product.pledgeAmount}`);
    }
  };

  const handleAmountChange = (productId, amount) => {
    setPledgeAmounts((prev) => ({ ...prev, [productId]: amount }));
  };

  return (
    <div className="space-y-6">
      {products.map((product) => (
        <ModalProduct
          key={product.id}
          product={product}
          isSelected={selectedProduct && selectedProduct.id === product.id}
          onSelect={() =>
            dispatch({ type: "SELECT_PRODUCT", payload: product })
          }
          onPledge={handlePledge}
          onAmountChange={handleAmountChange}
          pledgeAmount={pledgeAmounts[product.id] || ""}
        />
      ))}
    </div>
  );
};

export default ModalProductList;
