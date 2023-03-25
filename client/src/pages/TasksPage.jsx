import { useEffect, useState } from "react"
import { getTasksRequest } from "../api/tasks.api"
import { TaskCard } from "../components/TaskCard";


export const TasksPage = () => {

	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		async function loadTasks() {
			const { data } = await getTasksRequest()
			setTasks(data);
		}
		loadTasks();
	}, []);

	const renderMain = () => {
		if (tasks.length === 0) return <h1>No taks yet</h1>
		return tasks.map(task => (
			<TaskCard task={task} key={task.id} />
		))
	}

	return (
		<div>

			<h1>Tasks</h1>

			{renderMain()}

		</div>
	)
}
