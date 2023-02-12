import React from "react";
import style from "./SubscribeItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

class SubscribeItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
        this.inputValue = "";

        // First type of method declaration in class component: function declaration, bind to class context for normal work (1)
        this.handlerSubmit = this.handlerSubmit.bind(this);
    }

    // Second type of method declaration in class component: arrow function(which haven't context, so it is working normally in class context (2)
    handlerChange = (e) => {
        this.inputValue = e.target.value;
    }

    // First type of method declaration in class component: function declaration (1)
    handlerSubmit(e) {
        this.setState({email: this.inputValue});
        e.preventDefault();
    }

    render() {
        return (
            <div className="subscribe_item">
                <div className={style.subscribe_title}>
                    <label htmlFor="subscribe_input">
                        {this.props.forSubscribeItem.title}
                    </label>
                    <p>
                        Your email is: {this.state.email}
                    </p>
                </div>

                <form className={style.subscribe} action="/" method="post" onSubmit={this.handlerSubmit}>
                    <input type="email" id="subscribe_input" className={style.subscribe_input} onChange={this.handlerChange}></input>
                    <button className={style.subscribe_btn}  type="submit">
                        <FontAwesomeIcon icon={solid("arrow-right")} className={style.subscribe_btn_img}/>
                    </button>
                </form>

                <div className="subscribe_text">
                    {this.props.forSubscribeItem.text}
                </div>
            </div>
        );
    }
}

export default SubscribeItem;