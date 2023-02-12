import React from "react";
import style from "./IntroText.module.css";

const IntroText = (props) => {
    return (
        <div className={style.text_wrapper}>
            <p className={style.intro_title}>
                {props.forIntroText.introTitle.title} <b className={style.intro_name}>{props.forIntroText.introTitle.titleBold}</b>!
            </p>
            <p className={style.intro_subtitle}>
                <span className={style.green}>{props.forIntroText.introSubtitle.subtitleGreen}</span> {props.forIntroText.introSubtitle.subtitle}
            </p>
            <p className={style.intro_small}>
                {props.forIntroText.introSmall}
            </p>
        </div>
    );
}

export default IntroText;