import React from "react";
import PropTypes from "prop-types";
import get from "lodash.get";

import { DataContext } from "./Canvas.jsx";

export default class CanvasField extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    dataKey: PropTypes.string,
    grow: PropTypes.number
  };
  _getValue(data) {
    const { dataKey } = this.props;
    return get(data, dataKey);
  }
  render() {
    const { title, placeholder, grow } = this.props;
    return (
      <DataContext.Consumer>
        {data => (
          <div className="canvas-field" style={{ flexGrow: grow || 1 }}>
            <h4 className="canvas-field-header">{title}</h4>
            <div className="canvas-content">{this._getValue(data) || ""}</div>
          </div>
        )}
      </DataContext.Consumer>
    );
  }
}
