import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    const {name,flag}=country;
    return (
        <div className='container col-md-4'>
            <div className="card m-3" style={{width: "18rem"}}>
                <img src={flag} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <button className="btn btn-primary"><Link style={{color:'white'}} to={ `/country/details/${name}`}>Show Details</Link></button>
                </div>
            </div>
        </div>
    ); 
};

export default Country;