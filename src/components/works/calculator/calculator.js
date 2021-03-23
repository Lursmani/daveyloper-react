import React, {useState, useEffect} from "react"
import "./calculator.css"
import {Helmet} from "react-helmet"








function Calculator() {

    const [result, setResult] = useState(null)
    const [num1, setNum1] = useState([])
    const [operator, setOperator] = useState(null)
    const [num2, setNum2] = useState([])
    const [operated, setOperated] = useState(false)
    const number1 = parseFloat(num1.join(''))
    const number2 = parseFloat(num2.join(''))
    const dispRes = result === null ? "" : `= ${result}`
    const [display, setDisplay]= useState(null) 
    const [fullEq, setFullEq] = useState(``)



   function handleNums(num) {
    if (operated === false && num1.length < 15) {
            setNum1([...num1, num])
        } else if (operated === true && num2.length < 15) 
            {setNum2([...num2, num])}
    if (result !== null) {handleClear()}
    }

    function handleNegative() {
        if (operated === false) {
            setNum1([number1 * -1])
        } else {setNum2([number2*-1])}
     } 
  
    useEffect(() => {
        if (operated === false) {
            
            setDisplay(number1)
            console.log(`num1 = ${num1}`)

        }}, [num1, operator,number1,number2,result,num2,display])

    useEffect(()=>{
        if (operated === true) {
            setDisplay(number2)
            console.log(`num2 = ${num2}`)

        }
       
    }, [num2])


    useEffect(() => {
        let firstNum
        let secondNum
        let op
        
        if (isNaN(number1)){firstNum = ""} else {firstNum=number1};
        if (isNaN(number2)){secondNum = ""} else {secondNum=number2};
        if (operator === null) {op = ""} else {op = operator};

        setFullEq(`${firstNum} ${op} ${secondNum}`)
    } )

    function handleEquals() {
        let res
        if (operator === "*") {
            res = number1 * number2
        } else if (operator === "/") {
            res = number1 / number2
        } else if (operator === "+") {
            res = number1 + number2
        } else if (operator === "-") {
            res = number1 - number2
        }
        setResult(res)
        setDisplay(res)
       
    }

    function handleOperator(opr) {
        
        setOperator("")
        setOperated(true)
        setOperator(opr)

        if (result !== null ) {
            handleEquals()
            setNum1([result])
            setNum2([])
            setDisplay(0)
            setResult(null)
        }
    }
    useEffect(() => {
        let op = String(operator)
        console.log(`op = ${operator}`)
        setDisplay(op)
    }, [operator])

   
    function handleClear() {
        setNum1([])
        setNum2([])
        setOperated(false)
        setOperator("")
        setResult(null)
        setDisplay(0)
    }
    return (
        <div id="calculator-box">
            <Helmet>
                <title>Calculator - Davit Lursmanashvili</title>
                <meta type="description" content="This is a javascript calculator I built with React. Check out my other projects on my website." />
            </Helmet>
            <div id="calculator-display">
                <p classname="calculator-text">{fullEq}{dispRes}</p>
                <p classname="calculator-text" >{isNaN(display) ? "" : display }{ isNaN(number2) ?  operator:""}</p>
            </div>

            
            <button id="one" className="calculator-button" value="1" onClick={event => handleNums(event.target.value)} >1</button>     
            <button id="two" className="calculator-button" value="2" onClick={event => handleNums(event.target.value)} >2</button>   
            <button id="three" className="calculator-button" value="3" onClick={event => handleNums(event.target.value)} >3</button>     
            <button id="four" className="calculator-button" value="4" onClick={event => handleNums(event.target.value)} >4</button>   
            <button id="five" className="calculator-button" value="5" onClick={event => handleNums(event.target.value)} >5</button>  
            <button id="six" className="calculator-button" value="6" onClick={event => handleNums(event.target.value)} >6</button> 
            <button id="seven" className="calculator-button" value="7" onClick={event => handleNums(event.target.value)} >7</button> 
            <button id="eight" className="calculator-button" value="8" onClick={event => handleNums(event.target.value)} >8</button>   
            <button id="nine" className="calculator-button" value="9" onClick={event => handleNums(event.target.value)} >9</button>  
            <button id="zero" className="calculator-button" value="0" onClick={event => handleNums(event.target.value)} >0</button>        
            <button id="plusmin" className="calculator-button" value="-" onClick={event => handleNegative(event.target.value)}>-/+</button>

            <button id="add"  className="calculator-button" value="+" onClick={event => handleOperator(event.target.value)}>+</button>    
            <button id="subtract" className="calculator-button" value="-" onClick={event => handleOperator(event.target.value)}>-</button>  
            <button id="multiply" className="calculator-button" value="*" onClick={event => handleOperator(event.target.value)}>*</button>  
            <button id="divide" className="calculator-button" value="/" onClick={event => handleOperator(event.target.value)}>/</button>  
            <button id="equals" className="calculator-button" onClick={()=> handleEquals()}>=</button>   
            <button id="decimal" className="calculator-button" value="." onClick={event => handleNums(event.target.value)}>.</button>     
            <button id="clear" className="calculator-button" onClick={() => handleClear()} >AC</button>  
           
        </div>
    )
}

export default Calculator