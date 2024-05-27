import { useState, useContext } from 'react';
import { useDataDispatch } from '../store/dataContext';

export default function CreateTask ()
{

	
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [date,setDate] = useState('');

	const dispatch:any = useDataDispatch();

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
			className="todo-buttons__form" action="#" onSubmit={ ()=>{
					setText('');
					setTitle('');
					setDate('');
					dispatch({type: 'add',"title":title,"text":text,"date": date})}
				}>
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