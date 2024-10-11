import React, { useState } from "react";
import { cubic } from "../modules/cubic";


const Cubic = () => {

    const [roots, setRoots] = useState({ a: 0, b: 0, c:0, d:0 })
    const [res, setRes] = useState({ r1: 0, r2: 0, r3:0 })

    const evaluate = () => {
        const value = cubic(parseFloat(roots.a), parseFloat(roots.b), parseFloat(roots.c), parseFloat(roots.d))
        setRes({r1: value[0], r2: value[1], r3: value[2]})
    }

    const reset = () => {
        setRoots({ a: 0, b: 0, c: 0, d: 0 })
    }

    const handleChange = (e) => {
        setRoots({ ...roots, [e.target.name]: e.target.value })
    }

    return (
        <div className="box visible">
            <h2>Cubic Equations</h2>
            <ul>
                <li>
                    <h3>Equation</h3>
                    <p>
                        <input type="number" className="inp two" name="a" value={roots.a} onChange={handleChange} />x³ +
                        <input type="number" className="inp two" name="b" value={roots.b} onChange={handleChange} />x² +
                        <input type="number" className="inp two" name="c" value={roots.c} onChange={handleChange} />x +
                        <input type="number" className="inp two " name="d" value={roots.d} onChange={handleChange} />= 0
                    </p>
                </li>
            </ul>

            <button className="submit" onClick={evaluate}>Submit</button>
            <button className="reset" onClick={reset}>Reset</button>

            <ul className="solutions">
                <h3>Solutions:-</h3>
                <li>
                    root 1: <span className="underline">{res.r1}</span>
                </li>
                <li>
                    root 2: <span className="underline">{res.r2}</span>
                </li>
                <li>
                    root 3: <span className="underline">{res.r3}</span>
                </li>
            </ul>
        </div>
    )
}

export default Cubic