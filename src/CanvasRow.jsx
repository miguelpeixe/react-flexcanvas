import React from "react";
import PropTypes from "prop-types";

export default class CanvasRow extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    grow: PropTypes.number,
    color: PropTypes.string,
    attached: PropTypes.string,
    widths: PropTypes.string
  };
  render() {
    const { grow, color, attached, widths, children } = this.props;
    return (
      <div
        className={`canvas-row ${widths || ""} ${color || ""} ${
          color ? "colored" : ""
        } ${attached ? `attached ${attached}` : ""}`}
        style={{ flexGrow: grow || 1 }}
      >
        {children}
      </div>
    );
  }
}
