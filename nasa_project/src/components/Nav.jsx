import React from 'react'

const Nav = () => {
  return (
    <>
        <div className="container">
        <nav>
            <div className="left">
                <img src="img/brand-logo.svg" alt=""/>
                <p>NASA <b>TECHNOLOGY<br/>TRANSFER</b> PROGRAM</p>
            </div>
            <div className="right">
                <p>Patent Portfolio</p>
                <p>Add To Wishlist</p>
                <p>Log In</p>
                <img src="img/search-icon.svg" alt="search" className="search" />
                <img src="img/nasa-logo.svg" alt="nasa_main" className="logos" />
            </div>
        </nav>
        <section className="mid">
            <h2>PATENT PORTFOLIO</h2>
            <div className="plane">
                <img src="img/plane-logo.svg" alt="plane"/>
                <div className="text">
                    <h2>AEROSPACE</h2>
                    <p><small>The design, construction and operation of aircraft based on the scientific study or art of flight. </small></p>
                </div>
            </div>
            <div className="input">
                <input type="text"/>
                <p>GO</p>
            </div>
        </section>
    
        <hr/>
       </div>
    </>
  )
}

export default Nav