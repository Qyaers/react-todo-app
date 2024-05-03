export default function SaveData({data}:{data:object}){

	function saveData(){
		localStorage.setItem("todo-list",JSON.stringify(data));
		alert("Ваш список задач сохранен");
	}
	
	return (
		<div className="save-data">
			<button onClick={saveData} className="save-data__btn btn">Сохранить список задач</button>
		</div>
	);
}