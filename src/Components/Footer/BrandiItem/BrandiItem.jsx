import React from "react";
import style from "./BrandiItem.module.css";

const BrandiItem = (props) => {
    return (
        <div className="brandi_item">
            <div className={style.brandi_title}>
                {props.forBrandiItem.title}
            </div>
            <div className="brandi_text">
                {props.forBrandiItem.text}
            </div>
        </div>
    );
}

export default BrandiItem;