import React, { Component } from "react";

class Panel extends Component {
  render() {
    const { id, label, value, onSelect } = this.props; // added id and onSelect

    return (
      <div className="panel" >
        <section className="dashboard__panel" onClick={() => onSelect(id)}> {/* added click listener */}
          <h1 className="dashboard__panel-header">{label}</h1>
          <p className="dashboard__panel-value">{value}</p>
        </section>
      </div>
    );
  }
}

export default Panel;