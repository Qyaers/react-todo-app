import TodoListItem from './TodoListItem';
import { useState } from 'react';
import { useData, useDataDispatch } from '../store/dataContext';

export default function TodoList(){

	const data:any = useData();
	const dispatch:any = useDataDispatch();
	const [dataFiltred,setDataFiltred] = useState(true);

	function handlerFilterDataByCurrentDay(){
		setDataFiltred(!dataFiltred)
		dispatch({
			type:'filterByDay',
			datafiltred: dataFiltred
		})
	}

	return (
		data.length !=0 &&
		<div className="todo-list">
			<br></br>
			<button onClick={handlerFilterDataByCurrentDay}>{!dataFiltred?"Отключить фильтр":"Фильторвать по текущей дате"}</button>
			<h1 style={{textAlign:'center'}}>Список задач</h1>
				{data.map((item:any,index:number)=>{
					return (
						<TodoListItem key={index} item={item} index={index}/>
					)
				})}
		</div>
	);
}