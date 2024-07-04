import "./App.css";
import { NavBar } from "./components/NavBar";
import MarqueeSlider from "./components/Marquee";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <h1>Tom Beadie</h1>
        <NavBar />
        <MarqueeSlider />
      </div>
    </>
  );
}

export default App;
