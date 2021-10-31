import React from 'react';

// import { Link } from 'react-router-dom';


const ManagePlan = ({plan}) => {
    const { img, name, description} = plan;


    
    return (
        <div className="col-lg-6">
           <div className="my-5 rounded d-grid">
           <img className="img-fluid rounded" src={img} alt="" />
            <div className="text-start m-4 ">
            <h1 style={{color: 'coral', marginBottom: 15}}>{name}</h1>
            <h5 style={{ marginBottom: 15}}>{description}</h5>
            <h6>{plan.price}</h6>
                  <h6>{plan.time}</h6>
            <div>
            <button  className="bg-warning">UPDATE</button>           
            <button className="bg-warning mx-1" >DELETE</button> 
            </div>
            </div>
                    
           </div>  
              
        </div>
    );
};

export default ManagePlan;