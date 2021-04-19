import React, {useState,} from "react"
import "./markdownpreviewer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faExpand, faCompress } from "@fortawesome/free-solid-svg-icons"


function MarkdownPreviewer() {

    const [text, setText] = useState("")
    const [editorExpanded, setEditorExpanded] = useState(false)
    const [viewerExpanded, setViewerExpanded] = useState(false)
    let marked = require("marked");

    function edExp() {
        return setEditorExpanded(!editorExpanded)        
    }
    function outExp() {
        return setViewerExpanded(!viewerExpanded)
    }
    
    
   

    return (

        <div className="markdown-container">

            <div className={editorExpanded ? "markdown-editor-box-expanded" : "markdown-editor-box"}>
                <div id="markdown-editor-toolbar">
                    <h2 className="markdown-toolbar-text">Markdown Editor</h2>
                <button className="markdownbutton" onClick={edExp}>{editorExpanded ? <FontAwesomeIcon icon={faCompress}/> : <FontAwesomeIcon icon={faExpand} />}</button>
                </div>
                <textarea name="markdown" id="editor" className={editorExpanded ? "markdown-editor-expanded" : "markdown-editor"} cols="30" rows="10" value={text}
                 onChange={e => setText(e.target.value)} >
                 </textarea>
            </div>


           <div className={viewerExpanded ? "markdown-output-box-expanded" : "markdown-output-box"}>
               <div id="markdown-output-toolbar">
               <h2 className="markdown-toolbar-text">Markdown Previewer</h2>
               <button className="markdownbutton" onClick={outExp}>{viewerExpanded ? 
               <FontAwesomeIcon icon={faCompress}/> : <FontAwesomeIcon icon={faExpand} />}</button>

               </div>
                <div id="preview" dangerouslySetInnerHTML={{__html: marked(text)}} className="markdown-output">
                    
                </div>          
            </div>


            
        </div>
    )
}

export default MarkdownPreviewer