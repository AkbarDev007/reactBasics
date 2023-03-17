import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import "./CharacterList.css";
import Search from "./Search";
import { Link } from "react-router-dom";
const GET_CHARACTERS = gql`
  query ($page: Int!) {
    characters(page: $page) {
      info {
        pages
      }
      results {
        id
        name
        image
      }
    }
  }
`;
const CharacterList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { page: currentPage },
  });

  useEffect(() => {
    if (data) {
      setTotalPages(data.characters.info.pages);
    }
  }, [data]);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  if (loading) return <p>Spinner Loading...</p>;
  if (error) return <p>Something went Wrong :(</p>;
  return (
    <>
      <Link to={`/shapagamForm`}>
        <h3>React Form</h3>
      </Link>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          marginBottom: "3rem",
        }}
      >
        <Search />
      </div>
      <ul className="CharactersList">
        {data.characters.results.map((character) => (
          <li key={character.id}>
            <Link to={`/${character.id}`}>
              <img src={character.image} alt={"users Images"} />
              <h2>{character.name}</h2>
            </Link>
          </li>
        ))}
      </ul>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
        <button onClick={handlePrevClick}>Prev</button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </>
  );
};

export default CharacterList;
