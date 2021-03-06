import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const { id } = useParams();
    const [plan, setPlan] = useState([]);


    useEffect(() => {
        fetch(`https://fierce-basin-76910.herokuapp.com/plans/${id}`)
        .then(res => res.json())
        .then(data => setPlan(data))
        .catch(
            (error) => {
              console.log(error);
            }
          )
    },[]);
    return (
        <div className="container my-4">
            <br />
            <h1>Your are booking this Package</h1>
            <br />
           <img className="img-fluid" src={plan.img} alt="" />
           <div className="text-start m-4 ">
            <h1 style={{color: 'coral', marginBottom: 15}}>{plan.name}</h1>
            <h5 style={{ marginBottom: 15}}>{plan.description}</h5>
            <div>
                  <h6>{plan.price}</h6>
                  <h6>{plan.time}</h6>
                
            </div>
<br />
<br />
            <button className="bg-warning fs-5 text-white">BOOKING...</button>
            </div>
        </div>
    );
};

export default Booking;

