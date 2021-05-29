import React, { Component } from "react";

class ArtisteForm extends Component {
  state = {
    nouveauArtiste: ""
  };

  handlerChange = (event) => {
    this.setState({ nouveauArtiste: event.target.value });
  };

  handelSubmit = (event) => {
    event.preventDefault(); //eviter le rechargement de la page

    const id = new Date().getTime();
    const nom = this.state.nouveauArtiste;

    this.props.onAdd({ id, nom });
    this.setState({ nouveauArtiste: "" });
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <input
          value={this.state.nouveauArtiste}
          onChange={this.handlerChange}
          type="text"
          placeholder="Ajouter un artiste"
        />
        <button>confirmer</button>
      </form>
    );
  }
}

export default ArtisteForm;
