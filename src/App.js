import "./App.css";
import ThreeEqn from "./Components/ThreeEqn";
import TwoEqn from "./Components/TwoEqn";

function App() {
  const handle_click = (e) => {
    let move = document.getElementById("movable");
    let btn = document.getElementsByClassName("btn");
    btn[0].classList.remove("btn_active");
    btn[1].classList.remove("btn_active");
    if ( e === "btn_1"){
      document.getElementById(e).classList.add("btn_active");
      move.classList.remove("move")
      document.getElementById('twoVar').classList.add('visible')
      document.getElementById('threeVar').classList.remove('visible')
    }
    else{
      document.getElementById(e).classList.add("btn_active");
      move.classList.add("move")
      document.getElementById('twoVar').classList.remove('visible')
      document.getElementById('threeVar').classList.add('visible')
    }
  };

  return (
    <>
      <section>
        <h1>Calculator</h1>
        <ul className="buttons">
          <div id="movable"></div>
          <li
            id="btn_1"
            className="btn btn_active"
            onClick={() => handle_click("btn_1")}
          >
            Two Variables
          </li>
          <li id="btn_2" className="btn" onClick={() => handle_click("btn_2")}>
            Three Variables
          </li>
        </ul>
      </section>
      <section className="boxes">
        <TwoEqn />
        <ThreeEqn />
      </section>
    </>
  );
}

export default App;
