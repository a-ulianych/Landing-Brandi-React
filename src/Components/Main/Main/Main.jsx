import React from "react";
import "./Main.css";
import FeaturesSection from "../FeaturesSection/FeaturesSection/FeaturesSection";
import WorksSection from "../WorksSection/WorksSection";
import TeamSection from "../TeamSection/TeamSection/TeamSection";

const Main = (props) => {
    return (
        <main className="main">
            <FeaturesSection forFeaturesSection={props.forMain.featuresSection}/>
            <WorksSection forWorksSection={props.forMain.worksSection}/>
            <TeamSection forTeamSection={props.forMain.teamSection}/>
        </main>
    );
}

export default Main;