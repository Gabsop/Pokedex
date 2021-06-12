import "./styles.css";
import Logo from "../../assets/logo.png";
import Search from "../../assets/search.png";
import Pokeball from "../../assets/pokeball.png";
import NotFound from "../../assets/not-found.png";

import axios from "axios";
import { useState, useEffect, useMemo } from "react";
import Modal from "../../components/Modal";
import Pokemon from "../../components/Pokemon";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [type, setType] = useState("");
  const [search, setSearch] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState("");

  const getPokemons = async () => {
    try {
      axios
        .get(
          "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
        )
        .then(function (response) {
          setPokemons(response.data.pokemon);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const displayPokemons = useMemo(() => {
    return pokemons
      .filter((pokemon) => {
        if (pokemon.type.includes(type) || !type) {
          return true;
        }
        return false;
      })
      .filter((pokemon) => {
        if (
          pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
          !search
        ) {
          return true;
        }
        return false;
      })
      .map((pokemon) => (
        <Pokemon
          onClick={() => setSelectedPokemon(pokemon)}
          key={pokemon.id}
          img={pokemon.img}
          name={pokemon.name}
          type={pokemon.type}
          height={pokemon.height}
          weight={pokemon.weight}
        />
      ));
  }, [type, pokemons, search]);

  const typeSelect = (selectedType) => {
    if (selectedType === type) {
      setType("");
      return;
    }
    setType(selectedType);
  };

  return (
    <div className="home">
      <Modal pokemon={selectedPokemon} setPokemon={setSelectedPokemon} />
      <header>
        <img src={Logo} alt="Pokemon logo" className="logo" />
        <h1>Uma Pokedex completa criada em React JS</h1>
        <input
          type="text"
          placeholder="Search a Pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />

        <img className="search-img" src={Search} alt="Magnifying glass" />
      </header>
      <div className="filter">
        <div className="filter-title">
          <img src={Pokeball} alt="Pokeball" />
          <h2>Filter by type</h2>
        </div>
        <hr />
        <div className="type-list">
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Normal" === type ? "type-button-selected" : ""
            }`}
            id="Normal"
          >
            NORMAL
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Fighting" === type ? "type-button-selected" : ""
            }`}
            id="Fighting"
          >
            FIGHTING
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Flying" === type ? "type-button-selected" : ""
            }`}
            id="Flying"
          >
            FLYING
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Poison" === type ? "type-button-selected" : ""
            }`}
            id="Poison"
          >
            POISON
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Ground" === type ? "type-button-selected" : ""
            }`}
            id="Ground"
          >
            GROUND
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Rock" === type ? "type-button-selected" : ""
            }`}
            id="Rock"
          >
            ROCK
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Bug" === type ? "type-button-selected" : ""
            }`}
            id="Bug"
          >
            BUG
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Ghost" === type ? "type-button-selected" : ""
            }`}
            id="Ghost"
          >
            GHOST
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Steel" === type ? "type-button-selected" : ""
            }`}
            id="Steel"
          >
            STEEL
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Fire" === type ? "type-button-selected" : ""
            }`}
            id="Fire"
          >
            FIRE
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Water" === type ? "type-button-selected" : ""
            }`}
            id="Water"
          >
            WATER
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Grass" === type ? "type-button-selected" : ""
            }`}
            id="Grass"
          >
            GRASS
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Electric" === type ? "type-button-selected" : ""
            }`}
            id="Electric"
          >
            ELECTRIC
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Psychic" === type ? "type-button-selected" : ""
            }`}
            id="Psychic"
          >
            PSYCHIC
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Ice" === type ? "type-button-selected" : ""
            }`}
            id="Ice"
          >
            ICE
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Dragon" === type ? "type-button-selected" : ""
            }`}
            id="Dragon"
          >
            DRAGON
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Dark" === type ? "type-button-selected" : ""
            }`}
            id="Dark"
          >
            DARK
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Fairy" === type ? "type-button-selected" : ""
            }`}
            id="Fairy"
          >
            FAIRY
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Shadow" === type ? "type-button-selected" : ""
            }`}
            id="Shadow"
          >
            SHADOW
          </button>
          <button
            onClick={(e) => typeSelect(e.target.id)}
            className={`type-button ${
              "Unknown" === type ? "type-button-selected" : ""
            }`}
            id="Unknown"
          >
            UNKNOWN
          </button>
        </div>
      </div>
      <hr />
      <div className="pokemon-list">
        {displayPokemons.length ? (
          displayPokemons
        ) : (
          <div className="no-pokemons">
            <img className="not-found" src={NotFound} alt="Pokemon Not Found" />{" "}
            <h2>404 - Pokemon not found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
