import "./styles.css";
import React, { useState } from "react";

//dictionay to store emoji's and corressponding meaninng
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

//Create emoji array
var emojis = Object.keys(emojiDictionary);

export default function App() {
  const [userValue, setUserValue] = useState("");

  //function to handle userinput and set meaning of the emoji
  function userInputHandler(event) {
    var inputMeaning = emojiDictionary[event.target.value];
    if (inputMeaning === undefined) {
      inputMeaning = "We don't have this emoji in our database";
    }
    setUserValue(inputMeaning);
  }

  //function to handle user click and set desired value to emoji
  function emojiClickHandler(emoji) {
    setUserValue(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <h1>Hands Emoji Interpreter</h1>
      <input onChange={userInputHandler}></input>
      <div class="user-input">{userValue}</div>
      <div class="display-emoji">
        <ul>
          {emojis.map((emoji) => {
            return (
              <li class="li-emoji" onClick={() => emojiClickHandler(emoji)}>
                {emoji}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
