import Product from "./Product";

const products = {
  "Bamboo Stand": {
    pledgeTip: "Pledge $25 or more",
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    itemsLeft: 101,
  },
  "Black Edition Stand": {
    pledgeTip: "Pledge $75 or more",
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    itemsLeft: 64,
  },
  "Mahogany Special Edition": {
    pledgeTip: "Pledge $200 or more",
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    itemsLeft: 0,
  },
};

const ProductsList = () => {
  return (
    <div className="grid grid-cols-1 gap-6 mt-8">
      {Object.entries(products).map(([key, values]) => (
        <Product
          key={key}
          name={key}
          pledgeTip={values.pledgeTip}
          description={values.description}
          amountLeft={values.itemsLeft}
        />
      ))}
    </div>
  );
};

ProductsList.displayName = "ProductsList";

export default ProductsList;
