import React, {useState, useEffect} from "react"
import "./quote_generator.css"


function QuoteGenerator() {
    
    useEffect(() => {
        fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
        .then(data => data.json())
        .then(quotes => {(setAllQuotes(quotes))
            const randNum = Math.floor(Math.random() * quotes.length)
            setAuthor(quotes[randNum].author)
            setText(quotes[randNum].quote)
    })        
        }, []);



    const [allQuotes, setAllQuotes] = useState([])
    const [quoteIndex, setQuoteIndex] = useState(randomNumber())
    const [text, setText] = useState("Hello")
    const [author, setAuthor] = useState("There")
    const [chosenQuote, setChosenQuote] = useState({})
    
    function randomNumber() {return Math.floor(Math.random() * 102)} //CNAHGE THIS SO THAT ITS * ALLQUOTES.LENGTH 

    
  
    
    function handleClick() {

        setQuoteIndex(randomNumber());
        setChosenQuote(allQuotes[quoteIndex])
        setText(allQuotes[quoteIndex].quote);
        setAuthor(allQuotes[quoteIndex].author);
        console.log(allQuotes.length)
        
    } 

        
        console.log(chosenQuote)

      
// NEED TO CALL AN ITEM WITHIN THIS OBJECT
    return (
        
        <div id="quote-container">
            <div id="quote-box">
                
                <h1 id="text">{text}</h1>
                <p id="author">{author}</p>
                <button id="new-quote-button" onClick={handleClick}>New Quote</button>
            </div>
        </div>
    )
}

export default QuoteGenerator