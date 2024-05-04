import React, {useState} from 'react'
import { rectToPol } from '../modules/RecToPol';

const RectPolar = () => {
    const [val, setval] = useState({ real: 0, imaginary: 0 });
    const [res, setRes] = useState({ radius: 0, deg: 0, radian: 0 });
    const handleChange = (e) => {
        setval({ ...val, [e.target.name]: e.target.value })
    }

    const evalueate = () =>{
        let result = rectToPol(val.real, val.imaginary);
        setRes({radius: result[0], deg: result[1], radian: result[2] });
        console.log(result)
    }
    
    const reset = () => {
        setval({ real: 0, imaginary: 0 });
        setRes({ radius: 0, deg: 0, radian: 0 })
    }

    return (
        <div className="box">
            <h2>Rect. To Polar</h2>
            <ul>
                <li>
                    <p>
                        <h3>Enter Real Part: </h3>
                        <input type="number" className='inp' name='real' value={val.real} onChange={handleChange} />
                    </p>
                </li>
                <li>
                    <p>
                        <h3>Enter Imaginary Part: </h3>
                        <input type="number" className='inp' name='imaginary' value={val.imaginary} onChange={handleChange} />
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
                    Radius: <span className="underline">{res.radius}</span>
                </li>
                <li>
                    Degree: <span className="underline">{res.deg}  &#176;</span>
                </li>
                <li>
                    Radians: <span className="underline">{res.radian}</span>
                </li>
            </ul>
        </div>
    )
}

export default RectPolar