import { Link } from "react-router-dom";

export default function FetchError(props) {
  return(
    <div className="fetch-error">
    <h1>Something went wrong with retrieving the data.</h1>
    <Link className="retry-btn" to={props.url}>Try Again</Link>
    </div>
  )
}
