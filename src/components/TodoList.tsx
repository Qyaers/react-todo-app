import TodoListItem from './TodoListItem';
import { useContext } from 'react';
import { DataContext } from '../store/dataContext';

export default function TodoList(){

	const data:any = useContext(DataContext);
	return (
		data.length !=0 &&
		<div className="todo-list">
			<h1 style={{textAlign:'center'}}>Список задач</h1>
				{data.map((item:any,index:number)=>{
					return (
						<TodoListItem key={index} item={item} index={index}/>
					)
				})}
		</div>
	);
}