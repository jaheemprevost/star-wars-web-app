import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FetchError from './FetchError';


export default function Character() {
  const { id } = useParams();
  const url = `https://www.swapi.tech/api/people/${id}`;
  const { data: character, isLoading, error } = useFetch(url);
  const [homeworld, setHomeworld] = useState(null);


  useEffect(() => {
    if(character !== null){
      const fetchPlanet = async () => {
        const response = await fetch(character.properties.homeworld);
        const data = await response.json();
        setHomeworld(data.result);
      }
      fetchPlanet();
    }
  }, [character]);

  
  

  return(
    <div className="dynamic-component">

      <h2>Character</h2>

      {isLoading &&  <i className="fas fa-spinner fa-spin"></i>}

      {error && <FetchError link={url} />}

      {homeworld && character && <>
        <p>Name: {character.properties.name}</p>

        <p>Mass: {character.properties.mass}</p>

        <p>Gender: {character.properties.gender} </p>

        <p>Homeworld: <Link to={`/planets/${homeworld.uid}`}>{homeworld.properties.name}</Link></p>

        <p>Hair Color: {character.properties["hair_color"]}</p>

        <p>Skin Color: {character.properties["skin_color"]}</p>

        <p>Eye Color: {character.properties["eye_color"]}</p>

        <p>Birth Year: {character.properties["birth_year"]}</p>
        
      </>}
      
    </div>
  ) 
} 
