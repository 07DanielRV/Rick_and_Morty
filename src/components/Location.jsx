import React from 'react';

const Location = ({rym}) => {
    return (
        <div className='card_location'>
            <h1>{rym.name}</h1>
            <p><strong>Type: </strong>{rym.type}</p>
            <p><strong>Dimension: </strong>{rym.dimension}</p>
            <p><strong>Residents: </strong>{rym.residents?.length}</p>
        </div>
    );
};

export default Location;