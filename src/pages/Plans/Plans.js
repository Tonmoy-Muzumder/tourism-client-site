import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Plan from '../Plan/Plan';
import Spinner from 'react-bootstrap/Spinner'

const Plans = () => {
    const [plans, setPlans] = useState([]);
    const { isLoading } = useAuth();

    useEffect(() => {
        const url = 'https://fierce-basin-76910.herokuapp.com/plans';

        fetch(url)
        .then(res => res.json())
        .then(data => setPlans(data))
    }, []);

 
    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    };
    
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