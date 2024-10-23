import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../../TaskContext/TaskContext';
import { useParams, useNavigate, Link } from 'react-router-dom';

const UpdateTask = () => {
    const { data, updateTask } = useContext(TaskContext);
    const { index } = useParams(); // Get task index from URL
    const navigate = useNavigate();

    const [task, setTask] = useState({ title: '', description: '' });

    useEffect(() => {
        if (data[index]) {
            setTask(data[index]); // Prefill form with current task details
        }
    }, [data, index]);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        updateTask(index, task); // Call updateTask to update the task
        navigate('/tasks'); // Navigate back to the task list
    };

    return (
        <div>
            <h1 className="text-3xl font-bold">Update Task</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                        type="text"
                        value={task.title}
                        onChange={(e) => setTask({ ...task, title: e.target.value })}
                        className="border p-2 my-2 w-full"
                    />
                </div>
                <div>
                    <label>Description</label>
                    <textarea
                        value={task.description}
                        onChange={(e) => setTask({ ...task, description: e.target.value })}
                        className="border p-2 my-2 w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 px-4 py-2 text-white rounded">
                    Update Task
                </button>


            </form>
        </div>
    );
};

export default UpdateTask;
