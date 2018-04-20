import React from "react";
import PropTypes from "prop-types";

import CanvasTable from "./CanvasTable.jsx";

export default class CanvasItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    details: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    icon: PropTypes.element,
    featured: PropTypes.bool,
    grow: PropTypes.number
  };
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this._handleClick = this._handleClick.bind(this);
  }
  _handleClick() {
    const { details } = this.props;
    const { active } = this.state;
    if (details && !active) {
      this.setState({ active: true });
    }
  }
  render() {
    const {
      icon,
      color,
      featured,
      details,
      grow,
      title,
      children
    } = this.props;
    const { active } = this.state;
    let classes = "";
    let contentClasses = "";
    if (children && !Array.isArray(children) && children.type === CanvasTable) {
      contentClasses += " attached";
    }
    if (!children) {
      classes += " empty";
    }
    if (featured) {
      classes += " featured";
    }
    if (color) {
      classes += " " + color;
    }
    if (details) {
      classes += " has-details";
    }
    return (
      <article
        onClick={this._handleClick}
        className={`canvas-item ${classes}`}
        style={{
          flexGrow: grow || 1
        }}
      >
        {icon ? <div className="canvas-item-icon">{icon}</div> : null}
        {title ? (
          <h3 className="canvas-header">
            <span>{title}</span>
          </h3>
        ) : null}
        <div className={`canvas-content ${contentClasses}`}>
          {this.props.children}
        </div>
        {details ? (
          <div>
            <div className="canvas-item-details-overlay">
              <div className="canvas-item-details-button">Mais informações</div>
            </div>
          </div>
        ) : null}
      </article>
    );
  }
}
