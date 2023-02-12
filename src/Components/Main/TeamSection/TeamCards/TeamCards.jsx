import React from "react";
import style from "./TeamCards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import team_img1 from '../../../../assets/team/1.jpg';
import team_img2 from '../../../../assets/team/2.jpg';
import team_img3 from '../../../../assets/team/3.jpg';
import team_img4 from '../../../../assets/team/4.jpg';

const TeamCards = (props) => {
    return (
        <div className={style.team_cards}>

            <div className={style.card_item}>
                <div className={style.card_inner}>
                    <div className={style.card_img}>
                        <img src={team_img1} alt="team_img"></img>
                    </div>

                    <div className={style.card_info}>
                        <div className={style.card_title}>
                            {props.forTeamCards.cardItem1.info.title}
                        </div>
                        <div className={style.card_text}>
                            {props.forTeamCards.cardItem1.info.text}
                        </div>

                        <div className={style.card_social}>
                            <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Main#" className={style.social_icon}>
                                <FontAwesomeIcon icon={brands("twitter")} />
                            </a>

                            <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Main#" className={style.social_icon}>
                                <FontAwesomeIcon icon={brands("facebook-f")} />
                            </a>

                            <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Main#" className={style.social_icon}>
                                <FontAwesomeIcon icon={brands("google-plus-g")} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={style.card_about}>
                    <div className={style.card_name}>
                        {props.forTeamCards.cardItem1.about.name}
                    </div>
                    <div className={style.card_prof}>
                        {props.forTeamCards.cardItem1.about.prof}
                    </div>
                </div>
            </div>

            <div className={style.card_item}>
                <div className={style.card_inner}>
                    <div className={style.card_img}>
                        <img src={team_img2} alt="team_img"></img>
                    </div>

                    <div className={style.card_info}>
                        <div className={style.card_title}>
                            {props.forTeamCards.cardItem2.info.title}
                        </div>
                        <div className={style.card_text}>
                            {props.forTeamCards.cardItem2.info.text}
                        </div>

                        <div className={style.card_social}>
                            <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Main#" className={style.social_icon}>
                                <FontAwesomeIcon icon={brands("twitter")} />
                            </a>

                            <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Main#" className={style.social_icon}>
                                <FontAwesomeIcon icon={brands("facebook-f")} />
                            </a>

                            <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Main#" className={style.social_icon}>
                                <FontAwesomeIcon icon={brands("google-plus-g")} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={style.card_about}>
                    <div className={style.card_name}>
                        {props.forTeamCards.cardItem2.about.name}
                    </div>
                    <div className={style.card_prof}>
                        {props.forTeamCards.cardItem2.about.prof}
                    </div>
                </div>
            </div>

            <div className={style.card_item}>
                <div className={style.card_inner}>
                    <div className={style.card_img}>
                        <img src={team_img3} alt="team_img"></img>
                    </div>

                    <div className={style.card_info}>
                        <div className={style.card_title}>
                            {props.forTeamCards.cardItem3.info.title}
                        </div>
                        <div className={style.card_text}>
                            {props.forTeamCards.cardItem3.info.text}
                        </div>

                        <div className={style.card_social}>
                            <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Main#" className={style.social_icon}>
                                <FontAwesomeIcon icon={brands("twitter")} />
                            </a>

                            <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Main#" className={style.social_icon}>
                                <FontAwesomeIcon icon={brands("facebook-f")} />
                            </a>

                            <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Main#" className={style.social_icon}>
                                <FontAwesomeIcon icon={brands("google-plus-g")} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={style.card_about}>
                    <div className={style.card_name}>
                        {props.forTeamCards.cardItem3.about.name}
                    </div>
                    <div className={style.card_prof}>
                        {props.forTeamCards.cardItem3.about.prof}
                    </div>
                </div>
            </div>

            <div className={style.card_item}>
                <div className={style.card_inner}>
                    <div className={style.card_img}>
                        <img src={team_img4} alt="team_img"></img>
                    </div>

                    <div className={style.card_info}>
                        <div className={style.card_title}>
                            {props.forTeamCards.cardItem4.info.title}
                        </div>
                        <div className={style.card_text}>
                            {props.forTeamCards.cardItem4.info.text}
                        </div>

                        <div className={style.card_social}>
                            <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Main#" className={style.social_icon}>
                                <FontAwesomeIcon icon={brands("twitter")} />
                            </a>

                            <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Main#" className={style.social_icon}>
                                <FontAwesomeIcon icon={brands("facebook-f")} />
                            </a>

                            <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Main#" className={style.social_icon}>
                                <FontAwesomeIcon icon={brands("google-plus-g")} />
                            </a>
                        </div>

                    </div>
                </div>

                <div className={style.card_about}>
                    <div className={style.card_name}>
                        {props.forTeamCards.cardItem4.about.name}
                    </div>
                    <div className={style.card_prof}>
                        {props.forTeamCards.cardItem4.about.prof}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamCards;