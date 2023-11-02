import React from "react";
import style from "./footer.module.css";
import gogle from "./img/Google icon.png";
import rating from "./img/Rating.png";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.reting}>
        <img src={gogle} id={style.gogle} alt="" />
        <div className={style.number}>
          <p>5.0</p>
          <img src={rating} alt="" />
        </div>
      </div>
      <ul className={style.ul}>
        <li>Grow your career</li>
        <li>Build a team</li>
      </ul>
      <ul className={style.ul}>
        <li>Meet the founders</li>
        <li>Mentorship</li>
        <li>Say hello</li>
      </ul>
    </div>
  );
};

export default Footer;
