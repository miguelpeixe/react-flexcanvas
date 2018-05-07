import React from "react";
import PropTypes from "prop-types";

export default class CanvasTable extends React.Component {
  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    amount: PropTypes.number
  };
  render() {
    const { columns, data, amount } = this.props;
    return (
      <table className={`canvas-table ${amount || data ? "numbered" : ""}`}>
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th className="canvas-field-header" key={`head-${i}`}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        {amount || data ? (
          <tbody className="counted">
            {(data || Array.apply(0, Array(amount))).map((item, i) => (
              <tr key={`row-${i}`}>
                {columns.map((column, j) => (
                  <td cellSpacing="collapse" key={`cell-${i}-${j}`}>
                    {item[j] || ""}
                  </td>
                ))}
              </tr>
            ))}
            <tr className="last-row">
              {columns.map((column, j) => <td key={`lastrow-${j}`} />)}
            </tr>
          </tbody>
        ) : (
          <tbody>
            <tr>{columns.map((column, i) => <td key={`cell-${i}`} />)}</tr>
          </tbody>
        )}
      </table>
    );
  }
}
