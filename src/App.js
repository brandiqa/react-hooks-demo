import React, { Component } from "react";
import HookDemo from "./components/hooks-demo";
// import ClassDemo from "./components/class-demo";
// import CountdownClass from "./components/countdown-class";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <HookDemo />
        {/* <ClassDemo /> */}
        {/* <CountdownClass /> */}
      </div>
    );
  }
}

export default App;
