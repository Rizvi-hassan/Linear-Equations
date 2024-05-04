import React, { useState } from 'react'
import { polToRect } from '../modules/PolToRect';

const PolarRect = () => {
    const [val, setval] = useState({ radius: 0, degree: 0 });
    const [res, setRes] = useState({x: 0, y: 0});
    const handleChange = (e) => {
        setval({ ...val, [e.target.name]: e.target.value })
    }

    const evalueate = ()=>{
        let result =  polToRect(val.radius, val.degree);
        setRes({x: result[0],  y: result[1]});
    }
    const reset = ()=>{
        setval({ radius: 0, degree: 0 });
        setRes({ x: 0, y: 0 })
    }

    return (
        <div className="box">
            <h2>Polar to Rect.</h2>
            <ul>
                <li>
                    <p>
                        <h3>Enter Radius: </h3>
                        <input type="number" className='inp' name='radius' value={val.radius} onChange={handleChange} />
                    </p>
                </li>
                <li>
                    <p>
                        <h3>Enter Degree: </h3>
                        <input type="number" className='inp' name='degree' value={val.degree} onChange={handleChange} />
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
    )
}

export default PolarRect