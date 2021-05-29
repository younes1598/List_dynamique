import React, { Component } from "react";

import "./styles.css";

class App extends React.Component {
  state = {
    artistes: [
      { id: 1, nom: "Maceo Plax" },
      { id: 2, nom: "Charlotte de witte" },
      { id: 3, nom: "Alfa bandy" }
    ],
    nouveauArtiste: ""
  };

  handeldelete = (id) => {
    const artistes = this.state.artistes.slice();
    const index = artistes.findIndex((x) => x.id === id);
    artistes.splice(index, 1);
    this.setState({ artistes, artistes });
  };

  handelSubmit = (event) => {
    event.preventDefault(); //eviter le rechargement de la page
    const id = new Date().getTime();
    const nom = this.state.nouveauArtiste;

    const artiste = { id: id, nom: nom };
    const artistes = this.state.artistes.slice();
    artistes.push(artiste);
    this.setState({ artistes: artistes, nouveauArtiste: "" });
  };

  handlerChange = (event) => {
    const value = event.target.value;
    this.setState({ nouveauArtiste: value });
  };

  render() {
    return (
      <div>
        <h1>Liste des Artistes </h1>
        <ul>
          {this.state.artistes.map((x) => (
            <li>
              {x.nom} <button onClick={() => this.handeldelete(x.id)}>X</button>
            </li>
          ))}
        </ul>
        <form onSubmit={this.handelSubmit}>
          <input
            value={this.state.nouveauArtiste}
            onChange={this.handlerChange}
            type="text"
            placeholder="Ajouter un artiste"
          />
          <button>confirmer</button>
        </form>
      </div>
    );
  }
}

export default App;
