import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";

import { DataContext } from "./Canvas.jsx";

import CanvasTable from "./CanvasTable.jsx";

export default class CanvasItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    details: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    icon: PropTypes.element,
    featured: PropTypes.bool,
    grow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this._handleClick = this._handleClick.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);
  }
  _handleClick(ev) {
    ev.preventDefault();
    const { details } = this.props;
    const { active } = this.state;
    if (details && !active) {
      this.setState({ active: true });
    }
  }
  _handleCloseClick(ev) {
    ev.preventDefault();
    const { details } = this.props;
    const { active } = this.state;
    if (active) {
      this.setState({ active: false });
    }
  }
  _getValue(data) {
    const { dataKey, format } = this.props;
    let value = get(data, dataKey);
    if (format) {
      value = format(value);
    }
    return value;
  }
  _renderChildren(data) {
    const { children } = this.props;
    return React.Children.map(children, (child) =>
      React.cloneElement(child, { data: this._getValue(data) })
    );
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
      dataKey,
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
        {(data) => (
          <article
            onClick={this._handleClick}
            className={`canvas-item ${classes}`}
            style={{
              flexGrow: grow || 1,
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
                {this.props.children
                  ? this._renderChildren(data)
                  : this._getValue(data)}
              </div>
              {details ? (
                <div>
                  <div className="canvas-item-details-overlay">
                    <a
                      href="#"
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
                  href="#"
                  onClick={this._handleCloseClick}
                >
                  x
                </a>
                <div className="canvas-details">
                  {typeof details == "string" ? <p>{details}</p> : details}
                </div>
              </section>
            ) : null}
          </article>
        )}
      </DataContext.Consumer>
    );
  }
}
