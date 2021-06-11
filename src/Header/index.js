import React from 'react'
import Header from './Header'
import Logo from './Logo'

const Index = ()=>{
    return(
        <div className='block-container head'>
            <div className='container'>
                <div className='row space-between-x items-center-y'>
                    <Header/>
                    <Logo />
                </div>
            </div>
        </div>
    )
}

export default Index