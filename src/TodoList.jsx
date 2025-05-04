
import React, {useState} from 'react';


function TodoList(){

    const [tasks, setTasks] = useState(["Take shower", "Go to work", "Walk the dog"]);
    const [newTasks, setNewTasks] = useState("");


    function changeHandle(event){

        setNewTasks(event.target.value);


    }

    function addTask(){

        if(newTasks.trim() !== ""){

            setTasks([...tasks, newTasks]);

            setNewTasks("");
        }


    }

    function removeTask(index){

        setTasks(tasks.filter((element, i) => i !== index));
        setNewTasks("");

    }



    return(<div className='todolist-container'>

        <h1>To-Do-List</h1>


        <div className='todolist'> 

            <input type='text' value={newTasks} onChange={changeHandle} placeholder='Enter task...' />
             <button className='mybutton' onClick={addTask}>add</button>
        </div>


       <div className='container'>

       <ol>

{tasks.map((task, index) => <li key={index}>{task}
    <span>
        <button onClick={() => removeTask(index)}>🗑</button>
    </span>
    
</li>)}

</ol>
       </div>




    </div>)


}


export default TodoList;