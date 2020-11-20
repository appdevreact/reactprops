import React, { Component } from "react";
import { ChildComponent } from "./ChildComponent";
export class MainComponent extends Component {
  handleClick() {
    console.log(">>>>>>Test handleClick>>>>>>>>");
  }
  render() {
    return (
      <div>
        <ChildComponent handleClick={this.handleClick} />
      </div>
    );
  }
}

export default MainComponent;
