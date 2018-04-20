import React from "react";
import PropTypes from "prop-types";

export default class CanvasField extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    grow: PropTypes.number
  };
  render() {
    const { title, placeholder, grow } = this.props;
    return (
      <div className="canvas-field" style={{ flexGrow: grow || 1 }}>
        <h4 className="canvas-field-header">{title}</h4>
        <div className="canvas-content">{placeholder || ""}</div>
      </div>
    );
  }
}
