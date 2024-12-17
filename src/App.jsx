import { useState, useEffect, useRef } from 'react';
import './App.css';
import backgroundVideo from './assets/background.mp4';

function App() {
  const [currentState, setCurrentState] = useState(1);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [name4, setName4] = useState("");

  const [inputValue, setInputValue] = useState("");

  const [flashColor, setFlashColor] = useState("");

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  useEffect(() => {
    setName1(getRandomWord(8))
    setName2(getRandomWord(7))
    setName3(getRandomWord(6))
    setName4(getRandomWord(5))
  }, [])

  function getRandomLetter() {
    const randomIndex = Math.floor(Math.random() * letters.length)
    return letters[randomIndex]
  }

  function getRandomWord(length) {
    let word = "";
    for (let i = 0; i < length; i++) {
      let randLetter = getRandomLetter()
      word += randLetter;
    }
    return word;
  }
  
  function handleHover() {
    let count = 0;

    const interval = setInterval(() => {
      if (count < 5) {
        setName1(getRandomWord(8));
        count++;
      } else {
        clearInterval(interval);
        setName1("MANGROVES");
      }
    }, 50);
  }

  function handleHover2() {
    let count = 0;

    const interval = setInterval(() => {
      if (count < 5) {
        setName2(getRandomWord(8));
        count++;
      } else {
        clearInterval(interval);
        setName2("WILLOWS");
      }
    }, 50);
  }

  function handleHover3() {
    let count = 0;

    const interval = setInterval(() => {
      if (count < 5) {
        setName3(getRandomWord(8));
        count++;
      } else {
        clearInterval(interval);
        setName3("OBSIDIAN");
      }
    }, 50);
  }

  function handleHover4() {
    let count = 0;

    const interval = setInterval(() => {
      if (count < 5) {
        setName4(getRandomWord(8));
        count++;
      } else {
        clearInterval(interval);
        setName4("BALLOON");
      }
    }, 50);
  }

  function handleButtonClick() {
    if (inputValue === "IPS") {
      setFlashColor("green");
      setTimeout(() => {
        setFlashColor("")
        setCurrentState(2);
      }, 1000);
    } else {
      setFlashColor("red");
      setTimeout(() => {
        setFlashColor("");
        setCurrentState(3);
      }, 1000);
    }
  }
  
  return (
    <>
      {currentState === 1 && (
        <div className="content">
          <video className="video-background" autoPlay muted loop>
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="container">
            <div className="glitch-image"></div>
            <div className="glitch-image"></div>
            <div className="glitch-image"></div>
            <div className="glitch-image"></div>
            <div className="glitch-image"></div>  
            <div className="glitch-image"></div>  
            <div className="input-zone">
              <input 
                type="text" 
                placeholder=" "
                className={`input-system ${flashColor ? `flash-${flashColor}` : ''}`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                maxLength="7"
                />
              <button 
                className="input-button"
                onClick={handleButtonClick}
                ></button>
            </div>
          </div>
        </div>
      )}
      {currentState === 2 && (
        <div className="stateTwo">
          <img src="/eye.png" alt="Eye" className="stateTwoImage" />
          <div className="stateTwoNameInviter">Invitation</div>
          <div className="stateTwoName1" onMouseEnter={handleHover}>{name1}</div>
          <div className="stateTwoName2" onMouseEnter={handleHover2}>{name2}</div>
          <div className="stateTwoName3" onMouseEnter={handleHover3}>{name3}</div>
          <div className="stateTwoName4" onMouseEnter={handleHover4}>{name4}</div>
        </div>
      )}
      {currentState === 3 && (
        <div className="content">
          <div class="gradient-bg"></div>
        </div>
      )}
    </>
  );
}

export default App;