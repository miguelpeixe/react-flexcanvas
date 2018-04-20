import React from "react";
import PropTypes from "prop-types";

export default class CanvasList extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number
  };
  render() {
    const { title, children } = this.props;
    const amount = this.props.amount || 1;
    return (
      <ul className="canvas-list">
        {Array.apply(0, Array(amount)).map((item, i) => (
          <li className="canvas-list-item" key={i}>
            <h4 className="canvas-list-header canvas-field-header">
              <span className="canvas-list-number">{i + 1}</span> {title}
            </h4>
            <div className="canvas-content" />
          </li>
        ))}
      </ul>
    );
  }
}
