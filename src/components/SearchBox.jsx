import React, { useState } from 'react';

function SearchBox() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", search);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search for food..."
        aria-label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBox;
