import { createContext, Dispatch, useContext, useReducer } from "react";
//Custom types for actions and data
export interface TodoItem {
	title: string;
	text: string;
	date: string;
}

export type TodoState = TodoItem[];

type Action =
	| { type: 'add'; title: string; text: string; date: string }
	| { type: 'delete'; index: number }
	| { type: 'edit' }
	| { type: 'save' }
	| { type: 'filterByDay'; datafiltred: boolean; dateNow?: string };

export const DataContext = createContext<TodoState | null>(null);
export const DataDispatchContext = createContext<Dispatch<Action> | null>(null);

const dateNow: string = new Date().toLocaleDateString().split(".").reverse().join("-");

export function DataProvider({ children }: { children: React.ReactNode }) {
	const [data, dispatch] = useReducer(dataReducer, getInitialData());

	return (
	<DataContext.Provider value={data}>
		<DataDispatchContext.Provider value={dispatch}>
		{children}
		</DataDispatchContext.Provider>
	</DataContext.Provider>
	);
}

export function useData(): TodoState {
	const context = useContext(DataContext);
	if (context === null)
		throw new Error('useData должен быть использован с DataProvider');
	return context;
}

export function useDataDispatch(): Dispatch<Action> {
	const context = useContext(DataDispatchContext);
	if (context === null) {
	throw new Error('useDataDispatch должен быть использован с DataProvider');
	}
	return context;
}

export function dataReducer(data: TodoState, action: Action): TodoState {
	switch (action.type) {
		case 'add': {
			const newData = [...data, {
				title: action.title,
				text: action.text,
				date: action.date
			}];
			localStorage.setItem("todo-list", JSON.stringify(newData));
			return newData;
		}
		case 'delete': {
			return data.filter((item) => data.indexOf(item) !=action.index? item:'');
		}
		case 'edit':
		case 'save': {
			localStorage.setItem("todo-list", JSON.stringify(data));
			return [...data];
		}
		case 'filterByDay': {
			if (action.datafiltred) {
			return data.filter(item => item.date === (action.dateNow || dateNow));
			}
			const savedData = getInitialData();
			return savedData ? [...savedData] : [];
		}
		default: {
			throw new Error(`Unknown action: ${(action as Action).type}`);
		}
	}
}

function getInitialData(): TodoState {
	const data = localStorage.getItem("todo-list");
	return data ? JSON.parse(data) as TodoItem[] : [];
}