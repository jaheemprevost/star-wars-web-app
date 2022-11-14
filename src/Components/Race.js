import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FetchError from './FetchError';

export default function Race() {
  const { id } = useParams();
  const url = `https://www.swapi.tech/api/species/${id}`
  const { data: race, isLoading, error } = useFetch(url);
  const [homeworld, setHomeworld] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if(race !== null){
      const fetchPlanet = async () => {
        const response = await fetch(race.properties.homeworld);
        const data = await response.json();
        setHomeworld(data.result);
      }
      const fetchCharacters = async () => {
        race.properties.people.forEach(async url => {
          const response = await fetch(url);
          const data = await response.json();
          const characterData = data.result;
          setCharacters(prevCharacters => Array.from(new Set([...prevCharacters, {name: characterData.properties.name, id: characterData.uid}])));
        });
      }
      fetchPlanet();
      fetchCharacters();
    }
  }, [race]);

  return(
    <div className="dynamic-component">

      <h2>Race</h2>

      {isLoading &&  <i className="fas fa-spinner fa-spin"></i>}

      {error && <FetchError link={url} />}

      {characters && homeworld && race && <>
        <p>Name: {race.properties.name}</p>

        <p>Classification: {race.properties.classification}</p>

        <p>Designation: {race.properties.designation} </p>

        <p>Average Height: {race.properties["average_height"]}</p>

        <p>Average Lifespan: {race.properties["average_lifespan"]}</p>

        <p>Hair Colors: {race.properties["hair_colors"]}</p>

        <p>Skin Colors: {race.properties["skin_colors"]}</p>

        <p>Eye Colors: {race.properties["eye_colors"]}</p>
        
        <p>Homeworld: <Link to={`/planets/${homeworld.uid}`}>{homeworld.properties.name}</Link></p>

        <p>Language: {race.properties.language}</p>

        <p>People: {characters.map(character => {
          return(
            <Link key={character.id} to={`/characters/${character.id}`}>{character.name} </Link>
          )
        })}</p>
      </>}
      
    </div>
  )
} 
