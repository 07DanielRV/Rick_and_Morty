import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Location from './Location';
import Residents from './Residents';
import Page from './Page';

const RyM_app = () => {
    
    const [ rymLocation, setRymLocation ] = useState({})

  useEffect(() => {
    let idLocation = Math.floor(Math.random() * 126) + 1
    axios.get(`https://rickandmortyapi.com/api/location/${idLocation}`)
    .then(res => setRymLocation(res.data))
  }, [])

  console.log(rymLocation)

    const [searchLoc, setSearchLoc] = useState("")
    
    const search = () => {
        if (searchLoc <= 126){
            axios.get(`https://rickandmortyapi.com/api/location/${searchLoc}`)
            .then(res => setRymLocation(res.data))
            setSearchLoc("")
        }else {
            alert('You are very high')
            setSearchLoc('')
        }
    }

    const [page,setPage] = useState(1)
    const perPage = 6
    const quantyPage = Math.ceil(rymLocation.residents?.length / perPage)
    const firstIndex = (page - 1) * perPage
    const residents = rymLocation.residents?.slice(firstIndex, firstIndex + perPage)


    return (
        <div className='mainContain'>
            <div className='input'> 
                <input type="number" min={1} max={126} value={searchLoc} onChange={(e) => setSearchLoc(e.target.value)} placeholder={'ID (1-126)'} />
                <button className='btnSearch' onClick={search}>Search</button>
            </div>
            <Location rym={rymLocation} />
            <Page page={page} setPage={setPage} quantyPage={quantyPage}/>
            {residents?.map((rym) => (
                <Residents url={rym} key={rym} />
            ))
                
            }
        </div>
    );
};

export default RyM_app;