import { useState } from "react"
import axios from "axios";

function Test() {

    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");

    function getTest() {
        axios.get("http://localhost:5000/api", {crossdomain: true
        }).then((response) => {
            setText(response.data.text);
            setAuthor(response.data.author);
        })
    }
    return (<>
        <button onClick={getTest}>
            Generate Quote
        </button>
        <h1>{text}</h1>
        <h3>{author}</h3>
    </>)
}

export default Test;