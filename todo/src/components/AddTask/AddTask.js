import React, { useState, useContext } from 'react'
import Tasks from '../Tasks/Tasks'
import { Link } from 'react-router-dom'
import { TaskContext } from '../../TaskContext/TaskContext'


const AddTask = ({ fs }) => {
  const { addDictionary } = useContext(TaskContext)
  let [titles, setTitles] = useState('')
  let [description, setDescription] = useState('')
  let [events, setEvents] = useState('Work')
  let [dt, setDt] = useState('')
  let [tags, setTags] = useState(['Tags1'])
  let [newTag, setNewTag] = useState('');
  let [showTagInput, setShowTagInput] = useState(false)


  const AddData = () => {
    if (titles !== '' && description !== '') {
      const newDict = { 'title': titles, 'description': description }
      addDictionary(newDict)
    }
    

  }



  const handleSubmit = (e) => {
    e.preventDefault()

  }
  const handleAddTag = () => {
    if (newTag.trim() !== '') {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
      setShowTagInput(false);
    }

  }
  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }
  return (
    <>

      <form onSubmit={handleSubmit}>
        <div className="container flex flex-col px-3 py-3 rounded-md  bg-gray-100 h-lvh">
          <div className="container flex justify-between ">
            <h1 className={`text-${fs}xl font-semibold`}>Tasks:</h1>

          </div>
          <input type="text" value={titles} onChange={(e) => setTitles(e.target.value)} placeholder="Enter your Task....." className='border-2 my-3 p-2 rounded-md  bg-gray-100  border-gray-300' />
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description about your task...." className='  bg-gray-100 border-2 my-2 rounded-md py-10 px-2 border-gray-300' id=""></textarea>

          <div className="flex">
            <div className="flex flex-col mr-20">
              <label className='py-2 text-gray-800 font-semibold' > List</label>
              <label className='py-1 text-gray-800 font-semibold' > Due Date</label>
              <label className='py-1  text-gray-800 font-semibold' > Tags</label>
            </div>
            <div className=" flex flex-col">
              <div className="container ">
                <select id="" value={events} onChange={(e) => setEvents(e.target.value)} className='px-6 py-1 rounded-md'>
                  <option value="">Personal</option>
                  <option value="">Work</option>
                  <option value="">Event</option>
                </select>
              </div>
              <div className="container">
                <input type="date" value={dt} onChange={(e) => setDt(e.target.value)} className='rounded-md  px-2 py-1 my-2' />
              </div>



              <div className="container flex">
                {
                  tags.map((tag, index) => (
                    <button key={index} onClick={() => handleRemoveTag(tag)} className="bg-blue-200 px-4 py-1 rounded-md mx-2">
                      {tag} <span className="text-red-500 text-2xl mx-2">x</span>
                    </button>

                  ))
                }
                <div className="flex mt-2">
                  {!showTagInput && (
                    <button
                      type="button"
                      className="bg-gray-300 px-4 py-1 rounded-md ml-2 mt-2"
                      onClick={() => setShowTagInput(true)}  // Show input field on click
                    >
                      Add New Tag
                    </button>
                  )}
                  {showTagInput && (
                    <div className="flex mt-2">
                      <input
                        type="text"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        placeholder="Enter tag"
                        className="border px-2 rounded-md"
                      />
                      <button
                        type="button"
                        className="bg-blue-400 px-4 py-1 rounded-md ml-2"
                        onClick={handleAddTag}
                      >
                        Add Tag
                      </button>
                    </div>
                  )}

                </div>


              </div>
            </div>
          </div>

          <div className="my-2">

            <Tasks title="Subtasks" fs="3" />
          </div>
          <div className="container flex justify-end my-32">
            <button className="border-2 border-gray-200 my-3 mx-2 py-2 px-10 rounded-md hover:bg-red-500 font-semibold">Delete Task </button>
            <Link to="/tasks" >
              <button onClick={AddData} className="border-2 border-none my-3 mx-2 py-2 px-10 rounded-md font-semibold bg-yellow-400">Save Changes </button>
            </Link>
          </div>

        </div>
      </form>
    </>
  )
}


export default AddTask
