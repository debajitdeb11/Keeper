import React from "react";
import ReactDOM from "react-dom";

const today = new Date();

function Footer(){
    return <footer><p>
        copyright  &copy; {`${today.getFullYear()}`};
    </p>
        
    </footer>;
}

export default Footer;