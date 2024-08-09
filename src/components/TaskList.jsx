import Task from './Task'

const TaskList = ({tasks , onDelete}) => {
    return(
        <div style={{display:'flex' , backgroundColor:'#FFFFFF' , columnGap:'16px' , padding:'16px 8px' , width:'100%'}} >
            {tasks.map((item) => {
                return <Task key={item.id} task={item} onDelete={onDelete}/>
            })}
        </div>
    )
}
export default TaskList