import {  createContext, useState } from "react";


export const TaskContext = createContext()



export const AddTaskInDict = ({ children }) => {
    const [data, setData] = useState([]);

    const addDictionary = (newDict) => {
        setData((prevData) => [...prevData, newDict])
    }


    const deleteTask = (index) => {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
    };

    return (
        <TaskContext.Provider value={{ data, addDictionary,deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}

