import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Residents = ({url}) => {
const [resident, setResident] = useState({})

useEffect(() => {
    axios.get( url )
    .then(res => setResident(res.data))
})


    const BackStatus = () => {
        if (resident.status === 'Alive'){
            return '#4AB648'
        } else if (resident.status === 'Dead'){
            return '#B94343'
        } else {
            return '#938686'
        }
    }


    return (
        <div className='residentContain'>
            <div className='residentCard'>
                <div className='infoStatus'>
                    <div className='status' style={{backgroundColor: BackStatus()}}></div><p>{resident.status}</p>
                </div >
                <img src={resident.image} alt="" />
                <div className='infoResident'>
                    <h2>{resident.name}</h2>
                <p><strong>Species </strong>{resident.species}</p>
                <p><strong>Origin </strong>{resident.origin?.name}</p>
                <p><strong>Episodes </strong>{resident.episode?.length}</p>
                </div>
            </div>
        </div>
    );
};

export default Residents;