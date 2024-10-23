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

    const updateTask = (index, updatedTask) => {
        setData((prevData) => {
            const newData = [...prevData];
            newData[index] = updatedTask; // Update the specific task
            return newData; // Return the updated data
        });
    };

    return (
        <TaskContext.Provider value={{ data, addDictionary,deleteTask,updateTask }}>
            {children}
        </TaskContext.Provider>
    )
}

