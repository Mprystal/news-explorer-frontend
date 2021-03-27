import React from 'react';
import './About.css';
import author from '../../images/image-03author.png';

function About() {
    return (
        <div className='about'>
            <img className='about__img' src={author} alt='author' />
            <div className='about__container' >
                <h2 className='about__title' >About the author</h2>
                <p className='about__paragraph'>
                    This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.
                </p>
                <p className='about__paragraph'>
                    You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.
                </p>

            </div>
            
        </div>
    )
}

export default About
