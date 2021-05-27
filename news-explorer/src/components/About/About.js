import React from 'react';
import './About.css';
import Author from '../../images/MePro.png';

function About() {
  return (
    <section className='about'>
      <img className='about__img' src={Author} alt='author' />
      <div className='about__container'>
        <h2 className='about__title'>About the author</h2>
        <p className='about__paragraph'>
          Hi, my name is Michael and this is my final project in the web
          development course at Practicum by Yandex, where I am a student and a
          member of the student support team. My role at Practicum currently is
          that of a senior student. I help others who are going through the
          bootcamp with the knowledge I have accumulated over the year!
        </p>
        <p className='about__paragraph'>
          The project has a frontend in React and a backend in Express, and
          allows users to search for news articles using a public News API
          service.
        </p>
      </div>
    </section>
  );
}

export default About;
