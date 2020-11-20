import React, { Component } from "react";
import PropTypes from "prop-types";
export class ChildComponent extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <div>
        <button type="button" onClick={handleClick}>
          Click Me!
        </button>
      </div>
    );
  }
}
ChildComponent.propTypes = {
  handleClick: PropTypes.func,
};
export default ChildComponent;
