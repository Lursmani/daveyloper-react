import React, {useState, useEffect} from "react"
import "./drumPad.css"
import {Helmet} from "react-helmet"
import Heater1 from "./Heater-1.mp3"
import Heater2 from "./Heater-2.mp3"
import Heater3 from "./Heater-3.mp3"
import useSound from "use-sound"
import ClosedHH from './Cev_H2.mp3'
import Kick from './RP4_KICK_1.mp3'
import KicknHat from './Kick_n_Hat.mp3'
import OpenHH from './Dsc_Oh.mp3'
import Heater6 from './Heater-6.mp3'
import Heater4 from './Heater-4_1.mp3'
import useKeyPress from "react-use-keypress"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faVolumeOff} from "@fortawesome/free-solid-svg-icons"


function DrumPad() {
    const drumBank = [
        {
          keyTrigger: 'q',
          id: 'Heater-1',
          url: Heater1
        },
        {
          keyTrigger: 'w',
          id: 'Heater-2',
          url: Heater2
        },
        {
          keyTrigger: 'e',
          id: 'Heater-3',
          url: Heater3
        },
        {
          keyTrigger: 'a',
          id: 'Heater-4',
          url: Heater4
        },
        {
          keyTrigger: 's',
          id: 'Clap',
          url: Heater6
        },
        {
          keyTrigger: 'd',
          id: 'Open-HH',
          url:  OpenHH
        },
        {
          keyTrigger: 'z',
          id: "Kick-n'-Hat",
          url: KicknHat
        },
        {
          keyTrigger: 'x',
          id: 'Kick',
          url: Kick
        },
        {
          keyTrigger: 'c',
          id: 'Closed-HH',
          url: ClosedHH
        },
        
      ];

      
     
     
      const [volume, setVolume] = useState(1)
      let volumeNum = volume*100
      const [powerOn, setPowerOn] = useState(true)
      const [text, setText] = useState("");
      let audio0 = () => {sound0()}
      let audio1 = () => {sound1()}
      let audio2 = () => {sound2()}
      let audio3 = () => {sound3()}
      let audio4 = () => {sound4()}
      let audio5 = () => {sound5()}
      let audio6 = () => {sound6()}
      let audio7 = () => {sound7()}
      let audio8 = () => {sound8()}
      let [sound0] = useSound(drumBank[0].url, {volume: volume} )
      let [sound1] = useSound(drumBank[1].url, {volume: volume} ) 
      let [sound2] = useSound(drumBank[2].url, {volume: volume} ) 
      let [sound3] = useSound(drumBank[3].url, {volume: volume} ) 
      let [sound4] = useSound(drumBank[4].url, {volume: volume} )
      let [sound5] = useSound(drumBank[5].url, {volume: volume} )
      let [sound6] = useSound(drumBank[6].url, {volume: volume} )
      let [sound7] = useSound(drumBank[7].url, {volume: volume} )
      let [sound8] = useSound(drumBank[8].url, {volume: volume} )
      
      
      
     

    useKeyPress(["q", "w", "e", "a", "s", "d", "z", "x", "c"], (event) => {
      if (event.key === "q") {
        playThis(0) 
      } else
      if (event.key === "w") {
        playThis(1) 
      } else
      if (event.key === "e") {
        playThis(2) 
      } else
      if (event.key === "a") {
        playThis(3) 
      } else
      if (event.key === "s") {
        playThis(4) 
      } else
      if (event.key === "d") {
        playThis(5) 
      } else
      if (event.key === "z") {
        playThis(6) 
      } else
      if (event.key === "x") {
        playThis(7) 
      } else
      if (event.key === "c") {
        playThis(8) 
      } 
    })
     
    

   function playThis(num) {
  if (powerOn === true) 
         { setText(drumBank[num].id)
          switch(num) {
          case 0: audio0()
          break;
          case 1: audio1()
          break;
          case 2: audio2()
          break;
          case 3: audio3()
          break;
          case 4: audio4()
          break;
          case 5: audio5()
          break;
          case 6: audio6()
          break;
          case 7: audio7()
          break;
          case 8: audio8()
          break;
        }
      }
        else {setText("Power is off")}
      } 


     
    return (
        
        <div id="drum-machine" className="drumpad-container" >
                   <Helmet>
                     <title>Drumpad - Davit Lursmanashvili</title>
                     <meta type="description" content="Davit Lursmanashvili. This project is a Drumpad that uses 
                     HTML, CSS and React to play sounds on key and button presses." />
                  </Helmet>

            <h3 id={powerOn ? "drum-power-text-on" : "drum-power-text-off"}>Power: </h3>
            <div id="drum-power-div" onClick={() => setPowerOn(!powerOn)}>
              <div id={powerOn ? "drum-power-button-on" : "drum-power-button-off"}>

              </div>
            </div>
            <div id="display" className="drumpad-display">
                <p className="drumpad-text">{text}</p>
            </div>
            <div id="drum-volume-div">
            <h3 id="drum-volume-value"><FontAwesomeIcon icon={faVolumeOff} />  {volumeNum}</h3>
              <input 
              id="drum-volume-bar"
              type="range"
               min={0}
               max={1} 
               step={0.01} 
               value={volume} 
               onChange={(event)=> setVolume(event.target.valueAsNumber)} />
               
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