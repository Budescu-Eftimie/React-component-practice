import emoji from "./emoji.svg";
import "./Instructions.css";

export default function Instructions() {
    return (
        <div className="instructions">
            <img alt="laughing crying emoji" src={emoji} />
            <p>Click on an emoji to view emoji short name</p>
        </div>
    );
}
