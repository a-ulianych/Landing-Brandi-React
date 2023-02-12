import React from "react";
import containerStyle from "../../../App.module.css"
import style from "./Header.module.css";
import Nav from "../Nav/Nav";
import AdaptiveNavButton from "../AdaptiveNavButton/AdaptiveNavButton";

const Header = (props) => {
    return (
        <header className={style.header}>
            <div className={containerStyle.container}>
                <div className={style.header_inner}>

                    <h2 className={style.header_name}>
                        {props.forHeader.headerName}
                    </h2>
                    <Nav forNav={props.forHeader.nav}/>
                    <AdaptiveNavButton/>

                </div>
            </div>
        </header>
    );
}

export default Header;