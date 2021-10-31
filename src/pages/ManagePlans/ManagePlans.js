import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Button} from 'react-bootstrap';


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
          
            if(data.deletedCount){
                alert('successfully deleted')
                const remaining = plans.filter(plan => plan._id !== id);
                setPlans(remaining);
               
            }
           
        })
        
    }
  
    return (
        <div className="container">
            <h1>Manage All Plans</h1>


            {
                plans.map(plan =><Card
                key= {plan._id}
                plan={plan}
                >
                <Card.Img variant="top" className="img-fluid" src={plan.img} />
                <Card.Body>
               <Card.Title>{plan.name}</Card.Title>
               <Card.Title>{plan.description}</Card.Title>
               <Card.Title>{plan.price}</Card.Title>
               <Card.Title>{plan.time}</Card.Title>
    
                <Button onClick={() => handleDelete(plan._id)} variant="primary">DELETE</Button>
                </Card.Body>
               </Card>)
            }


                


        </div>
    );
};

export default ManagePlans;