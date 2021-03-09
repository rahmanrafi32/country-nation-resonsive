import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries,setCountries]=useState([])
    useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/all')
        .then((res)=>{
            setCountries(res.data);
        })
        .catch((error)=>{
          console.log(error);
        })
    },[])
    return (
        <div className="container g-5">
            <div className='country-container'>
            {
                countries.map(country=><Country country={country}/>)
            }
           </div>
        </div>        
    );
};

export default Home;