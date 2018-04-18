import React from "react";

import CanvasTable from "./CanvasTable.jsx";

export default class CanvasItem extends React.Component {
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
        {icon ? <span className={`canvas-item-icon fa fa-${icon}`} /> : null}
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
              <div className="canvas-item-details-button">
                <span className="fa fa-info-circle" /> Mais informações
              </div>
            </div>
          </div>
        ) : null}
      </article>
    );
  }
}
