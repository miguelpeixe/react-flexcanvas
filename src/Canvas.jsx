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

export default class Canvas extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };
  static Item = CanvasItem;
  static Row = CanvasRow;
  static Column = CanvasColumn;
  static FieldGroup = CanvasFieldGroup;
  static List = CanvasList;
  static Field = CanvasField;
  static Table = CanvasTable;
  render() {
    return (
      <section className="canvas-container">{this.props.children}</section>
    );
  }
}
