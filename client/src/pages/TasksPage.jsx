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


	return (
		<div>

			<h1>Tasks</h1>

			{
				tasks.map(task => (
					<TaskCard task={task} key={task.id} />
				))
			}

		</div>
	)
}
