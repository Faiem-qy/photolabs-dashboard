import React, { Component } from "react";

class Panel extends Component {
  render() {
    const { label, value, onSelect } = this.props; // removed id

    return (
      <div className="panel" >
        <section className="dashboard__panel" onClick={onSelect}> {/* removed function and (id) */}
          <h1 className="dashboard__panel-header">{label}</h1>
          <p className="dashboard__panel-value">{value}</p>
        </section>
      </div>
    );
  }
}

export default Panel;