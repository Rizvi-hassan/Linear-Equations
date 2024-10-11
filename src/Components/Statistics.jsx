import React, { useState } from 'react'
import { statistics } from '../modules/Statistic';

const Statistics = () => {
    const [val, setVal] = useState("");
    const[res, setRes] = useState({n: 0, mean: 0, variance: 0, sd: 0})

    const handleChange = (e)=>{
        setVal(e.target.value);
    }

    const evalueate = ()=>{

        let nos = val.trim().split(" ");
        nos = nos.map(element =>{
            return parseFloat(element);
        })
        
        let result = statistics(nos);
        setRes({n: nos.length, mean: result[0], variance: result[1], sd: result[2]})
        
    }

    const reset = ()=>{
        setVal("");
        setRes({n: 0, mean: 0, variance: 0, sd: 0});
    }
    
  return (
    <div className='box'>
          <h2>Mean, Variance & S.D.</h2>
          <ul>
            <li>
                <p>Enter space seperated data: </p>
                <textarea type="text" className='inp large-inp' name='data' value={val} onChange={handleChange} />
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
                  No. of terms: <span className="underline">{res.n}</span>
              </li>
              <li>
                  Mean: <span className="underline">{res.mean}</span>
              </li>
              <li>
                  Variance: <span className="underline">{res.variance}</span>
              </li>
              <li>
                  Standard Deviation: <span className="underline">{res.sd}</span>
              </li>
          </ul>
    </div>
  )
}

export default Statistics