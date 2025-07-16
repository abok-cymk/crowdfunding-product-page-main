import { createContext, useContext, useReducer, useMemo } from "react";

const PledgeContext = createContext();

const initialState = {
  products: [
    {
      id: 1,
      name: "Pledge with no reward",
      pledgeAmount: 1,
      description:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates.",
      itemsLeft: null,
    },
    {
      id: 2,
      name: "Bamboo Stand",
      pledgeAmount: 25,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      itemsLeft: 101,
    },
    {
      id: 3,
      name: "Black Edition Stand",
      pledgeAmount: 75,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      itemsLeft: 64,
    },
    {
      id: 4,
      name: "Mahogany Special Edition",
      pledgeAmount: 200,
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      itemsLeft: 0,
    },
  ],
  totalPledged: 89914,
  totalBackers: 5007,
  isModalOpen: false,
  selectedProduct: null,
  thankYouModal: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_PRODUCT":
      return {
        ...state,
        isModalOpen: true,
        selectedProduct: action.payload,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
        selectedProduct: null,
      };
    case "MAKE_PLEDGE": {
      const { productId, pledgeAmount } = action.payload;
      const newTotalPledged = state.totalPledged + pledgeAmount;
      const newTotalBackers = state.totalBackers + 1;

      const updatedProducts = state.products.map((product) => {
        if (product.id === productId && product.itemsLeft !== null) {
          return { ...product, itemsLeft: product.itemsLeft - 1 };
        }
        return product;
      });

      return {
        ...state,
        products: updatedProducts,
        totalPledged: newTotalPledged,
        totalBackers: newTotalBackers,
        isModalOpen: false,
        thankYouModal: true,
      };
    }
    case "CLOSE_THANK_YOU_MODAL":
      return {
        ...state,
        thankYouModal: false,
      };
    default:
      return state;
  }
}

function PledgeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <PledgeContext.Provider value={contextValue}>
      {children}
    </PledgeContext.Provider>
  );
}

function usePledge() {
  const context = useContext(PledgeContext);
  if (context === undefined) {
    throw new Error("usePledge must be used within a PledgeProvider");
  }
  return context;
}

export { PledgeProvider, usePledge };
