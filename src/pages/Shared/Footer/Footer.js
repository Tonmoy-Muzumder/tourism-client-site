import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitterSquare, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    const fb = <FontAwesomeIcon icon={faFacebook} />
    const twitter = <FontAwesomeIcon icon={faTwitterSquare} />
    const linkedIn = <FontAwesomeIcon icon={faLinkedin} />
    const git = <FontAwesomeIcon icon={faGithub} />

    return (
        <div className='bg-dark'>
              <div className="my-5">
              <h1  style={{color: 'white'}} className='m-0'>Tour<span className='text-danger'>X</span></h1>
              </div>

    <hr />

    <div className='text-white d-flex justify-content-evenly text-start'>
        <div>
            <h3>About TourX</h3>
            <p>You can choose your Place <br /> where you want to Travel. <br /> Have a nice journey!</p>

        <Link to="">ABOUT US</Link>

        <div className='text-white my-3'>
         
           
            <div style={{fontSize:20}}>
                <span>FOLLOW US : </span>
            <Link to=""> {fb} </Link>
            <Link to=""> {twitter} </Link>
            <Link to=""> {linkedIn} </Link>
            <Link to=""> {git}</Link> 
           </div>
           

    </div>
        </div>


        <div>
            <h3>Support</h3>
           <div className='text-white'>
           <Link to="">Contact Us</Link>
           <br />
           <Link to="">About Us</Link>
            <br />
            <Link to="">Destinations</Link>
            <br />
            <Link to="">Our Blogs
            </Link>
            <br />
            <Link to="">Package
            </Link>
            <br />
           </div>
        </div>

        <div>
                <div>
               <h3>Contact Details</h3>
                </div>
                <div>
                    <p>250 Main Street, Mirpur-12, Dhaka. <br />
                    <br />

                        Call - 01634155401 <br />
                        Call -  01634155401 <br /> <br />
                        Email: tonmoymuzumder1@gmail.com</p> <br />
                </div>
        </div>
    </div>
    <br />
    <hr />
   
   <div>
   <h5 className='text-white'>©copyright 2021, Tour Travels.</h5> 
   </div>
    
    <br />
    <br />
   
        </div>
    );
};

export default Footer;



