import React, {useState, useEffect, useRef} from "react"
import "./carousel.css"




function Carousel(props) {
    const {children} = props
    const [index, setIndex] = useState(0)
    const [array, setArray] = useState([])
    const [length, setLength] = useState(children.length)
    const mobile = window.innerWidth > 768 ? "false" : "true"

    



    
    // setting up breakpoints for easy responsiveness
    function breakpoints() {
        let x
        if (window.innerWidth <= 480) { return x === "mobile" } else 
        if (window.innerWidth > 480 && window.innerWidth <= 768) {return x === "tablet"} else 
        if (window.innerWidth > 768) {return x === "desktop"}
        return x
    }

    useEffect(() => {
        setLength(children.length)
        setArray(React.Children.toArray(children))
    }, [children])




    const next = () => {
        if (index < (length-1))  {
            setIndex(prevState => prevState + 1)
        }
        // sets the index to next if you are not on the last slide
    }

    const previous = () => {
        if (index > 0) {
            setIndex(prevState => prevState - 1)
        }
        // sets the index to be the previous if you are further than first slide
    }



    


  

    return (
        <div className="carousel-outer-container" style={{
            height: props.outerHeight, 
            width: props.outerWidth,
            padding: props.outerPadding,
            }}>
        <div className="carousel-inner-container" style={{height: props.innerHeight, width: props.innerWidth}}>
            <div className="carousel-wrapper"        
            > 
               { index > 0 && <button className="left-arrow" onClick={previous}>
                &lt;
                </button> }
                <div className="carousel-content-wrapper" >
               { index < children.length - props.show &&    <button className="right-arrow" onClick={next}>
                    &gt;
                </button>}
                {/* the sliding is done by the translateX below. it translates by (100% of the slides * the index of the slide) from the starting position.  */}
                    <div className="carousel-content"  
                    style={{transform: mobile === "false" && `translateX(-${index * 100 }%)`,
                            width: mobile === "false" && `${100 / props.show}%`}}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Carousel