import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {

    const [cardsData, setCardsData] = useState(null)

    useEffect(() => {
        fetch('package.json')
            .then((res) => res.json())
            .then(data => setCardsData(data.results))
    }, [])

    return (
        <div>
            {
                cardsData && cardsData.map(card => <Card key={card.name} card={card} />)
            }
        </div>
    );
};

export default Cards;