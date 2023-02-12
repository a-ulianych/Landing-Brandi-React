import React from "react";
import style from "./ExploreItem.module.css";

const ExploreItem = (props) => {
    return (
        <div className="explore_item">
            <div className={style.explore_title}>
                {props.forExploreItem.title}
            </div>
            <div className={style.explore_links}>
                <div className="block">
                    <div className="explore_link">
                        <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Footer#">
                            {props.forExploreItem.links.linkTitle1}
                        </a>
                    </div>
                    <div className="explore_link">
                        <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Footer#">
                            {props.forExploreItem.links.linkTitle2}
                        </a>
                    </div>
                    <div className="explore_link">
                        <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Footer#">
                            {props.forExploreItem.links.linkTitle3}
                        </a>
                    </div>
                    <div className="explore_link">
                        <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Footer#">
                            {props.forExploreItem.links.linkTitle4}
                        </a>
                    </div>
                </div>

                <div className="block">
                    <div className="explore_link">
                        <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Footer#">
                            {props.forExploreItem.links.linkTitle5}
                        </a>
                    </div>
                    <div className="explore_link">
                        <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Footer#">
                            {props.forExploreItem.links.linkTitle6}
                        </a>
                    </div>
                    <div className="explore_link">
                        <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Footer#">
                            {props.forExploreItem.links.linkTitle7}
                        </a>
                    </div>
                    <div className="explore_link">
                        <a href="Pet projects/Brandi(React)/brandi-app/src/Components/Footer#">
                            {props.forExploreItem.links.linkTitle8}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExploreItem;