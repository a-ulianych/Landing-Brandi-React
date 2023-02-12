import React from "react";
import containerStyle from "../../../App.module.css";
import WorksSelector from "./WorksSelector/WorksSelector";
import WorksImages from "./WorksImages/WorksImages";

const WorksSection = (props) => {
    return (
        <section className="works">
            <div className={containerStyle.container}>
                <article className="section_header">
                    <h3 className="section_name">
                        {props.forWorksSection.sectionName}
                    </h3>
                    <h4 className="section_subheader">
                        {props.forWorksSection.sectionSubheader}
                    </h4>
                </article>
                <WorksSelector forWorksSelector={props.forWorksSection.worksSelector}/>
            </div>

            <WorksImages/>
        </section>
    );
}

export default WorksSection;