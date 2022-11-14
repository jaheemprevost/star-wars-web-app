import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import FetchError from './FetchError';

export default function Planet() {
  const { id } = useParams();
  const url = `https://www.swapi.tech/api/planets/${id}`
  const { data: planet, isLoading, error } = useFetch(url);
  return(
    <div className="dynamic-component">
      <h2>Planet</h2>

      {isLoading &&  <i className="fas fa-spinner fa-spin"></i>}

      {error && <FetchError link={url} />}

      {planet && <>
        <p>Name: {planet.properties.name}</p>
    
        <p>Rotation Period: {planet.properties["rotation_period"]}</p>

        <p>Diameter: {planet.properties.diameter} </p>

        <p>Orbital Period: {planet.properties["orbital_period"]}</p>

        <p>Gravity: {planet.properties.gravity}</p>

        <p>Population: {planet.properties.population}</p>

        <p>Climate: {planet.properties.climate}</p>

        <p>Terrain: {planet.properties.terrain}</p>
        
        <p>Surface Water: {planet.properties["surface_water"]}</p>
      </>}
    </div>
  ) 
} 
