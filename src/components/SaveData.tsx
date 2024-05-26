import { useContext } from "react";
import { DataDispatchContext } from "../store/dataContext";

export default function SaveData(){

	const dispatch:any = useContext(DataDispatchContext);

	return (
		<div className="save-data">
			<button onClick={dispatch({type: 'save'})} className="save-data__btn btn">Сохранить список задач</button>
		</div>
	);
}