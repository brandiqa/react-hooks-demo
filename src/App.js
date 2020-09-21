import React, { Component } from "react";
// import HookDemo from "./components/hooks-demo";
// import ClassDemo from "./components/class-demo";
import "./App.css";
import CountdownClass from "./components/countdown-class";

class App extends Component {
  render() {
    return (
      <div className="container">
        {/* <HookDemo /> */}
        <CountdownClass />
        {/* <ClassDemo /> */}
      </div>
    );
  }
}

export default App;
