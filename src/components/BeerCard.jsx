import { Link } from 'react-router-dom';
import './BeerCard.css';

const BeerCard = ({ name, image_url, ingredients, id }) => {
    return (
        <div className="beer-card">
            <h3>{name}</h3>
            <img src={image_url} alt={`image of ${name}`} />
            {ingredients.hops.map((hop) => hop.name)}
            <Link to={`/beers/${id}`} >Show Detail</Link>
        </div>
    );
}

export default BeerCard;