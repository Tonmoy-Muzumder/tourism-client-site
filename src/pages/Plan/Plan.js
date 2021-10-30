import React from 'react';

const Plan = ({plan}) => {
    const {img, name, description, time, price} = plan;
    return (

        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
           <div style={{backgroundColor: 'lightcyan'}} className="my-5 rounded">
           <img className="img-fluid" src={img} alt="" />
            <div className="text-start m-4 ">
            <h1 style={{color: 'coral', marginBottom: 15}}>{name}</h1>
            <h5 style={{ marginBottom: 15}}>{description}</h5>
            <div className="d-flex justify-content-between">
                  <h6>{price}</h6>
                  <h6>{time}</h6>
                
            </div>
            <button className="bg-warning text-white fs-3 my-5">BOOK NOW</button>
            </div>
            
           </div>

           
           
        </div>
    );
};

export default Plan;