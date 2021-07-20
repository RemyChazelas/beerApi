import { useEffect, useState } from "react";
import BeerCard from "./BeerCard";

const BeersList = () => {
    const [beers, setBeers] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=15`)
            .then(response => response.json())
            .then(data => setBeers(data))
    }, [page])

    return (
        <>
            <h1>Beers List</h1>
            <div style={{
                display: 'flex',
                width: '100vw',
                flexWrap: 'wrap'
            }}>
                {beers.length === 0
                    ? <div>Wait...</div>
                    : beers.map((beer) => (
                        <BeerCard key={beer.id} {...beer} />
                    ))
                }
            </div>
            {page > 1 &&
                <button onClick={() => setPage(page - 1)}>Previous Page</button>
            }
            <button onClick={() => setPage(page + 1)}>Next Page</button>
        </>
    );
}

export default BeersList;