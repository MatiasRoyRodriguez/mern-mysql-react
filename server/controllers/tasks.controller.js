import { pool } from '../db.js';

export const getTasks = (req, res) => {
	res.send('Getting tasks');
}

export const getTask = (req, res) => {
	res.send('Getting a task');
}

export const createTask = async (req, res) => {
	const { title, description } = req.body;
	const [result] = await pool.query('INSERT INTO tasks(title, description) VALUES (?, ?)',
		[title, description]
	);
	
	res.json({
		id: result.insertId,
		title,
		description
	});
}

export const updateTask = (req, res) => {
	res.send('Updating a task');
}

export const deleteTask = (req, res) => {
	res.send('Deleting a task');
}