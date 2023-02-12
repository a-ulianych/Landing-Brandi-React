import React from "react";
import "./WorksSelector.css";

const WorksSelector = (props) => {
    return (
        <div className="works_selector">
            <button className="works_btn active">
                {props.forWorksSelector.button1}
            </button>
            <button className="works_btn">
                {props.forWorksSelector.button2}
            </button>
            <button className="works_btn">
                {props.forWorksSelector.button3}
            </button>
            <button className="works_btn">
                {props.forWorksSelector.button4}
            </button>
            <button className="works_btn">
                {props.forWorksSelector.button5}
            </button>
        </div>
    );
}

export default WorksSelector;