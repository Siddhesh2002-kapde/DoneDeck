import React, { useState } from 'react'
const Tasks = ({title,fs,color}) => {
    
    const [data, setData] = useState('');
    const [arrayData, setArrayData] = useState([]);
    
    const handleChange = (e) => {
        setData(e.target.value)

    }
    const handleClick = (e) => {
        e.preventDefault();
        if (data.trim() !== '') {
            setArrayData([...arrayData, data])
            setData('')
        }
    }


    return (
        <>

            <h1 className={`text-${fs}xl font-bold mb-6`}>{title}</h1>
            <div className='mx-6'>
                <ul className='my-3'>
                    <li>
                        <form >
                            <div className="relative w-full my-2 border-2 border-gray-200 rounded-md">
                                <input
                                    type="text" value={data} onChange={handleChange}
                                    className="w-full py-2 rounded-lg px-3 pl-10"
                                    placeholder="Add Tasks"
                                />

                                <button onClick={handleClick}>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className=" size-4 absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </li>


                    {
                        arrayData.map((item) => (
                            <li className={`w-full border-b-2 border-gray-300 my-3 ${color} px-2 py-2`}>
                                <input type="checkbox" className='mx-2' /><label className='mx-2 text-md font-semibold text-slate-800'>{item}</label>
                            </li>
                        ))
                    }
                </ul>
            </div>



        </>
    )
}

export default Tasks
