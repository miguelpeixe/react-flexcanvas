import React from "react";
import PropTypes from "prop-types";

export default class CanvasItemGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  };
  _renderDescription = () => {
    const { description } = this.props;
    if (!description) return null;
    if (typeof description == "string") return <p>{description}</p>;
    return description;
  };
  render() {
    const { title, children } = this.props;
    const description = this._renderDescription();
    return (
      <div className="canvas-item-group">
        <div className="canvas-item-group-header">
          <h3 className="canvas-item-group-title">{title}</h3>
          <div className="canvas-item-group-description">{description}</div>
        </div>
        <div className="canvas-item-group-content">{children}</div>
      </div>
    );
  }
}
