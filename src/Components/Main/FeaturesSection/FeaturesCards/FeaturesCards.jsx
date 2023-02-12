import React from "react";
import style from "./FeaturesCards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const FeaturesCards = (props) => {
    return (
        <div className={style.features_cards}>

            <div className="feature_card">
                <article className={style.features_article}>
                    <h4 className={style.features_header}>
                        <FontAwesomeIcon icon={solid("star")} className={style.features_header_img} />
                        {props.forFeaturesCards.featureCard1.header}
                    </h4>
                    <p className={style.features_paragraph}>
                        {props.forFeaturesCards.featureCard1.paragraph}
                    </p>
                </article>
            </div>

            <div className="feature_card">
                <article className={style.features_article}>
                    <h4 className={style.features_header}>
                        <FontAwesomeIcon icon={solid("download")} className={style.features_header_img} />
                        {props.forFeaturesCards.featureCard2.header}
                    </h4>
                    <p className={style.features_paragraph}>
                        {props.forFeaturesCards.featureCard2.paragraph}
                    </p>
                </article>
            </div>

            <div className="feature_card">
                <article className={style.features_article}>
                    <h4 className={style.features_header}>
                        <FontAwesomeIcon icon={solid("file")} className={style.features_header_img} />
                        {props.forFeaturesCards.featureCard3.header}
                    </h4>
                    <p className={style.features_paragraph}>
                        {props.forFeaturesCards.featureCard3.paragraph}
                    </p>
                </article>
            </div>

            <div className="feature_card">
                <article className={style.features_article}>
                    <h4 className={style.features_header}>
                        <FontAwesomeIcon icon={solid("comment")} className={style.features_header_img} />
                        {props.forFeaturesCards.featureCard4.header}
                    </h4>
                    <p className={style.features_paragraph}>
                        {props.forFeaturesCards.featureCard4.paragraph}
                    </p>
                </article>
            </div>

            <div className="feature_card">
                <article className={style.features_article}>
                    <h4 className={style.features_header}>
                        <FontAwesomeIcon icon={solid("layer-group")} className={style.features_header_img} />
                        {props.forFeaturesCards.featureCard5.header}
                    </h4>
                    <p className={style.features_paragraph}>
                        {props.forFeaturesCards.featureCard5.paragraph}
                    </p>
                </article>
            </div>

            <div className="feature_card">
                <article className={style.features_article}>
                    <h4 className={style.features_header}>
                        <FontAwesomeIcon icon={solid("cube")} className={style.features_header_img} />
                        {props.forFeaturesCards.featureCard6.header}
                    </h4>
                    <p className={style.features_paragraph}>
                        {props.forFeaturesCards.featureCard6.paragraph}
                    </p>
                </article>
            </div>
        </div>
    );
}

export default FeaturesCards;