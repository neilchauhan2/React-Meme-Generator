import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import MemeGenerator from "./Components/MemeGenerator";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MemeGenerator />
      </div>
    );
  }
}

export default App;
