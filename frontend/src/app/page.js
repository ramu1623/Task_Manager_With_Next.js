"use client";

import { useEffect, useState } from "react";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/taskService";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (task) => {
    await createTask(task);
    fetchTasks();
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const changeStatus = async (id, task) => {
    await updateTask(id, task);
    fetchTasks();
  };

  return (
    <main className="container">
      <h1>Task Manager</h1>

      <TaskForm onAdd={addTask} />

      <TaskList
        tasks={tasks}
        onDelete={removeTask}
        onStatusChange={changeStatus}
      />
    </main>
  );
}