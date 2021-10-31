import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ManagePlan from '../ManagePlan/ManagePlan';


const ManagePlans = () => {
    const [plans, setPlans] = useState([]);

    useEffect(() => {
        fetch('https://fierce-basin-76910.herokuapp.com/plans')
        .then( res => res.json())
        .then(data => setPlans(data))
    }, []);


    const handleDelete = id => {
        const url = `https://fierce-basin-76910.herokuapp.com/plans/${id}`;

        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('successfully deleted')
                const remaining = plans.filter(plan => plan._id !== id);
                setPlans(remaining);
               
            }
           
        })
        return handleDelete;
    }
  
    return (
        <div>
            <h1>Manage All Plans</h1>

            <div className="container fluid">
                <div className="row ">
                <hr />
                {
                    plans.map(plan => <ManagePlan
                        key={plan._id}
                        plan={plan}
                    ></ManagePlan>)
                }
                
                </div>
                
<hr />
            </div>

        </div>
    );
};

export default ManagePlans;