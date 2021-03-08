import React, {useState, useEffect} from "react"
import "./drumPad.css"
import snDrum from "./sn-drum.wav"
import useSound from "use-sound"


function DrumPad() {
    const drumBank = [
        {
          keyCode: 81,
          keyTrigger: 'Q',
          id: 'Heater-1',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        },
        {
          keyCode: 87,
          keyTrigger: 'W',
          id: 'Heater-2',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        },
        {
          keyCode: 69,
          keyTrigger: 'E',
          id: 'Heater-3',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        },
        {
          keyCode: 65,
          keyTrigger: 'A',
          id: 'Heater-4',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        },
        {
          keyCode: 83,
          keyTrigger: 'S',
          id: 'Clap',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        },
        {
          keyCode: 68,
          keyTrigger: 'D',
          id: 'Open-HH',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        },
        {
          keyCode: 90,
          keyTrigger: 'Z',
          id: "Kick-n'-Hat",
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        },
        {
          keyCode: 88,
          keyTrigger: 'X',
          id: 'Kick',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        },
        {
          keyCode: 67,
          keyTrigger: 'C',
          id: 'Closed-HH',
          url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }
      ];
    
      const [text, setText] = useState("");
      const [index, setIndex] = useState(0);
      const [theSound] =    useSound(drumBank[index].url)
      
      
      
      function playThis(num) {
        setIndex(num)
        setText(drumBank[num].id);
        theSound(num)
        
      }
    
       
    
   

    return (
        <div id="drum-machine" className="drumpad-container">
            <div id="display" className="drumpad-display">
                <p>{text}</p>
            </div>
            <button className="drum-pad" id="drum-pad-1" onClick={() => playThis(0)}>Q</button>
            <button className="drum-pad" id="drum-pad-2" onClick={() => playThis(1)}>W</button>
            <button className="drum-pad" id="drum-pad-3" onClick={() => playThis(2)}>E</button>
            <button className="drum-pad" id="drum-pad-4" onClick={() => playThis(3)}>A</button>
            <button className="drum-pad" id="drum-pad-5" onClick={() => playThis(4)}>S</button>
            <button className="drum-pad" id="drum-pad-6" onClick={() => playThis(5)}>D</button>
            <button className="drum-pad" id="drum-pad-7" onClick={() => playThis(6)}>Z</button>
            <button className="drum-pad" id="drum-pad-8" onClick={() => playThis(7)}>X</button>
            <button className="drum-pad" id="drum-pad-9" onClick={() => playThis(8)}>C</button>
            </div>
    )
}

export default DrumPad