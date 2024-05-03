import TodoListItem from './TodoListItem';

export default function TodoList({data,handlerRemoveTask}:{data:Array<Object>,handlerRemoveTask:any}){
	
	return (
		data.length !=0 &&
		<div className="todo-list">
			<h1 style={{textAlign:'center'}}>Список задач</h1>
				{data.map((item:any,index:number)=>{
					return (
						<TodoListItem key={index} item={item} index={index} handlerRemoveTask={handlerRemoveTask}/>
					)
				})}
		</div>
	);
}