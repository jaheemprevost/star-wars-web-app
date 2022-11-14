import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';
import FetchError from './FetchError';

export default function Races() {
  const [url, setUrl] = useState('https://www.swapi.tech/api/species');
  const {data : races, isLoading, error} = useFetch(url);

  return(
    <div className="list">
      <h2 className="category-name">Races</h2>

      <section className="list-content">

        {isLoading &&  <i className="fas fa-spinner fa-spin"></i>}

        {error && <FetchError link={url} />}

        {races && races.map(races => {
          return(
            <Link className="item-link" key={races.uid} to={`/races/${races.uid}`}>
              <div className="list-item">
                <p>{races.name}</p>
              </div>
            </Link>
            )
        })}
      </section>
    </div>
  )
}
