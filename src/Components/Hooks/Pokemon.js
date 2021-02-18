import React, { useState, useEffect } from "react";
import axios from "axios";

const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemon(res.data.results);
    });
  }, []);
  const mappedPoke = pokemon.map((poke) => {
    return (
      <div>
        <p>{poke.name}</p>
        <img src={poke.img} />
      </div>
    );
  });
  return <div>{mappedPoke}</div>;
};

export default Pokemon;
