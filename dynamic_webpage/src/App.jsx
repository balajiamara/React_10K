import { Component } from "react";
import { Random, Message, CounterApp} from "./components/dynamic";

export class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App</h1>
        <Random />
        <CounterApp />
        <Message />
      </div>
    );
  }
}