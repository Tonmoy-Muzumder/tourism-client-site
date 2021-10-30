import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Plan from '../Plan/Plan';

const Plans = () => {
    const [plans, setPlans] = useState([]);


    useEffect(() => {
        const url = 'http://localhost:5000/plans';

        fetch(url)
        .then(res => res.json())
        .then(data => setPlans(data))
    }, []);
    return (
        <div  id="plans">
            <div  className="my-5" >
            <h3 style={{color: 'coral'}}>Choose Your Package</h3>
            <h1 >Select Your Best Package For Your Travel</h1>
            </div>
            

            <div className="container fluid">
                <div className="row ">
                <hr />
                {
                    plans.map(plan => <Plan
                        key={plan._id}
                        plan={plan}
                    ></Plan>)
                }
                </div>
<hr />
            </div>
        </div>
    );
};

export default Plans;