import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/Home.css'
import Footer from '../components/Footer'
import parse from 'html-react-parser'

import { homeSection } from '../data/HomeSection'
import { coursesSection } from '../data/CourseSection'
import { tutorSection, tutorsList } from '../data/TutorsSection'
import { partnersSection, partnersList } from '../data/PartnersSection'
import { contactSection } from '../data/ContactSection'

import Tutors from '../components/Tutors'
import Partners from '../components/Partners'
import Contact from '../components/Contact'







function Home() {
  return (
    <>
        <Navbar/>

    <div>
      <section className='home'>
        <div className='wrapper'>
          {/* Home */}
              


          <img src={homeSection.image}/>
              {/* <img src='https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.2.1769275626.1605867161'/> */}
            <div className='kolom1'>
            {parse(homeSection.content)}             

      
            {/* onlne course */}
              <section>
                  {/* <img src='https://img.freepik.com/free-vector/online-learning-isometric-concept_1284-17947.jpg?size=626&ext=jpg&ga=GA1.2.1769275626.1605867161'/> */}
                   <div className='kolom'>
                  {parse(coursesSection.content)}
                
                </div>
              <img src={coursesSection.image}/>
              </section>



            </div>
        </div>
      </section>



      {/* Tutors Section */}
        <section id='tutors'>
          <div className='tengah'>
            <div className='kolom'> 
              
                {parse(tutorSection.content)}
            </div>

            <Tutors tutorsList={tutorsList}/>

          </div>
        </section>
        
        {/* partners */}
          <section id='partners'>
          <div className='tengah'>
          <div className='kolom'>
            {parse(partnersSection.content)}


          </div>
          <Partners partnersList={partnersList}/>
          </div>
          </section>

     








        </div>
        <Contact contactSection={contactSection}/>
        <Footer/>
    </>
  )
}

export default Home
