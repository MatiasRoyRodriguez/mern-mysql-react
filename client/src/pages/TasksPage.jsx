import { useEffect } from "react";
import { TaskCard } from "../components/TaskCard";
import { useTasks } from "../context/TaskProvider";

export const TasksPage = () => {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  const renderMain = () => {
    if (tasks.length === 0) return <h1>No taks yet</h1>;
    return tasks.map((task) => <TaskCard task={task} key={task.id} />);
  };

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center">Tasks</h1>
      <div className="grid grid-cols-3 gap-x-2">{renderMain()}</div>
    </div>
  );
};
