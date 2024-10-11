import React, { useState } from "react";
import { twoVar } from "../modules/twoVar";
const TwoEqn = () => {
  const [val, setVal] = useState({ a1: 0, b1: 0, c1: 0, a2: 0, b2: 0, c2: 0 });
  const [res, setRes] = useState({ x: 0, y: 0 });

  const changeVal = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  const evalueate = () => {
    console.log("working");
    console.log(val.a1, val.b1, val.c1, val.a2, val.b2, val.c2);
    let result = twoVar(val.a1, val.b1, val.c1, val.a2, val.b2, val.c2);
    console.log(result);
    setRes({ x: result[0], y: result[1] });
  };

  const reset = () => {
    setVal({
      a1: 0,
      b1: 0,
      c1: 0,
      d1: 0,
      a2: 0,
      b2: 0,
      c2: 0,
      d2: 0,
      a3: 0,
      b3: 0,
      c3: 0,
      d3: 0,
    });
    setRes({ x: 0, y: 0 })
  };

  return (
    <div className="box visible">
      <h2>Linear Equations in two variables</h2>
      <ul>
        <li>
          <h3>Equation 1:</h3>
          <p>
            <input
              type="number"
              className="inp two"
              name="a1"
              value={val.a1}
              onChange={changeVal}
            />
            x +
            <input
              type="number"
              className="inp two"
              name="b1"
              value={val.b1}
              onChange={changeVal}
            />
            y =
            <input
              type="number"
              className="inp two"
              name="c1"
              value={val.c1}
              onChange={changeVal}
            />
          </p>
        </li>
        <li>
          <h3>Equation 2:</h3>
          <p>
            <input
              type="number"
              className="inp two"
              name="a2"
              value={val.a2}
              onChange={changeVal}
            />
            x +
            <input
              type="number"
              className="inp two"
              name="b2"
              value={val.b2}
              onChange={changeVal}
            />
            y =
            <input
              type="number"
              className="inp two"
              name="c2"
              value={val.c2}
              onChange={changeVal}
            />
          </p>
        </li>
      </ul>
      
      <button className="submit" onClick={evalueate}>
        Submit
      </button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
      <ul className="solutions">
        <h3>Solutions:-</h3>
        <li>
          x: <span className="underline">{res.x}</span>
        </li>
        <li>
          y: <span className="underline">{res.y}</span>
        </li>
      </ul>
    </div>
  );
};

export default TwoEqn;
