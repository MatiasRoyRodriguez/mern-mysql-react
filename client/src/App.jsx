import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/NotFound';
import { TaskForm } from './pages/TaskForm';
import { TasksPage } from './pages/TasksPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<TasksPage />}></Route>
			<Route path='/new' element={<TaskForm />}></Route>
			<Route path='*' element={<NotFound />}></Route>
		</Routes>
	)
}

export default App
