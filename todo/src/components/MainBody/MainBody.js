import React from 'react'

import Navbar from '../Navbar/Navbar';
import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Upcoming from '../Upcoming/Upcoming';
import StickyWall from '../StickyWall/StickyWall'
import Tasks from '../Tasks/Tasks'
import AddTask from '../AddTask/AddTask';
const MainBody = () => {
    const [isVisible, setIsVisible] = useState(true);


  const handleClick = () => {
    setIsVisible(!isVisible);
  }

  return (

      <>
      <Router>

      <div className='mx-2 my-4'>

        <div className="container flex h-screen">
          {
            isVisible ?
            <Navbar click = {handleClick}/>
             
              :
              <div className='top-0'>

                <button className='bg-gray-300 px-3 py-3 rounded-xl' onClick={handleClick}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg></button>
              </div>

          }

          <div class="border-l h-screen border-gray-1 mx-4 my-5"></div>

          <div id = "task" className=" bg-white-600 w-full my-4 overflow-y-scroll scrollbar-hide h-screen rounded-lg">

          <Routes>
            {/* Define the route for the Tasks component */}
            {/* You can add more routes for other components */}
            <Route path="/upcoming" element={<Upcoming/>} /> {/* Example for another component */}
            <Route path="/today" element={<Tasks title = "Today" fs = "5"/>} /> {/* Example for another component */}
            
            <Route path="/tasks" element={<StickyWall title = "" description = "" />} />
            <Route path="/AddTask" element={<AddTask fs = "5"/>} /> {/* Example for another component */}
          </Routes>
          </div>
          
        
         


        </div>

      </div>
      </Router>
      </>

  )
}

export default MainBody
