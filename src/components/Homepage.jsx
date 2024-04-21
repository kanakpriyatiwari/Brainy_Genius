import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
import bannerpic from '../pictures/banner-comp.png';
import feedbackpic from '../pictures/feedback-pic.png';
import demopic from '../pictures/demopic.jpg';
import banner2home from '../pictures/banner2home.png'
import './Homepage.css';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Homepage() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
   <>
   <Navbar/><br />
   <div className='row'>

    <div className='col-5'>
      <img id='bannerpic1' src={bannerpic} alt="pic1"/>
    </div>
    <div className='col-7'>
      <h2 id='slogan-line'>"Elevate Your Game, Elevate Your Mind: Welcome to BrainyGenius!"</h2>
      <button className='btn btn-primary1'>Explore More</button>
    </div>
   </div>

   <div>
    <h2 className='exam-target'>SELECT YOUR EXAM TARGET <br /> Get Set And Go...</h2>
   </div><br />

   <div className='row'>
    <div className='col-3'>
      <a href="#">
        <button className='btn btn-primary1'>gate</button>
      </a>
    </div>
    <div className='col-3'>
      <a href="#">
        <button className='btn btn-primary1'>gate offline</button>
      </a>
    </div>
    <div className='col-3'>
      <a href="#">
        <button className='btn btn-primary1'>ese</button>
      </a>
    </div>
    <div className='col-3'>
      <a href="#">
        <button className='btn btn-primary1'>ssc-je</button>
      </a>
    </div>
   </div> <br />

   <div className='row'>
    <div className='col-3'>
      <a href="#">
        <button className='btn btn-primary1'>ae-je</button>
      </a>
    </div>
    <div className='col-3'>
      <a href="#">
        <button className='btn btn-primary1'>rrb-je</button>
      </a>
    </div>
    <div className='col-3'>
      <a href="#">
        <button className='btn btn-primary1'>ese-interview</button>
      </a>
    </div>
    <div className='col-3'>
      <a href="#">
        <button className='btn btn-primary1'>campus training</button>
      </a>
    </div>
   </div><br />

   <div class='row'>
    <div class='col-3'>
        <img id='demo-pic' src={demopic} alt="demopic" />
    </div>
    <div class='col-6' id='demo'>
        <form action="#">
            <h2 id='demo-heading'>Schedule Demo Class</h2><hr />
            <div>
              <label htmlFor="Full Name">Full Name</label>
              <input class='form-control' type="text" placeholder='Full Name' />
            </div>
            <div>
              <label htmlFor="Email Id">Email Id</label>
              <input class='form-control' type="text" placeholder='Email Id' />
            </div>
            <div>
              <label htmlFor="Phone No.">Phone No.</label>
              <input class='form-control' type="text" placeholder='Phone No' />
            </div>
            <div>
              <label htmlFor="Mode">Mode</label>
              <select class='form-select'>
                <option value="select mode">select mode</option>
                <option value="offline">offline</option>
                <option value="online">online</option>
              </select>
            </div>
            <div>
              <label htmlFor="branch">Branch</label>
              <select class='form-select'>
                <option value="select mode">select branch</option>
                <option value="CIVIL">CIVIL</option>
                <option value="MECHANICAL">MECHANICAL</option>
                <option value="ELECTRICAL">ELECTRICAL</option>
                <option value="COMPUTER SCIENCE">COMPUTER SCIENCE</option>
              </select>
            </div>
            <button id='schd-demo' class='btn btn-primary'>Schedule Demo</button>
        </form>
    </div> 
  </div>

  <div>
    <h6 id='feedback-students'>Feedback from <b>Our Students</b><hr /> </h6>
  </div>

  {/* Feedback Slider */}
  <div className="feedback-slider">
    <Slider {...settings}>
      {/* First Feedback Card */}
      <div>
        <div className="card">
          <img src={feedbackpic} alt="feedbackpic" />
          <div className="card-body">
            <h5 className="card-title">John Doe</h5>
            <p className="card-text">"The classes at BrainyGenius have been incredibly helpful for my exam preparation. The instructors are knowledgeable and provide excellent guidance."</p>
          </div>
        </div>
      </div>

      {/* Second Feedback Card */}
      <div>
        <div className="card">
          <img src={feedbackpic} alt="feedbackpic" />
          <div className="card-body">
            <h5 className="card-title">Jane Smith</h5>
            <p className="card-text">"I highly recommend BrainyGenius to anyone looking to excel in their exams. The study materials provided are comprehensive and easy to understand."</p>
          </div>
        </div>
      </div>

      {/* Third Feedback Card */}
      <div>
        <div className="card">
          <img src={feedbackpic} alt="feedbackpic" />
          <div className="card-body">
            <h5 className="card-title">Alice Johnson</h5>
            <p className="card-text">"BrainyGenius helped me boost my confidence and improve my problem-solving skills. I'm grateful for their support."</p>
          </div>
        </div>
      </div>

      {/* Fourth Feedback Card */}
      <div>
        <div className="card">
          <img src={feedbackpic} alt="feedbackpic" />
          <div className="card-body">
            <h5 className="card-title">Michael Brown</h5>
            <p className="card-text">"The mock tests provided by BrainyGenius were instrumental in my exam preparation. They accurately simulate the exam environment."</p>
          </div>
        </div>
      </div>

      {/* Fifth Feedback Card */}
      <div>
        <div className="card">
          <img src={feedbackpic} alt="feedbackpic" />
          <div className="card-body">
            <h5 className="card-title">Emily Wilson</h5>
            <p className="card-text">"I appreciate the personalized attention I received at BrainyGenius. The tutors were always available to clarify my doubts."</p>
          </div>
        </div>
      </div>

      {/* Sixth Feedback Card */}
      <div>
        <div className="card">
          <img src={feedbackpic} alt="feedbackpic" />
          <div className="card-body">
            <h5 className="card-title">David Lee</h5>
            <p className="card-text">"The study materials provided by BrainyGenius are top-notch. They cover all the essential topics in a concise manner."</p>
          </div>
        </div>
      </div>
    </Slider>
  </div>
  {/* //////////////////////// */}

  <div >
    <img id='banner2home' src={banner2home}alt="banner2home" />
  </div>
{/* ----------------------------- */}

<Footer/>
   </>
  );
}

export default Homepage;
