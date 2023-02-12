import React from "react";
import style from "./AdaptiveNavButton.module.css";

const AdaptiveNavButton = () => {
    return (
        <button className={style.nav_toggle} type="button">
            <span className={style.nav_toggle__item}>Menu</span>
        </button>
    );
}

export default AdaptiveNavButton;