import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollTo from "./components/ScrollTo.jsx";
import { PledgeProvider } from "./context/PledgeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <PledgeProvider>
        <ScrollTo />
        <App />
      </PledgeProvider>
    </BrowserRouter>
  </StrictMode>
);
