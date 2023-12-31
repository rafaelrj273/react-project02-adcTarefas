import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";

export default function TaskList({ title, onAddTask, tasks }) {
  const addTask = () => {
    console.log("Chamada dentro do taskList");
    onAddTask("Nova Tarefa", "Pendente");
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return <div key={task.id}>{task.title}</div>;
        })}
      </div>
      <button onClick={addTask}> Adicionar Tarefa </button>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
