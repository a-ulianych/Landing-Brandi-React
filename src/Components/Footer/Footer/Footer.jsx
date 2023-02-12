import React from "react";
import containerStyle from "../../../App.module.css";
import style from "./Footer.module.css";
import BrandiItem from "../BrandiItem/BrandiItem";
import SubscribeItem from "../SubscribeItem/SubscribeItem";
import ExploreItem from "../ExploreItem/ExploreItem";

const Footer = (props) => {
    return (
        <footer className={style.footer}>
            <div className={containerStyle.container}>
                <div className={style.footer_items}>
                    <BrandiItem forBrandiItem={props.forFooter.brandiItem}/>
                    <SubscribeItem forSubscribeItem={props.forFooter.subscribeItem}/>
                    <ExploreItem forExploreItem={props.forFooter.exploreItem}/>
                </div>
            </div>
        </footer>
    );
}

export default Footer;