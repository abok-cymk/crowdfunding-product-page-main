import BackThisProjectModal from "./components/BackThisProjectModal";
import Navbar from "./components/Navbar";
import AboutandProducts from "./sections/AboutandProducts";
import Intro from "./sections/Intro";
import Stats from "./sections/Stats";
import { usePledge } from "./context/PledgeContext";
import ThankYouModal from "./components/ThankYouModal";
import { Toaster } from "react-hot-toast";

function App() {
  const {
    state: { isModalOpen, thankYouModal },
  } = usePledge();

  return (
    <>
      <Navbar />
      <main className="bg-Gray-200 max-md:px-4 min-h-screen flex flex-col">
        <h1 className="sr-only">Crowdfunding Product Page</h1>
        <Intro />
        <Stats />
        <AboutandProducts />
      </main>
      {isModalOpen && <BackThisProjectModal />}
      {thankYouModal && <ThankYouModal />}
      <Toaster />
    </>
  );
}

export default App;
