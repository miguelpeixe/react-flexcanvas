import React from "react";
import PropTypes from "prop-types";

import "styles/canvas.less";

import CanvasItem from "./CanvasItem.jsx";
import CanvasRow from "./CanvasRow.jsx";
import CanvasColumn from "./CanvasColumn.jsx";
import CanvasList from "./CanvasList.jsx";
import CanvasFieldGroup from "./CanvasFieldGroup.jsx";
import CanvasField from "./CanvasField.jsx";
import CanvasTable from "./CanvasTable.jsx";

export const DataContext = React.createContext({});

export default class Canvas extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    data: PropTypes.object,
  };
  static Item = CanvasItem;
  static Row = CanvasRow;
  static Column = CanvasColumn;
  static FieldGroup = CanvasFieldGroup;
  static List = CanvasList;
  static Field = CanvasField;
  static Table = CanvasTable;
  _hasData() {
    const { data } = this.props;
    return typeof data === "object" && Object.keys(data).length;
  }
  render() {
    console.log("DUDE");
    return (
      <DataContext.Provider value={this.props.data}>
        <section
          className={`canvas-container ${this._hasData() ? "with-data" : ""}`}
        >
          {this.props.children}
        </section>
      </DataContext.Provider>
    );
  }
}
