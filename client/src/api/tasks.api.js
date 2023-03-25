import axios from 'axios';

const backTaskUrl = 'http://localhost:4000/tasks';

export const getTasksRequest = async () => {
	return await axios.get(backTaskUrl);
}

export const createTaskRequest = async (task) => {
	return await axios.post(backTaskUrl, task);
}

export const deleteTaskRequest = async (id) => {
	return await axios.delete(`${backTaskUrl}/${id}`);
}