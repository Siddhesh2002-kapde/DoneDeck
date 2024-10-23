import React, { useContext } from 'react';
import { TaskContext } from '../../TaskContext/TaskContext';
import { Link } from 'react-router-dom';

const StickyWall = () => {
  const { data, deleteTask } = useContext(TaskContext);
  const colors = ['#a3e4d7', '#edbb99', '#d1f2eb', '#d6eaf8 ', '#f4ecf7 '];

  return (
    <>
      <div id="task">
        <h1 className='text-5xl font-bold'>Sticky Wall</h1>

        <div className="grid grid-rows-3 grid-cols-3">
          {data.map((val, index) => (
            <div
              className={`container drop-shadow-xl h-72 w-80 my-10 mx-2 px-6 py-4 rounded-lg flex-col`}
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              <h1 className='text-2xl font-bold my-2'>{val.title}</h1>
              <p>{val.description.slice(0,50)}</p>
              
                <button
                  className='bg-red-500 px-3 py-3 rounded-xl my-10 mx-3'
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                {/* Link to Update Task */}
                <Link to={`/update-task/${index}`} className="bg-blue-500 px-3 py-3 rounded-xl">
                  Edit
                </Link>
              

            </div>
          ))}

          <div className="container drop-shadow-xl flex justify-center items-center bg-gray-200 h-72 w-80 my-10 mx-2 px-6 py-4 rounded-lg flex-col">
            <Link to="/AddTask">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-20"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyWall;
