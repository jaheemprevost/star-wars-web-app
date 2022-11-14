import {Link} from 'react-router-dom';
import errorImage from '../r2d2.png';

export default function Error404() {

  return(
    <div className="error-404">
      <h1>Uh oh! Page Not Found.</h1>

      <img className="error-image" src={errorImage} alt="The second best character in the series, R2D2."/>
      
      <p>It seems like the page your are looking for is in a galaxy
        far, far away from this site.</p>

        <Link className="home-btn" to="/">Return Home</Link>
    </div>
  )
}
