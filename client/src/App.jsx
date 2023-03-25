import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskProvider";
import { NotFound } from "./pages/NotFound";
import { TaskForm } from "./pages/TaskForm";
import { TasksPage } from "./pages/TasksPage";

function App() {
  return (
    <TaskContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<TasksPage />}></Route>
        <Route path="/new" element={<TaskForm />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </TaskContextProvider>
  );
}

export default App;
