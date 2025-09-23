
import { Link } from 'react-router-dom'

export function UnLink(props) {
  return (
      <Link to={props.seccion} className={props.clase}>{props.titleSeccion}</Link>
    )  
}

