import React from "react";
import containerStyle from "../../../../App.module.css";
import style from "./FeaturesSection.module.css";
import FeaturesCards from "../FeaturesCards/FeaturesCards";

const FeaturesSection = (props) => {
    return (
        <section className={style.features}>
            <div className={containerStyle.container}>
                <article className="section_header">
                    <h3 className="section_name">{props.forFeaturesSection.sectionName}</h3>
                </article>
                <FeaturesCards forFeaturesCards={props.forFeaturesSection.featuresCards}/>
            </div>
        </section>
    );
}

export default FeaturesSection;