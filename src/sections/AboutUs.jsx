import React from 'react';
import loby from '../assets/images/loby.jpg';
import hall from '../assets/images/hall.jpg';
import { Link } from 'react-router-dom';
function AboutUs({ aboutRef }) {
  return (
    <section className='about' id='about' ref={aboutRef}>
      <div className='about-container center flex-sb flex-align-top'>
        <article className='about-article flex-col'>
          <h3>
            Little Lemon <span>Chicago</span>
          </h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
            <span>
              <Link>read more...</Link>
            </span>
          </p>
        </article>
        <div className='aboutImg-container'>
          <div className='about-img-right'>
            <img src={loby} alt='loby' className='img' />
          </div>
          <div className='about-img-left'>
            <img src={hall} alt='hall' className='img' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
