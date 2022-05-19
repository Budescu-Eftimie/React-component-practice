import "./App.css";
import Instructions from "../Instructions/Instructions";

const displayEmojiName = (event) => alert(event.target.id);
const emojis = [
    {
        emoji: "😀",
        name: "grinning face",
    },
    {
        emoji: "🎉",
        name: "party popper",
    },
    {
        emoji: "💃",
        name: "woman dancing",
    },
];

function App() {
    const greeting = "greeting";
    const displayAction = false;
    return (
        <div className="container">
            <h1 className={greeting}>Hello, world!</h1>
            {displayAction && <p>I am writting JSX</p>}
            <Instructions />
            <ul>
                {emojis.map((emoji) => (
                    <li key={emoji.name}>
                        <button onClick={displayEmojiName}>
                            <span
                                role="img"
                                area-aria-label={emoji.name}
                                id={emoji.name}
                            >
                                {emoji.emoji}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
