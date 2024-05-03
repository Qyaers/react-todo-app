export default function TodoListItem({item,index,handlerRemoveTask}:{item: any,index:number, handlerRemoveTask: any}){
	
	return (
		<div className="todo-list-item" style={{
			display: "flex",
			flexDirection: "row-reverse",
			alignItems: "stretch",
			justifyContent: "space-between"
			}} key={index}
			>
				<div className="todo-list-item__remove-btn btn" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
					{/* <button value={index} onClick={handlerEditTaskInfo}>Edit</button> */}
					<button value={index} onClick={handlerRemoveTask}>X</button>
				</div>
				<div className="todo-list-item__info" style={{minWidth: "100%", marginRight: "10px"}}>
					<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
					<h2 className='todo-list__title'>{item.title}</h2>
					<h2 className='todo-list__title'>{item.date}</h2>
					</div>
					<p className='todo-list__text'>{item.text}</p>
				</div>
		</div>
	);
}