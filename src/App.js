import React from "react";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import "./App.css";

function App() {
    return (
        <div className="App">
            {/* must add the content-wrap */}
            <div className="content-wrap">
                <Body />
                <h1 style={{ textAlign: "center" }}>
                    React Footer using CSS Grid
                </h1>
            </div>
            <Footer />
        </div>
    );
}

export default App;
