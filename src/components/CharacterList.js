import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(result => {
        console.log(result);
        setCharacters(result.data.results);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      <SearchForm />
      {characters.map(thing => {
        return (
          <CharacterCard
            name={thing.name}
            key={thing.id}
            species={thing.species}
            status={thing.status}
            image={thing.image}
            gender={thing.gender}
            location={thing.location}
          />
        )
      })}
    </section>
  );
}

