import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {name}=useParams()
    const [country,setCountry]=useState([])
    useEffect(()=>{
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res=>res.json())
        .then(data=>setCountry(data))
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <div className='container'>
            <div className='d-flex justify-content-center'>
            {
                country.map(details=>
                    <div className="card m-5" style={{width: "18rem"}}>
                        <img src={details.flag} className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                            <h3 className="card-title">{name}</h3>
                            <h6>Capital: {details.capital}</h6>
                            <h6>Area: {details.area}</h6>
                        </div>
                    </div>)
            }
            </div>
        </div>
    );
};

export default CountryDetails;