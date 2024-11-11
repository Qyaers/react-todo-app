import { useDataDispatch } from "../store/dataContext";
import { useState } from "react";

export default function TodoListItem({item,index}:{item: any,index:Number}){
	
	const dispatch:any = useDataDispatch();
	const [editingData,setEditingData] =useState(false);

	return (
		<div className="todo-list-item" style={{
			display: "flex",
			flexDirection: "row-reverse",
			alignItems: "stretch",
			justifyContent: "space-between"
			}}
			>
				{/* TODO: Подправить стили и верстку */}
				{ !editingData &&
				<div className="todo-list-item__remove-btn btn" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
					<button onClick={()=>dispatch({type: 'delete',index: index,item})}>Удалить</button>
				</div>
				}
				<div className="todo-list-item__edit-btn btn" style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
					{ !editingData && <button onClick={()=>setEditingData(!editingData)}>Изменить</button>}
					{ 	
					editingData &&
							<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}} className="todo-list-item__edit-buttons btn">
								<button onClick={()=>{
									dispatch({type: 'edit'})
									setEditingData(!editingData)}}>Подтверждение</button>
								<button onClick={()=>setEditingData(!editingData)}>Отмена</button>
							</div>
					}
				</div>
				{ 
					!editingData &&
						<div className="todo-list-item__info" style={{minWidth: "100%", marginRight: "10px"}}>
							<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
							<h2 className='todo-list__title'>{item.title}</h2>
							<h2 className='todo-list__title'>{item.date}</h2>
							</div>
							<p className='todo-list__text'>{item.text}</p>
						</div>
				}
				{
				editingData &&
					<div className="todo-list-item__info" style={{minWidth: "100%", marginRight: "10px"}}>
						<div style={{display: "flex",flexDirection:"row", justifyContent:"space-between"}}>
							<div>
								<h3>Наименование задачи</h3>
								<input onChange={(e)=>item.title = e.target.value} placeholder={item.title}></input>
							</div>
							<div>
								<h3>Дата</h3>
								<input type="date" onChange={(e)=>item.date = e.target.value} placeholder={item.date}></input>
						</div>
						</div>
						<h3>Описание задачи</h3>
						<textarea style={{minWidth:"100%",minHeight:"150px"}} onChange={(e)=>item.text = e.target.value} placeholder={item.text}></textarea>
						
					</div>
				}
		</div>
	);
}