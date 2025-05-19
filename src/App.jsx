import About from "./About";
import Homepage from "./Homepage"
import Intro from "./Intro";
import Statistics from "./Statistics";

const App = () => {
  return (
    <>
      <Homepage />
      <main className="grid items-center gap-5 text-neutral-900 max-w-2xl mx-auto relative top-30 lg:top-50 px-6 py-5">
        <Intro />
        <Statistics />
        <About />
      </main>
    </>
  );
};

export default App;
