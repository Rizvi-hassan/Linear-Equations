import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const handleClick = (e)=>{
        const links =  document.getElementsByClassName('links')
        const nav = document.querySelector('#navbar');
        const bars = document.querySelector('#bars');
        for (let i  = 0; i  < links.length; i ++) {
            const element = links[i];
            element.classList.remove("focus")
        }
        e.target.classList.add("focus")
        nav.classList.remove('show')
        bars.classList.remove('active')

        // console.log(e.target);
    }
    // document.getElementsByClassName('links')[0].
  return (
    <>
        <ul className="navbar" id='navbar'>
            <div className="menu">Menu</div>
            <li>
                <Link className='links focus' to="/" onClick={handleClick}>Linear Equations in 2 Variable</Link>
            </li>
            <li>
                <Link className='links ' to="threeEqn" onClick={handleClick}>Linear Equations in 3 Variable</Link>
            </li>
            <li>
                  <Link className='links ' to="polarRect" onClick={handleClick}>Polar To Rectangular</Link>
            </li>
            <li>
                  <Link className='links ' to="rectPolar" onClick={handleClick}>Rectangular To Polar</Link>
            </li>
            <li>
                  <Link className='links ' to="statistics" onClick={handleClick}>
                    Mean, variance, standard deviation
                  </Link>
            </li>
        </ul>
    </>
  )
}

export default Navbar