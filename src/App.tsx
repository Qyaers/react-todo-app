import CreateTask from './components/CreateTask';
import TodoList from './components/TodoList';
import SaveData from './components/SaveData';
import { DataProvider } from './store/dataContext';
import './App.css'

export default function App() {
	
	return (
		<DataProvider>
				<SaveData/>
				<CreateTask/>
			<TodoList/>
		</DataProvider>
	)
}

