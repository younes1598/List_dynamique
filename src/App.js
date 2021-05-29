import React from "react";
import Artiste from "./Artiste";
import ArtisteForm from "./ArtisteForm";

import "./styles.css";

class App extends React.Component {
  state = {
    artistes: [
      { id: 1, nom: "Maceo Plax" },
      { id: 2, nom: "Charlotte de witte" },
      { id: 3, nom: "Alfa bandy" }
    ]
  };

  handelDelete = (id) => {
    const artistes = [...this.state.artistes];
    const index = artistes.findIndex((x) => x.id === id);
    artistes.splice(index, 1);
    this.setState({ artistes });
  };

  handelAdd = (x) => {
    const artistes = [...this.state.artistes];
    artistes.push(x);
    this.setState({ artistes });
  };

  render() {
    return (
      <div>
        <h1>Liste des Artistes </h1>
        <ul>
          {this.state.artistes.map((x) => (
            <Artiste detail={x} onDelete={this.handelDelete} />
          ))}
        </ul>
        <ArtisteForm onAdd={this.handelAdd} />
      </div>
    );
  }
}

export default App;
