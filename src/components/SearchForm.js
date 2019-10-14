import React, { useState } from "react";

export default function SearchForm(props) {
 
  const [searchPhrase, setSearchPhrase] = useState("");

  const adjustSearch = event => {
    setSearchPhrase(event.target.value);
  }

  const submitSearch = event => {
    event.preventDefault();
    props.func(searchPhrase);
    console.log(searchPhrase)
  };

  return (
    <section className="search-form">
      <form onSubmit={submitSearch}>
        <input className="input is-primary" type="text"name="name" value={searchPhrase.name} onChange={adjustSearch} />
        <button type="submit">SEARCH!</button>
      </form>
    </section>
  );
}
