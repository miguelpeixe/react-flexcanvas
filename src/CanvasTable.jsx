import React from "react";

export default class CanvasTable extends React.Component {
  render() {
    const { columns, amount } = this.props;
    return (
      <table className={`canvas-table ${amount ? "numbered" : ""}`}>
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th className="canvas-field-header" key={`head-${i}`}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {amount ? (
            Array.apply(0, Array(amount)).map((item, i) => (
              <tr key={`row-${i}`}>
                {columns.map((column, j) => <td key={`cell-${i}-${j}`} />)}
              </tr>
            ))
          ) : (
            <tr>{columns.map((column, i) => <td key={`cell-${i}`} />)}</tr>
          )}
        </tbody>
      </table>
    );
  }
}
