import { useState, ChangeEvent, FormEvent} from 'react';
import { useDataDispatch } from '../store/dataContext';

export default function CreateTask ()
{
	const [title, setTitle] = useState<string>('');
	const [text, setText] = useState<string>('');
	const [date,setDate] = useState<string>('');

	const dispatch = useDataDispatch();

	function handlerTextChange(e:ChangeEvent<HTMLTextAreaElement>){
		setText(e.target.value);
	}

	function handlerDateChange(e:ChangeEvent<HTMLInputElement>){
		setDate(e.target.value);
	}

	function handlerTitleChange(e:ChangeEvent<HTMLInputElement>){
		setTitle(e.target.value);
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		setText('');
		setTitle('');
		setDate('');
		dispatch({type: 'add',"title":title,"text":text,"date": date})
	}

	return (
		<div className="todo-buttons">
			<form style={{display: "flex",flexDirection: "column", alignItems: "stretch"}} 
			className="todo-buttons__form" action="#" onSubmit={handleSubmit}>
				<label htmlFor="todo-title">Наименование задачи</label>
				<input required id='todo-title' type="text" value={title} onChange={handlerTitleChange}/>
				<label htmlFor="todo-text">Описание задачи</label>
				<textarea required name="todo-text" id="" value={text} onChange={handlerTextChange} cols={30} rows={10}></textarea>
				<input required type="date" value={date} onChange={handlerDateChange}/>
				<button type="submit">Добавить задачу</button>
			</form>
		</div>
	)
}