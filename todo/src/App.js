import { useState } from 'react';
import './App.css';
import MainBody from './components/MainBody/MainBody';
import { AddTaskInDict, TaskContext } from './TaskContext/TaskContext';


function App() {

 

  return (
    <>
    {/* passing the value */}

    <AddTaskInDict>
      <MainBody />      
    </AddTaskInDict>
  




    </>




  );
}

export default App;
