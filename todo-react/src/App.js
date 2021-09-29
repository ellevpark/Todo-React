import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list : []
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Add an Item</h1>
        <input
          type= "text"
          placeholder = "Type item here..."
          value = {this.state.newItem}
          onChange = {e => this.updateItem("newItem", e.target.value)}
        />
      </div>
    );
  }
  
}


export default App;
