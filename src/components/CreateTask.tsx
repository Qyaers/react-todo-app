import { useState, useContext } from 'react';
import { DataDispatchContext } from '../store/dataContext';

export default function CreateTask ()
{

	
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [date,setDate] = useState('');

	const dispatch:any = useContext(DataDispatchContext);

	function handlerTextChange(e:any){
		setText(e.target.value);
	}

	function handlerDateChange(e:any){
		setDate(e.target.value);
	}

	function handlerTitleChange(e:any){
		setTitle(e.target.value);
	}

	return (
		<div className="todo-buttons">
			<form style={{display: "flex",flexDirection: "column", alignItems: "stretch"}} 
			className="todo-buttons__form" action="#" onSubmit={dispatch({type: 'add',title1:title,text1:text,date1: date})}>
				<label htmlFor="todo-title">Наименование задачи</label>
				<input required id='todo-title' type="text" value={title} onChange={handlerTitleChange}/>
				<label htmlFor="todo-text">Описание задачи</label>
				<textarea required name="todo-text" id="" value={text} onChange={handlerTextChange} cols={30} rows={10}></textarea>
				<input required type="date" value={date} onChange={handlerDateChange}/>
				<button type="submit" >Добавить задачу</button>
			</form>
		</div>
	)
}