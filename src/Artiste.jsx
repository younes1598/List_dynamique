import React, { Component } from "react";

class Artiste extends Component {
  render() {
    const { detail, onDelete } = this.props;
    return (
      <li>
        {detail.nom}
        <button onClick={() => onDelete(detail.id)}>X</button>
      </li>
    );
  }
}

export default Artiste;
