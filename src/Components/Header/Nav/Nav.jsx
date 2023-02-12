import React from "react";
import style from "./Nav.module.css";

const Nav = (props) => {
    return (
        <nav className={style.header_nav}>
            <a href="#">
                {props.forNav.link1}
            </a>
            <a href="#">
                {props.forNav.link2}
            </a>
            <a href="#">
                {props.forNav.link3}
            </a>
            <a href="#">
                {props.forNav.link4}
            </a>
            <a href="#">
                {props.forNav.link5}
            </a>
        </nav>
    );
}

export default Nav;