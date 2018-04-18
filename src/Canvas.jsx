import React from "react";

import "styles/canvas.less";

import CanvasItem from "./CanvasItem.jsx";
import CanvasRow from "./CanvasRow.jsx";
import CanvasColumn from "./CanvasColumn.jsx";
import CanvasList from "./CanvasList.jsx";
import CanvasGroup from "./CanvasGroup.jsx";
import CanvasField from "./CanvasField.jsx";
import CanvasTable from "./CanvasTable.jsx";

import CanvasDetails from "./CanvasDetails.jsx";

class Canvas extends React.Component {
  render() {
    return (
      <section className="canvas-container">
        {this.props.children}
        <CanvasDetails />
      </section>
    );
  }
}

Canvas.Item = CanvasItem;
Canvas.Row = CanvasRow;
Canvas.Column = CanvasColumn;
Canvas.Group = CanvasGroup;
Canvas.List = CanvasList;
Canvas.Field = CanvasField;
Canvas.Table = CanvasTable;

export default Canvas;
