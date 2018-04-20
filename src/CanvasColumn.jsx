import React from "react";
import PropTypes from "prop-types";

export default class CanvasColumn extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    grow: PropTypes.number,
    widths: PropTypes.string
  };
  render() {
    const { grow, widths, children } = this.props;
    return (
      <div
        className={`canvas-column ${widths || ""}`}
        style={{ flexGrow: grow || 1 }}
      >
        {children}
      </div>
    );
  }
}
