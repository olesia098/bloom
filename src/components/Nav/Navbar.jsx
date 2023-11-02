import React from 'react';
import style from "./navbar.module.css"
import icon from "./img/icon.png"

const Navbar = () => {
    return (
        <div className={style.navbar}>
            <img src={icon} alt="" />
            <ul className={style.ul}>
                <li>Grow your career</li>
                <li>Build a team</li>
                <li>Meet the founders</li>
                <li>Mentorship</li>
                <li>Say hello</li>
            </ul>
        </div>
    );
};

export default Navbar;