import { Component } from "react";
import {  Message, CounterApp, Randomnum} from "./components/dynamic"; //Random,

export class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App</h1>
        {/* <Random /> */}
        <CounterApp />
        <Message />
        <Randomnum/>
      </div>
    );
  }
}