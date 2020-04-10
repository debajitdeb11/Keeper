import React from "react";
import ReactDOM from "react-dom";
import Heading from "../component/Header";
import Note from "../component/Note";
import Footer from "../component/Footer"

function App(){
    return (
        <div>
            <Heading/>
            <Note/>
            <Footer/>
            
        </div>
    );
}

export default App;