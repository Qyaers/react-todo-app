import { createContext, useContext,useReducer } from "react";

export const DataContext = createContext(null);
export const DataDispatchContext = createContext(null);

const dateNow:String = new Date().toLocaleDateString().split(".").reverse().join("-");

export function DataProvider({children}:any) {
	const [data,dispatch] = useReducer(dataReducer,initialData)

	return (
		<DataContext.Provider value={data}>
			<DataDispatchContext.Provider value={dispatch}>
				{children}
			</DataDispatchContext.Provider>
		</DataContext.Provider>
	);
}

export function useData() {
	return useContext(DataContext);
}

export function useDataDispatch() {
	return useContext(DataDispatchContext);
}

export function dataReducer(data:any,action:any) {
	switch (action.type) {
		case 'add': {
			console.log(action.type);
			return [...data, 
				{
					'title': action.title,
					'text': action.text, 
					'date': action.date
				}
			];
		}
		case 'delete': {
			return data.splice(action.value,1);
		}
		case 'save': {
			localStorage.setItem("todo-list",JSON.stringify(data));
			alert("Ваш список задач сохранен");
			break;
		}
		case 'filterByDay': {
			if(action.datafiltred){
				return data.filter((item:any) => item.date == dateNow);
			}
			else{
				data = getData();
				return [...data]
			}
		}
		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
}


function getData():object{
	let newData:any = localStorage.getItem("todo-list");
	newData = JSON.parse(newData);
	return newData;
}

const initialData:object = getData();
