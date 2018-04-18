import React from "react";

export default class CanvasGroup extends React.Component {
  render() {
    const { children } = this.props;
    return <div className="canvas-group">{children}</div>;
  }
}
