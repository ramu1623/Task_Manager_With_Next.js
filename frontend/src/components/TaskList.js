
function TaskList({ tasks, onDelete, onStatusChange }) {
  return (
    <div>
      {tasks.map((task) => (
        <div className="card" key={task._id}>
          <h3>{task.title}</h3>

          <p>{task.description}</p>

          <select
            value={task.status}
            onChange={(e) =>
              onStatusChange(task._id, {
                ...task,
                status: e.target.value,
              })
            }
          >
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <button onClick={() => onDelete(task._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;