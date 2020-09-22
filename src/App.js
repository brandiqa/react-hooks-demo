import React, { Component } from 'react';
// import ClassDemo from "./components/class-demo";
// import HookDemo from "./components/hooks-demo";
import UserList from './components/user-list';
// import CountdownClass from "./components/countdown-class";

class App extends Component {
  render() {
    return (
      <div className="container mx-auto">
        {/* <ClassDemo /> */}
        {/* <HookDemo /> */}
        <UserList />
        {/* <CountdownClass /> */}
      </div>
    );
  }
}

export default App;
