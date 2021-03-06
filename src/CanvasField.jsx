import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";

import { DataContext } from "./Canvas.jsx";

export default class CanvasField extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    tip: PropTypes.string,
    dataKey: PropTypes.string,
    grow: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };
  _getValue(data) {
    const { dataKey, format } = this.props;
    let value = get(data, dataKey);
    if (format) {
      value = format(value);
    }
    return value;
  }
  render() {
    const { title, tip, grow } = this.props;
    return (
      <DataContext.Consumer>
        {(data) => (
          <div className="canvas-field" style={{ flexGrow: grow || 1 }}>
            <h4 className="canvas-field-header">{title}</h4>
            {tip ? <p className="canvas-field-tip">{tip}</p> : null}
            <div className="canvas-content">{this._getValue(data) || ""}</div>
          </div>
        )}
      </DataContext.Consumer>
    );
  }
}
