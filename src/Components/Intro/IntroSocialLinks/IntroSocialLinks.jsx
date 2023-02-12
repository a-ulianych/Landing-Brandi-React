import React from "react";
import style from "./IntroSocialLinks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const IntroSocialLinks = () => {
    return (
        <span className={style.intro_social}>
            <a href="#">
                <FontAwesomeIcon icon={brands("twitter")} />
            </a>
            <a href="#">
                <FontAwesomeIcon icon={brands("facebook-f")} />
            </a>
            <a href="#">
                <FontAwesomeIcon icon={brands("google-plus-g")} />
            </a>
        </span>
    );
}

export default IntroSocialLinks;