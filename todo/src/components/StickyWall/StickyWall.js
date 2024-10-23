import React, { useContext, useState } from 'react'
import { TaskContext } from '../../TaskContext/TaskContext'
import { Link, useLocation } from 'react-router-dom'


const StickyWall = () => {
  const { data ,deleteTask } = useContext(TaskContext)

  const colors = ['red','green','pink','yellow','blue'];


  
  


  return (
    <>
      <div id="task">
        <h1 className='text-5xl font-bold'>Sticky Wall</h1>

        <div className="grid grid-rows-3 grid-cols-3">
          {
            data.map((val, index) => (
              <>
                <div key = {index} className={`container drop-shadow-xl bg-${colors[index % colors.length]}-400 h-72 w-80 my-10 mx-2 px-6 py-4  rounded-lg flex-col`}>
                  <h1 className='text-2xl font-bold my-2'>{val.title}</h1>
                  <p>{val.description}</p>
                  <button className='bg-red-500 px-3 py-3 rounded-xl my-32' onClick={()=>deleteTask(index)} > delete</button>
                </div>
              </>


            )

            )
          }

          <div className="container  drop-shadow-xl flex justify-center items-center bg-gray-200 h-72 w-80 my-10 mx-2 px-6 py-4  rounded-lg flex-col ">
            <Link to="/AddTask" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </Link>

          </div>


        </div>
      </div>


    </>
  )
}

export default StickyWall
