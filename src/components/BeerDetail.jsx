import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BeerDetail = () => {
    const { id } = useParams();
    const [beer, setBeer] = useState(null);

    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers/${id}`)
            .then(response => response.json())
            .then(data => setBeer(data[0]))
    }, [])

    return (
        <>
            {beer &&
                <div>
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <img src={beer.image_url} alt={`image of ${beer.name} in detail page`} />
                </div>
            }
        </>
    );
}

export default BeerDetail;