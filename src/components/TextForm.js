// Handle onChange and onClick Events Using State(useState Hook)
import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('');
    const handleUpClick = () => {
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to Uppercase.","success");
        // console.log(text.split(" "));        // It returns array of string words
        // console.log(text.split(" ").length); // It returns length of array/No of elements in array
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to Lowercase.","success");
    }
    const handleCapClick = () => {
        let txtLower = text.toLowerCase();
        const txtarr = txtLower.split(" ");
        for (let i=0; i<txtarr.length; i++) {
            txtarr[i] = txtarr[i].charAt(0).toUpperCase() + txtarr[i].slice(1);
        }
        let newText = txtarr.join(" ");
        setText(newText);
        props.showAlert("Coverted to Capitolized.","success");
    }
    const handleCpyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Coppied!","success");
    }
    const handleExSpClick = () => {
        let newText = text.split(/[" "]+/);     //Used to Remove Extra Spaces
        newText = newText.join(" ");
        setText(newText);
        props.showAlert("Extra space has been removed.","success");
    }
    const handleClrClick = () => {
        setText('');
        props.showAlert("Text has been cleared.","success");
    }
    const handleMyTxtOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-2">
                    <textarea className="form-control" value={text} onChange={handleMyTxtOnChange} style={{backgroundColor: props.mode === 'dark'?'#ccc':'white'}} id="myText" rows="5"></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UPPERCASE</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert To lowercase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCapClick}>Convert To Capitalized</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleCpyClick}>Copy To Clipboard</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleExSpClick}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleClrClick}>Clear Text</button>
            </div>
            <div className="container my-3">
                <h3>Text Summary</h3>
                <p>{text.split(" ").length} Words &amp; {text.length} Charecters.</p>
                <p>Average {text.split(" ").length * 0.008} Minutes required to read this.</p>
                <h3>Preview</h3>
                <p>{text?text:'NO TEXT'}</p>
            </div>
        </>
    )
}
