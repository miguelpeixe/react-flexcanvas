import React from "react";

export default class CanvasColumn extends React.Component {
  render() {
    const { grow, widths, padded, children } = this.props;
    return (
      <div
        className={`canvas-column ${widths || ""} ${padded ? "padded" : ""}`}
        style={{ flexGrow: grow || 1 }}
      >
        {children}
      </div>
    );
  }
}
