import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

 const Blogs = () => {

    const blog = {
        img: "https://demo2.tokomoo.com/paradize/wp-content/uploads/sites/7/2016/04/tumblr_n5e0hoT4MZ1st5lhmo1_1280.jpg",
        title: "Last Minute Festive Packages From Superbreak",
        date: "May 24, 2016 by Tonmoy",
        name: "– Drew Houston",
        description: 'Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. We make money and then invest our time and effort in making more money. Does it end? Not usually because we are never satisfied. How many times have we convinced ourselves that if only we had some more money, life would be so sweet? But then, after receiving a substantial raise, we realize that it wasn’t enough and that we need more?'
    }
   
    return (
        <div id="blogs">
            <h3 style={{color: 'coral'}}>Blogs</h3>
            <h1>The most popular Blogs of our Company.</h1>


            <>
            <Container fluid>
             <Row>
               <Col>
                    <div className="container">
                        <br />
                        <img className="img-fluid" src={blog.img} alt="" />
                        <br />
                        <br />
                        <h1>{blog.title}</h1>
                        <br />
                        <p className="text-primary">{blog.date}</p>
                        <br />
                        <div className="text-start">
                        <h4>{blog.name}</h4>
                        <h3>{blog.description}</h3>
                        <br />
                        <br />
                        <button className="bg-success text-white">SEE MORE BLOGS...</button>
                        </div>
                        <br />
                        <hr />
                    </div>
               </Col>
             </Row>
            </Container>
            </>
        </div>
    );
};

export default Blogs;