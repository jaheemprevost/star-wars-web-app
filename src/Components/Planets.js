import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import FetchError from './FetchError';

export default function Planets() {
  const [url, setUrl] = useState('https://www.swapi.tech/api/planets');
  const {data : planets, isLoading, error} = useFetch(url);
 
  return(
    <div className="list">
      <h2 className="category-name">Planets</h2>

      <section className="list-content">

        {isLoading &&  <i className="fas fa-spinner fa-spin"></i>}

        {error && <FetchError link={url} />}

        {planets && planets.map(planet => {
          return(
            <Link className="item-link" key={planet.uid} to={`/planets/${planet.uid}`}>
              <div className="list-item">
                <p>{planet.name}</p>
              </div>
            </Link>
            )
        })}
      </section>
    </div>
  )
}
