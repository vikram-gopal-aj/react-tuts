import React from "react";

function AddItemInput(props) {
  return (
    <input
      placeholder="Add todo item"
      name="Add Item"
      onChange={props.handleInput}
      onKeyUp={props.handleAddItem}
      value={props.itemText}
    />
  );
}

function TodoList(props) {
  const list = props.list;
  const listElements = [];

  list.forEach(function (listItem) {
    listElements.push(<li>{listItem}</li>);
  });
  return <ul onClick={props.handleClick}>{listElements}</ul>;
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: [], itemText: "" };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    this.setState({ itemText: e.target.value });
  }

  handleAddItem(e) {
    e.preventDefault();
    if (e.key === "Enter" || e.keyCode === 13) {
      this.setState({ itemText: e.target.value });
      this.setState((prevState) => ({
        list: [...prevState.list, e.target.value],
      }));
    }
  }

  handleClick(e) {
    e.target.style.textDecoration = "line-through";
  }

  render() {
    return (
      <div className="sc-todo">
        <AddItemInput
          handleAddItem={this.handleAddItem}
          handleInput={this.handleInput}
          itemText={this.state.itemText}
        />
        <TodoList list={this.state.list} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default Todo;
