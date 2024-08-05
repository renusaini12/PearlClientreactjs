import React from 'react'
import style from './Pearlclient_2.module.css'

const Pearlclient_2 = () => {
  return (
    <div >
      <div id={`${style.div1}`}>
        <div id={`${style.div2}`}>
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Password' />
          <div id={`${style.div4}`}>Show Password<i class="fa-solid fa-toggle-on"></i></div>
          <div id={`${style.div5}`}><i class="fa-solid fa-lock"></i>Forgot Password?</div>
          <div id={`${style.div6}`}>
            <p>LOG IN</p>
          </div>
        </div>
      </div>
      <div id={`${style.div7}`}>
      <p>Privacy</p>
      <p>Privacy</p>
      <p>Privacy</p>
      </div>
    </div>
  )
}
export default Pearlclient_2