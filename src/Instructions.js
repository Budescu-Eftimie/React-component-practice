import { Component } from "react";
import emoji from "./emoji.svg";

export default class Instructions extends Component {
    render() {
        return (
            <div className="instructions">
                <img alt="laughing crying emoji" src={emoji} />
                <p>Click on an emoji to view emoji short name</p>
            </div>
        );
    }
}
