import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { TaskContextProvider } from "./context/TaskProvider";
import { NotFound } from "./pages/NotFound";
import { TaskForm } from "./pages/TaskForm";
import { TasksPage } from "./pages/TasksPage";

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <TaskContextProvider>
        <Navbar />
        <div className="container mx-auto py-4 px-20">
          <Routes>
            <Route path="/" element={<TasksPage />}></Route>
            <Route path="/new" element={<TaskForm />}></Route>
            <Route path="/edit/:id" element={<TaskForm />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </TaskContextProvider>
    </div>
  );
}

export default App;
