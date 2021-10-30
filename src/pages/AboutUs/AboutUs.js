import React from 'react';

const AboutUs = () => {
    const about = {
        img : "https://www.tourx-react.egenslab.com/static/media/about-1.bcfbc984.png",
        name: "About TourX",
        title: "The Best Travel Agency Company.",
        description: "We are giving you some tour package For a Wonderful tour. Our company The Best Travel Agency Company. You can be training about tour with our best guider.We are giving you some tour package For a Wonderful tour. Our company The Best Travel Agency Company. You can be training about tour with our best guider. Book your tour package travel anywhere. Have a nice tour with TourX!"

    }
    return (
        <div  id ="aboutUs">
            <div style={{backgroundColor: 'lightgray'}} className="container  my-5">
                <img className="img-fluid mt-5" src={about.img} alt="" />
                <div className="text-start m-5">
                    <h3 style={{color: 'coral'}}>{about.name}</h3>
                    <h1>{about.title}</h1>
                    <p>{about.description}</p>

                    <button className="bg-success text-white">READ MORE</button>
                </div>
                <hr />
            </div>
            
        </div>
    );
};

export default AboutUs;