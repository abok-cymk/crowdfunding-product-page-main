import Navbar from "./components/Navbar";
import AboutandProducts from "./sections/AboutandProducts";
import Intro from "./sections/Intro";
import Stats from "./sections/Stats";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-Gray-200 max-md:px-4 min-h-screen flex flex-col">
        <Intro />
        <Stats />
        <AboutandProducts />
      </main>
    </>
  );
}

export default App;
