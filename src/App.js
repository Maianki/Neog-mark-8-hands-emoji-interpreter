import "./styles.css";
import React, { useState } from "react";

const emojiDictionary = {
  "👋": "Waving Hand",
  "🤚": "Raised Back of Hand",
  "✋": "Raised Hand",
  "🖖": "Vulcan Salute",
  "👌": "Ok Hand Sign",
  "🤏": "Pinching Hand",
  "🤞": "Crossed Fingers",
  "🤟": "Love-You Gesture",
  "🤙": "Call Me Hand",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "👊": "Oncoming Fist",
  "✊": "Raised Fist",
  "👏": "Clapping Hands",
  "🙌": "Person Raising Both Hands In Celebration",
  "🤝": "Handshake",
  "🙏": "Person With Folded Hands",
  "✌": "Victory Hand"
};

var emojis = Object.keys(emojiDictionary);

export default function App() {
  const [userValue, setUserValue] = useState("");
  function userInputHandler(event) {
    var inputMeaning = emojiDictionary[event.target.value];
    if (inputMeaning === undefined) {
      inputMeaning = "We don't have this emoji in our database";
    }
    setUserValue(inputMeaning);
  }

  function emojiClickHandler(emoji) {
    setUserValue(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1>Hands Emoji Interpreter</h1>
      <input onChange={userInputHandler}></input>
      <div className="user-input">{userValue}</div>
      <div className="display-emoji">
        <ul>
          {emojis.map((emoji) => {
            return (
              <li
                className="li-emoji"
                onClick={() => emojiClickHandler(emoji)}
                key={emoji}
              >
                {emoji}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
