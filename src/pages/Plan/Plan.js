import React from 'react';
import { Link } from 'react-router-dom';

const Plan = ({plan}) => {
    const {_id, img, name, description, time, price} = plan;
    return (

        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
           <div style={{backgroundColor: 'lightcyan'}} className="my-5 rounded">
           <img className="img-fluid mt-3 rounded" src={img} alt="" />
            <div className="text-start m-4 ">
            <h1 style={{color: 'coral', marginBottom: 15}}>{name}</h1>
            <h5 style={{ marginBottom: 15}}>{description}</h5>
            <div className="d-flex justify-content-between">
                  <h6>{price}</h6>
                  <h6>{time}</h6>
                
            </div>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning my-5">Book Now</button>
            </Link>
            </div>           
           </div>    
        </div>
    );
};

export default Plan;