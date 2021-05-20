import logo from "./logo.svg";
import "./App.css";

import Clock from "./components/clock";
import Button from "./components/toggle";
import Search from "./components/searchcomponent";
import Todo from "./components/todo";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock />
        <Button />
        <Search />
        <Todo />
      </header>
    </div>
  );
}

export default App;
