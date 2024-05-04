import { useEffect, useState } from 'react';

import CreateTask from './components/CreateTask';
import TodoList from './components/TodoList';
import SaveData from './components/SaveData';

import './App.css'

export default function App() {

	const [data, setData] = useState<any[]>(['']);
	const [date, setDate] = useState('');
	const [dataFiltred,setDataFiltred] = useState(false);

	const [title, setTitle] = useState('');
	const [text, setText] = useState('');

	let dataReached:Boolean = false;
	let dateNow:String = new Date().toLocaleDateString().split(".").reverse().join("-");
	
	function handlerFilterDataByCurrentDay(){

		if(!dataFiltred){
			setData(data.filter((item:any) => item.date == dateNow));
			setDataFiltred(!dataFiltred);
		} else {
			getData();
			setDataFiltred(!dataFiltred);
		}
	}

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
		data.splice(e.target.value,1);
		setData([...data])
	}

	return (
		<>
			<div>
				<SaveData data={data}/>
				<button onClick={handlerFilterDataByCurrentDay}>{dataFiltred?"Отключить фильтр":"Фильторвать по текущей дате"}</button>
				<CreateTask title={title} text={text} date={date} onSubmit={handlerAddData} onTextChange={handlerTextChange} 
				onDateChange={handlerDateChange} onTitleChange={handlerTitleChange}/>
			</div>
			<TodoList data={data} handlerRemoveTask={handlerRemoveTask} />
		</>
	)
}

