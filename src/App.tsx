import { useEffect, useState } from 'react'

import CreateTask from './components/CreateTask';
import TodoList from './components/TodoList';
import SaveData from './components/SaveData';

import './App.css'

export default function App() {

	const [data, setData] = useState<any[]>(['']);
	const [title, setTitle] = useState('');
	const [text, setText] = useState('');
	const [date, setDate] = useState('');

	let dataReached = false;

	function getData(){
		if(!dataReached){			
			let newData:any = localStorage.getItem("todo-list");
			newData = JSON.parse(newData);
			if (newData){
				setData([...newData]);
			}
		}
	}

	useEffect(()=>{
		getData();
		return () => {
			dataReached = true;
		};
	},[])

	function handlerAddData(e:any) {
		e.preventDefault();

		if(text && date){
			setData([
				...data,
				{
					'title': title,
					'text': text, 
					'date': date
				}
			]);
		}
	}

	function handlerTextChange(e:any){
		setText(e.target.value);
	}

	function handlerDateChange(e:any){
		setDate(e.target.value);
	}

	function handlerTitleChange(e:any){
		setTitle(e.target.value);
	}

	function handlerRemoveTask(e:any){
		console.log(data);
		data.splice(e.target.value,1);
		setData([...data])
	}


	return (
		<>
			<div>
				<SaveData data={data}/>
				<CreateTask title={title} text={text} date={date} onSubmit={handlerAddData} onTextChange={handlerTextChange} 
				onDateChange={handlerDateChange} onTitleChange={handlerTitleChange}/>
			</div>
			<TodoList data={data} handlerRemoveTask={handlerRemoveTask}/>
		</>
	)
}

