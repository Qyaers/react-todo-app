export default function CreateTask ({
	title,
	text,
	date,
	onSubmit,
	onTextChange,
	onDateChange,
	onTitleChange
}:
{
	title:string,
	text:string,
	date:string,
	onSubmit:any,
	onTextChange:any,
	onDateChange:any,
	onTitleChange:any
})
{

	return (
		<div className="todo-buttons">
			<form style={{display: "flex",flexDirection: "column", alignItems: "stretch"}} className="todo-buttons__form" action="#" onSubmit={onSubmit}>
				<label htmlFor="todo-title">Наименование задачи</label>
				<input required id='todo-title' type="text" value={title} onChange={onTitleChange}/>
				<label htmlFor="todo-text">Описание задачи</label>
				<textarea required name="todo-text" id="" value={text} onChange={onTextChange} cols={30} rows={10}></textarea>
				<input required type="date" value={date} onChange={onDateChange}/>
				<button type="submit" >Добавить задачу</button>
			</form>
		</div>
	)
}