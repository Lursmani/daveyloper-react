import React, {useState, useEffect, useRef, useCallback} from "react"
import "./carousel.css"
import throttle from "lodash/throttle"



function Carousel(props) {
    const {children} = props
    const [index, setIndex] = useState(0)
    const [array, setArray] = useState([])
    const [length, setLength] = useState(children.length)
    const mobile = window.innerWidth > 768 ? "false" : "true"

    const timing = (1 / 60) * 1000;
    const decay = v => -0.1 * ((1 / timing) ^ 4) + v;
    const [clickStartX, setClickStartX] = useState()
    const [scrollStartX, setScrollStartX] = useState()
    const [isDragging, setIsDragging] = useState(false);
    const [direction, setDirection] = useState(0);
    const [momentum, setMomentum] = useState(0);
    const [lastScrollX, setLastScrollX] = useState(0);
    const [lastScreenX, setLastScreenX] = useState(0);
    const [speed, setSpeed] = useState(0);
    const handleLastScrollX = useCallback(
      throttle(screenX => {
        setLastScrollX(screenX);
      }, timing),
      []
    );  
    const scrollWrapperRef = useRef()
    const scrollWrapperCurrent = scrollWrapperRef.current

    
    const handleMomentum = useCallback(
        throttle(nextMomentum => {
          setMomentum(nextMomentum);
          scrollWrapperRef.current.scrollLeft = scrollWrapperRef.current.scrollLeft + nextMomentum * timing * direction;
        }, timing),
        [scrollWrapperCurrent, direction]
      );


      
    useEffect(() => {
        if (direction !== 0) {
          if (momentum > 0.1 && !isDragging) {
            handleMomentum(decay(momentum));
          } else if (isDragging) {
            setMomentum(speed);
          } else {
            setDirection(0);
          }
        }
      }, [momentum, isDragging, speed, direction, handleMomentum, decay]);

    useEffect(()=>{
        if (scrollWrapperRef.current) {
            const handleDragStart = e => {
                setClickStartX(e.screenX)
                setScrollStartX(scrollWrapperRef.current.scrollLeft)
            }
            const handleDragMove = e => {
                e.preventDefault();
                e.stopPropagation();
                if (clickStartX !== undefined && scrollStartX !== undefined) {
                    const touchDelta = clickStartX - e.screenX;
                    scrollWrapperRef.current.scrollLeft = scrollStartX + touchDelta;
                
                if (Math.abs(touchDelta) > 1) {
                    setIsDragging(true);
                    setDirection(touchDelta / Math.abs(touchDelta));
                    setSpeed(Math.abs((lastScreenX - e.screenX) / timing));
                    setLastScreenX(e.screenX);
                  }
            }}
            const handleDragEnd = e => {
                if (clickStartX !== undefined) {
                    setClickStartX(undefined)
                    setScrollStartX(undefined)
                }
            }

            
            


            // disables this scrolling on non-desktop devices
            if (scrollWrapperRef.current.ontouchstart === undefined) {
                scrollWrapperRef.current.onmousedown = handleDragStart;
                scrollWrapperRef.current.onmousemove = handleDragMove;
                scrollWrapperRef.current.onmouseup = handleDragEnd;
                scrollWrapperRef.current.onmouseleave = handleDragEnd;
            }
        }
    }, [scrollWrapperCurrent, lastScreenX, timing, scrollWrapperRef, clickStartX, isDragging, scrollStartX, handleLastScrollX, lastScrollX])

    

    
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
        <div className="carousel-inner-container"  style={{height: props.innerHeight, width: props.innerWidth}}>
            <div className="carousel-wrapper"    
            > 
               { index > 0 && <button className="left-arrow" onClick={previous}>
                &lt;
                </button> }
                { index < children.length - props.show &&    <button className="right-arrow" onClick={next}>
                    &gt;
                </button>}
                <div className="carousel-content-wrapper" ref={scrollWrapperRef}     >
         
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