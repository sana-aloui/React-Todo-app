import React, { Component } from "react";


class Todos extends Component {
	state = {
		items:[],
		newTask: ""
	};

	handleChange = event => {
		this.setState({
			newTask: event.target.value
		});
	};

	handleClick = task => {
			this.setState({
				items: [...this.state.items, { task, isDone: false }],
				newTask: ""
			});
	};
	handleDelete = id => {
		this.setState({
			items: this.state.items.filter((el, index) => index !== id)
		});
	};
	completeTask = id => {
		this.setState({
			items: this.state.items.map((el, index) => {
				if (index === id) {
					el.isDone = !el.isDone;
					return el;
				} else return el;
			})
		});
	};

	render() {
		return (
			<div>
				<div className="container">
					<h1>To-Do App!</h1>
					<p>Add New To-Do</p>
					<input
						type="text"
						placeholder="Enter new task"
						className="new-task"
						onChange={this.handleChange}
						value={this.state.newTask}
					/>
					<input
						type="button"
						value="Add"
						className="add-button"
						onClick={() => this.handleClick(this.state.newTask)}
					/>
				</div>
				<div className="tasks">
					<h2>Let's get some work done!</h2>
					<hr />
					<ul className="todo-list">
						{this.state.items.map((el, id) => (
							<li key={id}>
								<button
									type="button"
									className="list-button"
									onClick={() => this.completeTask(id)}>										
									{!this.state.items[id].isDone ? "Complete" : "Undo"}
								</button>

								<button
									type="button"
									value="Delete"
									className="list-button"
									onClick={() => this.handleDelete(id)}>
									Delete
								</button>
								<span className={`task ${el.isDone && "task-done"}`}>
									{el.task}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
export default Todos;
