import React, { useEffect, useState } from 'react'
import "./Nav.css";

function Nav() {
const [show, handleShow] = useState(false);

const transitionNavBar = () => {
  if(window.scrollY > 100){
    handleShow(true);
  }else{
    handleShow(false);
  }
}

useEffect(() => {
window.addEventListener("scroll" , transitionNavBar);
return () => window.removeEventListener('scroll', transitionNavBar);
}, [])
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <section>
    <div className="nav_left">
      <img
      className="nav_logo"
      alt="logo"
      src="https://www.linkpicture.com/q/logo_275.png"
      />
      <div className="nav_links">
        <a href='/'>Home</a>
        <a href='/'>Tv Shows</a>
        <a href='/'>Movies</a>
        <a href='/'>New & Popular</a>
        <a href='/'>My List</a>
        <a href='/'>Browse by Languages</a>

      </div>
    </div>
    <div className="nav_right">
    <img
      className='nav_avatar' 
      src='https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSlfK5WWy_4dOWSZuTo9rUuHiyO897BgM73En6gwx4elzvtFfZypqO9hjHChnRTWp0p_O8cajXPbLJ8eBK1COvYZqyD1Ajs.png?r=a83' alt='' />
      </div>

</section>
</div>
);
}

export default Nav;