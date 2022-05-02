import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <h1 className="text-3xl text-center">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
