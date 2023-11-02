import React from "react";
import style from "./header.module.css";
import img1 from "./img/IMAGE.png";
import img2 from "./img/IMAGE (2).png";

const Header = () => {
  return (
    <div className={style.header}>
      <h1>Discover,
        <br/>
        nurture, bloom</h1>
      <h3>
        Product & Engineering Recruitment
        <br />
        va va bloom, with a human touch and a dash of
      </h3>

      <img src={img1} id={style.img1} alt="" />
      <img src={img2} id={style.img2} alt="" />
    </div>
  );
};

export default Header;
