import React, { useState } from 'react';
import { FaCheckCircle, FaHourglassHalf, FaChartLine, FaPlus, FaTimes } from 'react-icons/fa';
import './Tasks.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Gusuzuma ibibazo by'abaturage",
      deadline: "14:00",
      status: "pending",
      progress: 0
    },
    {
      id: 2,
      title: "Inama y'Umutekano",
      deadline: "10:00",
      status: "completed",
      progress: 100
    },
    {
      id: 3,
      title: "Gukurikirana imishinga",
      deadline: "16:00",
      status: "in-progress",
      progress: 60
    },
    {
      id: 4,
      title: "Raporo y'ibikorwa",
      deadline: "17:00",
      status: "pending",
      progress: 0
    }
  ]);

  const [dailyProgress, setDailyProgress] = useState(40);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    deadline: ''
  });

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        const progress = newStatus === 'completed' ? 100 : 
                        newStatus === 'in-progress' ? 60 : 0;
        return { ...task, status: newStatus, progress };
      }
      return task;
    }));

    // Update daily progress
    const totalProgress = tasks.reduce((acc, task) => acc + task.progress, 0);
    const averageProgress = totalProgress / tasks.length;
    setDailyProgress(averageProgress);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const task = {
      id: tasks.length + 1,
      title: newTask.title,
      deadline: newTask.deadline,
      status: 'pending',
      progress: 0
    };
    
    setTasks([...tasks, task]);
    setNewTask({ title: '', deadline: '' });
    setShowAddModal(false);
  };

  return (
    <div className="tasks-container">
      <div className="tasks-header">
        <h2>Gahunda y'Umunsi</h2>
        <button 
          className="add-task-btn"
          onClick={() => setShowAddModal(true)}
        >
          <FaPlus /> Ongeramo Gahunda
        </button>
        <div className="daily-progress">
          <div className="progress-circle">
            <FaChartLine className="progress-icon" />
            <span>{Math.round(dailyProgress)}%</span>
          </div>
          <p>Intambwe y'Umunsi</p>
        </div>
      </div>

      <div className="tasks-grid">
        {tasks.map(task => (
          <div key={task.id} className={`task-card ${task.status}`}>
            <div className="task-header">
              <h3>{task.title}</h3>
              <span className="task-deadline">{task.deadline}</span>
            </div>
            <div className="task-progress">
              <div 
                className="progress-bar"
                style={{ width: `${task.progress}%` }}
              ></div>
            </div>
            <div className="task-actions">
              <button 
                className={task.status === 'pending' ? 'active' : ''}
                onClick={() => updateTaskStatus(task.id, 'pending')}
              >
                <FaHourglassHalf /> Bitaratangira
              </button>
              <button 
                className={task.status === 'in-progress' ? 'active' : ''}
                onClick={() => updateTaskStatus(task.id, 'in-progress')}
              >
                <FaHourglassHalf /> Birigukora
              </button>
              <button 
                className={task.status === 'completed' ? 'active' : ''}
                onClick={() => updateTaskStatus(task.id, 'completed')}
              >
                <FaCheckCircle /> Byarangiye
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-header">
              <h3>Ongeramo Gahunda Nshya</h3>
              <button 
                className="close-modal"
                onClick={() => setShowAddModal(false)}
              >
                <FaTimes />
              </button>
            </div>
            <form onSubmit={handleAddTask} className="add-task-form">
              <div className="form-group">
                <label>Gahunda:</label>
                <input
                  type="text"
                  value={newTask.title}
                  onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                  required
                  placeholder="Andika gahunda..."
                />
              </div>
              <div className="form-group">
                <label>Igihe:</label>
                <input
                  type="time"
                  value={newTask.deadline}
                  onChange={(e) => setNewTask({...newTask, deadline: e.target.value})}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                <FaPlus /> Ongeramo
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks; 