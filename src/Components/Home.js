import {Link} from "react-router-dom";
import homeImage from "../c3p0.png";

export default function Home() {

  return(
    <div className="home-page">
       <img className="hero-image" src={homeImage} alt="The best character in the series, C3P0."/>
        <h1>Welcome to StarWars Encyclopedia, an ever-expanding database
          containing info about all the films and characters from your
          favorite franchise.</h1>
        

        <Link className="start-btn" to="/characters">Get Started</Link>
    </div>
  )
}
