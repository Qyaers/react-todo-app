import { createContext, useContext,useReducer } from "react";

export const DataContext:any = createContext(null);
export const DataDispatchContext:any = createContext(null);

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
			data = [...data, 
				{
					'title': action.title,
					'text': action.text, 
					'date': action.date
				}
			]
			localStorage.setItem("todo-list",JSON.stringify(data));
			return data;
		}
		case 'delete': {
			return data.filter((item:any) => data.indexOf(item) !=action.index? item:'');
		}
		case 'save': {
			localStorage.setItem("todo-list",JSON.stringify(data));
			return [...data]
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


function getData(){
	let newData:any = localStorage.getItem("todo-list");
	return JSON.parse(newData);
}

const initialData = getData();
