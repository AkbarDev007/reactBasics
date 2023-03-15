import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const GET_CHARACTER_LOCATION = gql`
  query GetCharacterLocation($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const CharacterSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [getCharacterLocation, { loading, error, data }] = useLazyQuery(
    GET_CHARACTER_LOCATION,
    {
      variables: { name: searchQuery },
    }
  );

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
    if (value === "") {
      setSearchQuery("");
      getCharacterLocation({ variables: { name: "@" } });
    } else {
      if(searchQuery.length>4){
        getCharacterLocation();
      }
     
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search character location..."
        value={searchQuery}
        onChange={handleInputChange}
      />
      {loading && <p>Spinner Loading...</p>}
      {error && <p>Something went Wrong :(</p>}
      <div>
        {data && (
          <ul>
            {data.characters.results.map((result) => (
              <li key={result.location.name}>{result.location.name}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default CharacterSearch;
