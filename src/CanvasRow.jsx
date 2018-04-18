import React from "react";

export default class CanvasRow extends React.Component {
  render() {
    const { grow, color, attached, widths, children } = this.props;
    return (
      <div
        className={`canvas-row ${widths || ""} ${color || ""} ${
          color ? "colored" : ""
        } ${
          attached ? `attached ${attached}` : ""
        }`}
        style={{ flexGrow: grow || 1 }}
      >
        {children}
      </div>
    );
  }
}
