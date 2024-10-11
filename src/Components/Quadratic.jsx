import React, {useState} from "react";
import { quadratic } from "../modules/quadratic";


const Quadratic = () => {

    const [roots, setRoots] = useState({a: 0, b:0, c:0})
    const [res, setRes] = useState({r1:0, r2:0})

    const evaluate = ()=>{
        const value = quadratic(roots.a, roots.b, roots.c);
        if (typeof(value) === "string")
        {
            setRes({r1:value, r2:value});
            // console.log(value)
        }
        else
        {
            setRes({r1:value[0], r2:value[1]});
        }
    }

    const reset = ()=>{
        console.log(typeof(roots.a))
        setRoots({a:0, b:0, c:0})
    }

    const handleChange = (e)=>{
        setRoots({ ...roots, [e.target.name]:e.target.value})
    }

  return (
    <div className="box visible">
        <h2>Quadratic Equations</h2>
        <ul>
            <li>
                <h3>Equation</h3>
                <p>
                      <input type="number" className="inp two" name="a" value={roots.a} onChange={handleChange} />x² + 
                      <input type="number" className="inp two" name="b" value={roots.b} onChange={handleChange} />x + 
                      <input type="number" className="inp two "name="c" value={roots.c} onChange={handleChange} />= 0
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
          </ul>
    </div>
  )
}

export default Quadratic