import { useState,useContext } from 'react';
import CreateTask from './components/CreateTask';
import TodoList from './components/TodoList';
import SaveData from './components/SaveData';
import { DataProvider, DataDispatchContext } from './store/dataContext';
import './App.css'

//TODO test work of application
export default function App() {
	
	const [dataFiltred,setDataFiltred] = useState(false);

	function handlerFilterDataByCurrentDay():void{
		setDataFiltred(!dataFiltred)
		dispatch({
			type:'filterByDay'
		})
	}

	const dispatch:any = useContext(DataDispatchContext);

	return (
		<DataProvider>
			<div>
				<SaveData/>
				<button onClick={handlerFilterDataByCurrentDay}>{dataFiltred?"Отключить фильтр":"Фильторвать по текущей дате"}</button>
				<CreateTask/>
			</div>
			<TodoList/>
		</DataProvider>
	)
}

