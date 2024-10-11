import React, { useState } from "react";
import { threeVar } from "../modules/threeVar";

const ThreeEqn = () => {
  const [val, setVal] = useState({
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
  const [res, setRes] = useState({ x: 0, y: 0, z: 0 });

  const changeVal = (e) => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };

  const evaluate = () => {
    console.log(
      val.a1,
      val.b1,
      val.c1,
      val.d1,
      val.a2,
      val.b2,
      val.c2,
      val.d2,
      val.a3,
      val.b3,
      val.c3,
      val.d3
    );
    let result = threeVar(
      val.a1,
      val.b1,
      val.c1,
      val.d1,
      val.a2,
      val.b2,
      val.c2,
      val.d2,
      val.a3,
      val.b3,
      val.c3,
      val.d3
    );
    console.log(result);
    setRes({ x: result[0], y: result[1], z: result[2] });
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
    setRes({ x: 0, y: 0, z: 0 });
  };
  return (
    <div className="box" >
      <h2>Linear Equations in three variables</h2>

      <ul>
        <li>
          <h3>Equation 1:</h3>
          <p>
            <input
              type="number"
              className="inp"
              name="a1"
              value={val.a1}
              onChange={changeVal}
            />
            x +
            <input
              type="number"
              className="inp"
              name="b1"
              value={val.b1}
              onChange={changeVal}
            />
            y +
            <input
              type="number"
              className="inp"
              name="c1"
              value={val.c1}
              onChange={changeVal}
            />
            z =
            <input
              type="number"
              className="inp"
              name="d1"
              value={val.d1}
              onChange={changeVal}
            />
          </p>
        </li>
        <li>
          <h3>Equation 2:</h3>
          <p>
            <input
              type="number"
              className="inp"
              name="a2"
              value={val.a2}
              onChange={changeVal}
            />
            x +
            <input
              type="number"
              className="inp"
              name="b2"
              value={val.b2}
              onChange={changeVal}
            />
            y +
            <input
              type="number"
              className="inp"
              name="c2"
              value={val.c2}
              onChange={changeVal}
            />
            z =
            <input
              type="number"
              className="inp"
              name="d2"
              value={val.d2}
              onChange={changeVal}
            />
          </p>
        </li>
        <li>
          <h3>Equation 3:</h3>
          <p>
            <input
              type="number"
              className="inp"
              name="a3"
              value={val.a3}
              onChange={changeVal}
            />
            x +
            <input
              type="number"
              className="inp"
              name="b3"
              value={val.b3}
              onChange={changeVal}
            />
            y +
            <input
              type="number"
              className="inp"
              name="c3"
              value={val.c3}
              onChange={changeVal}
            />
            z =
            <input
              type="number"
              className="inp"
              name="d3"
              value={val.d3}
              onChange={changeVal}
            />
          </p>
        </li>
      </ul>

      <button className="submit" onClick={evaluate}>
        Submit
      </button>
      <button className="reset" onClick={reset}>
        Reset
      </button>
      <ul className="solutions">
        <h3>Solutions:- </h3>
        <li>x: <span className="underline">{res.x}</span></li>
        <li>y: <span className="underline">{res.y}</span></li>
        <li>z: <span className="underline">{res.z}</span></li>
      </ul>
    </div>
  );
};

export default ThreeEqn;
