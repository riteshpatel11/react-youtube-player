import React, { Component } from "react";
import ReactPlayer from "react-player";

import "./App.css";

class App extends Component {
  state = {
    inputValue: "",
    url: ""
  };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = data => {
    data.preventDefault();
    this.setState({ url: this.state.inputValue });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Youtube Video Player</h1>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.handleChange}
                className="form-control"
                type="text"
                placeholder="Enter your youtube URL here"
              />
              <button className=" btn btn-primary">Play Video</button>
            </form>{" "}
            <br />
            <ReactPlayer url={this.state.url} controls={true} />
          </div>
        </header>
      </div>
    );
  }
}
export default App;
