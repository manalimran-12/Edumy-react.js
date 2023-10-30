import React from 'react'
import styled from 'styled-components';
import Tabs from "./Tabs"
import { useCoursesContext } from "../context/courses_context";


const CourseList = () => {

  const {courses} = useCoursesContext();
  console.log(courses)
  return (
    <CoursesListWrapper>
      <div className='container'>
        <div className='courses-list-top'> 
         <b><h2>Empower your future with our online courses</h2></b>
         <p>Choose from 204,000 online video courses at your fingerprint</p>
        </div>

        <Tabs courses = {courses} />
      </div>
    </CoursesListWrapper>
  )
}

const CoursesListWrapper = styled.div`

padding: 55px 0;
  .courses-list-top h2{
    font-weight: bold;
    font-family: 'Lora', serif;
  }
  .courses-list-top p{
    font-size: 1.8rem;
    font-family: 'Lora', serif;
  }

  .courses-list-top:hover{
    
    text-decoration:none;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }


`;

export default CourseList