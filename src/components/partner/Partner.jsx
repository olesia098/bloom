import React from 'react';
import style from "./partner.module.css"
import bumble from "./img/bumble.png"
import deliveroo from "./img/deliveroo.png"
import depop from "./img/depop.png"
import monping from "./img/monping.png"
import monzo from "./img/monzo.png"
import zoopla from "./img/zoopla.png"


const Partner = () => {
    return (
        <div className={style.partner}>
            <img src={monzo} alt="" />
            <img src={deliveroo} alt="" />
            <img src={zoopla} alt="" />
            <img src={monping} alt="" />
            <img src={depop} alt="" />
            <img src={bumble} alt="" />
        </div>
    );
};

export default Partner;