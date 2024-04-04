import React,{useState} from 'react'

export default function TextForm(props) {
  
  const handleOnChange = (event) =>{
    // console.log("on Change");
    setText(event.target.value);
  }

   const handleClearText = ()=>{
    setText("");
    props.showAlert("your text has been clear","success")
   }

  const handleUpClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("your text converted to upper case","success")
  }
  const handleLoClick = () =>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("your text converted to lower case","success")
  }

  const handletToCopy  = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("your text copied to clipboard","success")
  }

  const handletExtraSpaces  = () =>{
    // let newText = text.split(/\s+/g);
    setText(text.replace(/\s+/g, ' '))
    props.showAlert("Extra spaces succesfully remove from your text","success")
  }

  const handletToSpeak = ()=>{
    
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
    
  }
  
  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className='container' >
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">

            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'black':'white'}}  id="myBox" rows="8" ></textarea>
        </div>

          <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleClearText}>Clear Text</button>
          <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
          <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handleLoClick}>Convert To LowerCase</button>
          <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handletToCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handletExtraSpaces}>Remove Extra Spaces</button>
          <button disabled={text.length===0} className="btn btn-danger mx-2 my-2" onClick={handletToSpeak}><i className="fa-solid fa-volume-high"></i> Listen Your Text</button>

        </div>
        <div className="container my-4" >
          <h1>Your text summary</h1>
          <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>    {/* split() splits a string into an array of substrings, and returns the array  */}
         <p>{0.08*(text.split(" ").filter((element)=>{return element.length!=0}).length)} minutes to read</p>

         <h2>Preview</h2>
         <p>{text}</p>
           


        </div>
    
     </>
  )
}
