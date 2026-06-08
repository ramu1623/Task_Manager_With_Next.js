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

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadTasks();
  }, []);

  const addTask = async (task) => {
    try {
      await createTask(task);

      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const removeTask = async (id) => {
    try {
      await deleteTask(id);

      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const changeStatus = async (id, task) => {
    try {
      await updateTask(id, task);

      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
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