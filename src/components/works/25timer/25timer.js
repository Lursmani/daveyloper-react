import React, {useState, useEffect, useRef} from "react"
import "./25timer.css"
import useSound from "use-sound"
import Beep from "./beep.wav"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faArrowUp, faArrowDown} from "@fortawesome/free-solid-svg-icons"
import {Helmet} from "react-helmet"




function Timer25() {

        const [session, setSession] = useState(1500)
        const [rest, setRest] = useState(300)
        const [seconds, setSeconds] = useState(session)
        const secondsLeft = seconds % 60
        const secondsLeft0 = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft
        const minutes = Math.floor((seconds / 60))
        const sessionMinutes = Math.floor(session / 60)
        const restMinutes = Math.floor(rest / 60)
        const countRef = useRef(null)
        const [sessionPhase, setSessionPhase] = useState(true)
        const [timerRunning, setTimerRunning] = useState(false)
        const [timerHasBeenRun, setTimerHasBeenRun] = useState(false)
        const [Sound] = useSound(Beep)
        let playSound = () => {Sound()}


        function sessionStart() {
            if (sessionPhase === true && timerHasBeenRun === false) {
                setSeconds(session)
                
            } else if (sessionPhase === false && timerHasBeenRun === false){
                setSeconds(rest)
                
            }

            if (timerRunning === false) { countRef.current = setInterval(() => {
               setSeconds(seconds => seconds - 1)
               
                   
               
               console.log(seconds)
            }, 1000);} else if (timerRunning === true && timerHasBeenRun === true) {
                clearInterval(countRef.current)
            }
            setTimerRunning(!timerRunning)
            setTimerHasBeenRun(true)
        }
        
        useEffect(() => {
            if (seconds < 0 && sessionPhase === true) {
                playSound()
                setSeconds(rest) 
                setSessionPhase(false)
            } else if 
            (seconds < 0 && sessionPhase === false) {
                playSound()
                setSeconds(session)
                setSessionPhase(true)
            }
        }, [seconds])


        function sessionIncrement() {
            setSession(session => session + 60)
            console.log(session)
        }
        function sessionDecrement() {
           session > 60 && setSession(session => session - 60)
            console.log(session)
        }
        function restIncrement() {
              setRest(rest => rest + 60)
        }
        function restDecrement() {
            rest > 60 && setRest(rest => rest - 60)
        }
        function handleReset() {
            clearInterval(countRef.current)
            setSeconds(session)
            setTimerRunning(false)
            setTimerHasBeenRun(false)
            setSessionPhase(true)

        }

    return (
        <div id="timer-container">
            <Helmet>
                <title>
                    Interval Timer - Davit Lursmanashvili
                </title>
                <meta type="description" content="An interval timer built with React by me. Customizable countdowns, automatic interval switch, start/pause, reset functions." />
            </Helmet>
            <h1 id="mytimer-title">Interval Timer</h1>
            <div id="timer-session-box">
                <h3 class="timer-sb-label">Session Length: </h3>
                <p className="timer-sb-length">{sessionMinutes}</p>
                <button id="timer-session-decrement" className="mytimer-button mytimer-increment" onClick={sessionDecrement}><FontAwesomeIcon icon={faArrowDown} /></button>
                <button id="timer-session-increment" className="mytimer-button mytimer-decrement" onClick={sessionIncrement}><FontAwesomeIcon icon={faArrowUp} /></button>
            </div>
            <div  id="timer-rest-box">
                <h3 class="timer-sb-label">Break Length: </h3>
                <p className="timer-sb-length">{restMinutes}</p>
                <button id="timer-break-decrement" className="mytimer-button mytimer-increment" onClick={restDecrement}><FontAwesomeIcon icon={faArrowDown} /></button>
                <button id="timer-break-increment" className="mytimer-button mytimer-decrement" onClick={restIncrement}><FontAwesomeIcon icon={faArrowUp} /></button>
            </div>
            <div id="timer-display-box">
                <h3 id="mytimer-label">{sessionPhase ? "Session" : "Break"}:</h3>
                <p id="mytime-left">{minutes}:{secondsLeft0}</p>
                <button className="mytimer-button" id="mytimer-start" onClick={()=>sessionStart()}>{timerRunning ? "Pause":"Start"}</button>
                <button className="mytimer-button" id="mytimer-reset" onClick={() => handleReset()}>Reset</button>

            </div>
        </div>
    )
}


export default Timer25