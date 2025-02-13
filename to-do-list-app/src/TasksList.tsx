import TaskInterface from "./TaskInterface";

type TasksListType = {
    tasks: TaskInterface[],
    setTasks: React.Dispatch<React.SetStateAction<TaskInterface[]>>
}

function TasksList({tasks, setTasks}: TasksListType) {

    const capitalizeFirstLetter = (str: string) => {
        // Get rid of space at the beginning to capialize first letter correctly
        str = str.trim();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const changeCheckedStatus = (index: number) => {
        setTasks((prevTasks) => 
            // Search corresponding task with given index to change isChecked value
            prevTasks.map((task, i) => 
                i === index ? { ...task, isChecked: !task.isChecked } : task
            )
        );
    }

    const deleteCheckedTasks = () => {
        setTasks((prevTasks) => 
            // Filters tasks to erase checked ones
            prevTasks.filter((task) => 
                !task.isChecked
            )
        );
    }

    return(
        <>
            <ul className='item-list'>
                {tasks.map((taskObject: TaskInterface, index: number) =>
                    <div className='list-fragment'  key={index}>
                        <li onClick={() => changeCheckedStatus(index)}>{capitalizeFirstLetter(taskObject.task)}</li>
                        <input type="checkbox"
                               checked={taskObject.isChecked}
                               onChange={() => changeCheckedStatus(index)}/>
                    </div>
                )}
            </ul>
            {tasks.length > 0 && <button className='delete-btn' onClick={deleteCheckedTasks}>Delete</button>}
        </>
    );
}

export default TasksList