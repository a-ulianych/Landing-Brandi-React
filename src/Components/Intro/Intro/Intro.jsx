import React from "react";
import containerStyle from "../../../App.module.css";
import style from "./Intro.module.css";
import Header from "../../Header/Header/Header";
import IntroText from "../IntroText/IntroText";
import IntroSocialLinks from "../IntroSocialLinks/IntroSocialLinks";

const Intro = (props) => {
    return (
        <div className={style.intro}>
            <Header forHeader={props.forIntro.header}/>
            <div className={style.intro_wrapper}>
                <div className={containerStyle.container}>
                    <IntroText forIntroText={props.forIntro.introText}/>
                    <IntroSocialLinks/>
                </div>
            </div>
        </div>
    );
}

export default Intro;