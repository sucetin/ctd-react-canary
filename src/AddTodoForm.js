import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import styles from "./AddTodoForm.module.css";

function AddTodoForm({ onAddTodo }) {
	const [todoTitle, setTodoTitle] = useState();

	function handleTitleChange(e) {
		const newTodoTitle = e.target.value;
		setTodoTitle(newTodoTitle);
	}

	function handleAddTodo(e) {
		e.preventDefault();
		onAddTodo({ title: todoTitle, id: Date.now() });
		setTodoTitle("");
	}

	return (
		<div>
			<form onSubmit={handleAddTodo} className={styles.addForm}>
				<InputWithLabel
					className={styles.input}
					todoTitle={todoTitle}
					handleTitleChange={handleTitleChange}
				>
					Title {""}
				</InputWithLabel>
				<button className={styles.addButton}>+</button>
			</form>
		</div>
	);
}

export default AddTodoForm;
