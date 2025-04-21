import { useContext } from "react";
import { DataDispatchContext} from "../store/dataContext";

export default function SaveData(){

	const dispatch = useContext(DataDispatchContext);

	function handlerSaveData():void{
		if (dispatch === null)
			throw new Error('Error,cannot dispatch action save. Because useContext(DataDispatchContext) is null.');
		dispatch({type: 'save'});
	}

	return (
		<div className="save-data" style={{marginTop: "30px",marginBottom: "10px"}}>
			<button onClick={handlerSaveData} className="save-data__btn btn">Сохранить список задач</button>
		</div>
	);
}