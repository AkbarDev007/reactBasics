import React from "react";
import { useParams } from "react-router";
import { useChracter } from "../hook/useCharacter";
import "./Character.css";

export default function Character() {
  const { id } = useParams();
  const { error, data, loading } = useChracter(id);
  if (error) return <p>Something went Wrong :(</p>;
  if (loading) return <p>Spinner Loading...</p>;
  return (
    <div className="Character">
      <img src={data.character.image} width={750} heigh={750} />
      <div className="Character-content">
        <h1>{data.character.name}</h1>
        <div className="Character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div>
                {episode.name} --- <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
