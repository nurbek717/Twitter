import React from "react"
import "./footer.css"


import lupa from "../../Assets/img/search.svg"

import btn from "../../Assets/img/uchtanuqta.svg"
import settingis from "../../Assets/img/settings.svg"

import  mushtariy from "../../Assets/img/mushtariy.svg"
import  shuxratbek from "../../Assets/img/shuxratbek.svg"
function Footer() {
  return <>
  <footer className="footer">
  <form className="footer__from">
  <label className="footer__lable" htmlFor="searching">
  <img className="footer__lupa" src={lupa} alt="" />
  </label>
  <input className="footer_input" type="search" placeholder="Search Twitter" id="searching" required/>
  </form>
  
  
  <section className="setting">
  <ul className="setting__lest">
  <li className="settimg__item">
  <h4 className="settimg__heading ">Trends for you</h4>
  <button className="setting__btn"><img src={settingis} alt="" /></button>
  </li>
  <li className="settimg__item">
  <div className="setting__bog">
  <p className="setting__text">Trending in Germany</p>
  <h5 className="settimg__heading heading__h5 ">Revolution</h5>
  <p className="setting__text">50.4K Tweets</p>
  </div>
  <button className="setting__btn"><img src={btn} alt="" /></button>
  </li>
  <li className="settimg__item">
  <div className="setting__bog">
  <p className="setting__text">Trending in Germany</p>
  <h5 className="settimg__heading heading__h5 ">Revolution</h5>
  <p className="setting__text">50.4K Tweets</p>
  </div>
  <button className="setting__btn"><img src={btn} alt="" /></button>
  </li>
  <li className="settimg__item">
  <div className="setting__bog">
  <p className="setting__text">Trending in Germany</p>
  <h5 className="settimg__heading heading__h5 ">Revolution</h5>
  <p className="setting__text">50.4K Tweets</p>
  </div>
  <button className="setting__btn"><img src={btn} alt="" /></button>
  </li>
  <li className="settimg__item">
  <a className="setting__link" href="#">Show more</a>
  </li>
  </ul>
  </section>
  
  <section className="might-like">
  <ul className="setting__lest">
  <li className="settimg__item">
  <h4 className="settimg__heading">You might like</h4>
  </li>
  
  <li  className="settimg__item">
      <div className="box">
     <img src={mushtariy} alt="" width={60} height={60} />
       <p className="text__bobur"><span className="bobur">Bobur</span> <br/> @bobur_mavlonov</p>
       <button className="btn__icon"><img src={btn} alt="" height={20} width={20} /></button>
  </div>
  </li>
  <li  className="settimg__item">
      <div className="box">
     <img src={shuxratbek} alt="" width={60} height={60}/>
       <p className="text__bobur"><span className="bobur">Bobur</span> <br/> @bobur_mavlonov</p>
       <button className="btn__icon"><img src={btn} alt="" height={20} width={20} /></button>
  </div>
  </li>
  <li className="settimg__item">
  <a className="setting__link" href="#">Show more</a>
  </li>
  </ul>
  <p className="might-like__text">Terms of Service Privacy Policy Cookie Policy <br/> Imprint Ads Info More ··· © 2021 Twitter, Inc. </p>
  </section>
  </footer>
  
  
  </>
}

export default Footer