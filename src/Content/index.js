import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Main from './Pages/Main'
import About from './Pages/About'
import Banner from './Banner'

const Content = ()=>{
return(
    <div className='container'>
        <div className='row'>
            <div className='col-7'>
                <Router>
                    <Route exact path='/' component={Main}/>
                    <Route path='/about' component={About}/>
                </Router>
            </div>
            <div className='col-3'>
                <Banner />
            </div>
        </div>
    </div>
    
)
}

export default Content
