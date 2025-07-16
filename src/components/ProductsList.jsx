import Product from "./Product";
import { usePledge } from "../context/PledgeContext";

const ProductsList = () => {
  const {
    state: { products },
    dispatch,
  } = usePledge();

  const handleSelectProduct = (product) => {
    dispatch({ type: "SELECT_PRODUCT", payload: product });
  };

  return (
    <div className="grid grid-cols-1 gap-6 mt-8">
      {products.slice(1).map((product) => (
        <Product
          key={product.id}
          name={product.name}
          pledgeTip={`Pledge $${product.pledgeAmount} or more`}
          description={product.description}
          amountLeft={product.itemsLeft}
          onSelect={() => handleSelectProduct(product)}
        />
      ))}
    </div>
  );
};

ProductsList.displayName = "ProductsList";

export default ProductsList;
