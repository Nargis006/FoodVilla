import React from "react";
import ReactDOM from 'react-dom/client'
import Container from "./src/components/Container";
import Footer from "./src/components/Footer";
import Navbar from "./src/components/Navbar"
import './style.css'

export default App = function(){
    return (<>
    <Navbar/>
    <Container/>
    <Footer/>
    </>)
   
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);;

