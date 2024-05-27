import { useContext } from "react";
import { DataDispatchContext } from "../store/dataContext";

export default function SaveData(){

	const dispatch:any = useContext(DataDispatchContext);

	function handlerSaveData(){
		dispatch({type: 'save'});
	}

	return (
		<div className="save-data" style={{marginTop: "30px",marginBottom: "10px"}}>
			<button onClick={handlerSaveData} className="save-data__btn btn">Сохранить список задач</button>
		</div>
	);
}