import React, {useState, useEffect} from "react"
import "./quote_generator.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"


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
    const [text, setText] = useState("Loading...")
    const [author, setAuthor] = useState("Loading...")
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
        const ShareableText = `${text} - ${author}`
        const TweetLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent({ShareableText})}`
      
// NEED TO CALL AN ITEM WITHIN THIS OBJECT
    return (

           


        <div id="quote-container">
            <div id="quote-box">
                <h2 id="quote-title">Random Quote Generator</h2>
                <hr id="quote-hr"/>
                <h1 id="quote-text">{text}</h1>
                <p id="quote-author">{author}</p>
                <button id="new-quote" onClick={handleClick} title="Get a new quote">New Quote</button>
                <a id="tweet-quote" href={TweetLink} target="_blank" title="Share on Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                </div>
        </div>
    )
}

export default QuoteGenerator