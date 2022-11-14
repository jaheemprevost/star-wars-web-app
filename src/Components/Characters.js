import {useState} from 'react';
import {Link} from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import FetchError from './FetchError';

export default function Characters() {
  const [url, setUrl] = useState('https://www.swapi.tech/api/people');
  const {data : characters, isLoading, error} = useFetch(url);

  return(
    <div className="list">
      <h2 className="category-name">Characters</h2>

      <section className="list-content">
        
        {isLoading &&  <i className="fas fa-spinner fa-spin"></i>}

        {error && <FetchError link={url} />}

        {characters && characters.map(character => {
          return(
            <Link className="item-link" key={character.uid} to={`/characters/${character.uid}`}>
              <div className="list-item">
                <p>{character.name}</p>
              </div>
            </Link>
            )
        })}
      </section>
    </div>
  )
}
