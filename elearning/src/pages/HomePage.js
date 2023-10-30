import React from 'react';
import Hero from '../components/Hero'; // Import Hero without curly braces
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='holder'>
      <Hero />
      <CoursesList />
      <CategoriesList/>
      <Footer/>
    </div>
  );
}

export default HomePage;
