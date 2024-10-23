import { useState } from 'react';
import './App.css';
import MainBody from './components/MainBody/MainBody';
import { AddTaskInDict } from './TaskContext/TaskContext';
import UpdateTask from './components/UpdateTask/UpdateTask';


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
