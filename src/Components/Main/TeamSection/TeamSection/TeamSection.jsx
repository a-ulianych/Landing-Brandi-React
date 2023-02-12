import React from "react";
import containerStyle from "../../../../App.module.css";
import style from "./TeamSection.module.css";
import TeamCards from "../TeamCards/TeamCards";

const TeamSection = (props) => {
    return (
        <section className={style.team}>
            <div className={containerStyle.container}>
                <article className="section_header">
                    <h3 className="section_name">
                        {props.forTeamSection.sectionName}
                    </h3>
                    <h4 className="section_subheader">
                        {props.forTeamSection.sectionSubheader}
                    </h4>
                </article>

                <TeamCards forTeamCards={props.forTeamSection.teamCards}/>
            </div>
        </section>
    );
}

export default TeamSection;