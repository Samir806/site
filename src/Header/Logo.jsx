import React from 'react'
import './Header.css'

const Logo = ()=>{
    return(
        <div className="col-auto"> 
            <ul className='navbar'>
                <li><a href="/">Main</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    )
}

export default Logo