import "./App.css";
import Navbar from "./Components/Navbar";
import PolarRect from "./Components/PolarRect";
import RectPolar from "./Components/RectPolar";
import Statistics from "./Components/Statistics";
import ThreeEqn from "./Components/ThreeEqn";
import TwoEqn from "./Components/TwoEqn";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const toggleClick = ()=>{
    console.log("click");
    const bars = document.querySelector("#bars");
    const nav = document.querySelector("#navbar");

    nav.classList.toggle('show');
    bars.classList.toggle('active');
  }

  return (
    <>
      <BrowserRouter>
        <section>
          <div className="bars" id="bars" onClick={toggleClick}>
            <div className="bar" id="bar1"></div>
            <div className="bar" id="bar2"></div>
            <div className="bar" id="bar3"></div>
          </div>
          <Navbar/>
          <h1>Calculator</h1>

        </section>
          <Routes>
            <Route path="/" element={<TwoEqn />}></Route>
            <Route path="threeEqn" element={<ThreeEqn />}></Route>
            <Route path="polarRect" element={<PolarRect/>}></Route>
            <Route path="rectPolar" element={<RectPolar/>}></Route>
            <Route path="statistics" element={<Statistics/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
