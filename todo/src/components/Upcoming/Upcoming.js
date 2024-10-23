import React from 'react'
import Tasks from '../Tasks/Tasks'


const Upcoming = () => {
    return (
        <>
            <h1 className='text-5xl font-bold mb-10'>Upcoming</h1>
            <div className="container rounded-lg my-3 border-2 border-gray-200 mx-3 h-80 w-auto p-4">
               <Tasks title = "Today" fs = "4" color = "bg-white"/>


            </div>
            <div className="container flex ">
                <div className="main1 h-lvw w-lvw border-2 mx-4 my-2 px-3 py-3  border-gray-200 rounded-xl ">
                   <Tasks title = "Towmorrow" fs = "4"/>
                </div>
                <div className="main1 h-lvw w-lvw border-2 mx-4 my-2 px-3 py-3  border-gray-200 rounded-xl ">
                <Tasks title = "This Week" fs = "4"/>
                </div>
            </div>
        </>
    )
}

export default Upcoming
