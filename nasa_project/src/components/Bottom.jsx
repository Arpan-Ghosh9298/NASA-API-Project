import React from 'react'
import logos from '../assets/img/'
const Bottom = () => {
  return (
    <>
    <div class="view">
                <button class="view">View more patents</button><br/>
                <img src={logos} alt="nasa_main"/>
                <p><small>Stay up to date, follow NASA's Technology Transfer Program on</small></p>
                <p>Contact</p>
                <p><small>E-mail : hello@nasa.com | Hotline: +1 131 138 138</small></p>
            </div>
            <hr/>
            <div class="last">
                <p>NASA - © 2022. ALL RIGHTS RESERVED.</p>
            </div>
    </>
  )
}

export default Bottom