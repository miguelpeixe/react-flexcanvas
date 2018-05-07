import React from "react";
import PropTypes from "prop-types";

import { DataContext } from "./Canvas.jsx";

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
    this._handleCloseClick = this._handleCloseClick.bind(this);
  }
  _handleClick() {
    const { details } = this.props;
    const { active } = this.state;
    if (details && !active) {
      this.setState({ active: true });
    }
  }
  _handleCloseClick() {
    const { details } = this.props;
    const { active } = this.state;
    if (details && active) {
      this.setState({ active: false });
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
      children,
      dataKey
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
    if (active) {
      classes += " active";
    }
    return (
      <DataContext.Consumer>
        {data => (
          <article
            onClick={this._handleClick}
            className={`canvas-item ${classes}`}
            style={{
              flexGrow: grow || 1
            }}
          >
            <section className="canvas-item-content">
              {icon ? <div className="canvas-item-icon">{icon}</div> : null}
              {title ? (
                <h3 className="canvas-header">
                  <span>{title}</span>
                </h3>
              ) : null}
              <div className={`canvas-content ${contentClasses}`}>
                {dataKey && data[dataKey] ? data[dataKey] : this.props.children}
              </div>
              {details ? (
                <div>
                  <div className="canvas-item-details-overlay">
                    <a
                      href="javascript:void(0);"
                      onClick={this._handleClick}
                      className="canvas-item-details-button"
                    >
                      Mais informações
                    </a>
                  </div>
                </div>
              ) : null}
            </section>
            {details ? (
              <section className="canvas-item-details">
                <a
                  className="canvas-details-close"
                  href="javascript:void(0);"
                  onClick={this._handleCloseClick}
                >
                  x
                </a>
                <div className="canvas-details">
                  {typeof details == "string" ? (
                    <p>{details}</p>
                  ) : (
                    <div>{details}</div>
                  )}
                </div>
              </section>
            ) : null}
          </article>
        )}
      </DataContext.Consumer>
    );
  }
}
