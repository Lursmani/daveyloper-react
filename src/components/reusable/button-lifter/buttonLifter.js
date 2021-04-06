import React, {useState} from "react"
import "./buttonLifter.css"



function ButtonLifter(props) {
    
    const [hover, setHover] = useState(false)



    return (

        <div className="buttonlifter-border" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className={hover ? "buttonlifter-content-hov" : "buttonlifter-content-nohov"} >
                <a className="buttonlifter-link" href={props.link}>{props.text}</a>
            </div>
        </div>


    )
}

export default ButtonLifter