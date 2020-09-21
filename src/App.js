import React, { Component } from "react";
import HookDemo from "./components/hooks-demo";
// import ClassDemo from "./components/class-demo";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <section>
          <HookDemo />
        </section>
        {/* <section>
          <ClassDemo />
        </section> */}
      </div>
    );
  }
}

export default App;
