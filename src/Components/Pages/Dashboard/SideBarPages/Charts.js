import React from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, Cell 
} from 'recharts';
import { FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa';
import './SideBarCss/Charts.css';

const Charts = () => {
  // Sample data - replace with your actual data
  const monthlyData = [
    { month: 'Jan', completed: 45, pending: 20, total: 65 },
    { month: 'Feb', completed: 52, pending: 15, total: 67 },
    { month: 'Mar', completed: 48, pending: 25, total: 73 },
    { month: 'Apr', completed: 60, pending: 18, total: 78 },
    { month: 'May', completed: 55, pending: 22, total: 77 },
    { month: 'Jun', completed: 65, pending: 15, total: 80 },
  ];

  const serviceData = [
    { name: 'Ubutaka', value: 35 },
    { name: 'Imiturire', value: 25 },
    { name: 'Amashyamba', value: 20 },
    { name: 'Imibereho', value: 15 },
  ];

  const statusData = [
    { name: 'Completed', value: 65, color: '#10b981' },
    { name: 'Pending', value: 25, color: '#f59e0b' },
    { name: 'Rejected', value: 10, color: '#ef4444' },
  ];

  const performanceData = [
    { day: 'Mon', tasks: 28 },
    { day: 'Tue', tasks: 35 },
    { day: 'Wed', tasks: 42 },
    { day: 'Thu', tasks: 38 },
    { day: 'Fri', tasks: 45 },
  ];

  return (
    <div className="charts-container">
      <h2 className="charts-title">Analytics Dashboard</h2>
      
      <div className="stats-cards">
        <div className="stat-card">
          <div className="stat-icon completed">
            <FaChartBar />
          </div>
          <div className="stat-info">
            <h3>Total Tasks</h3>
            <p>245</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon pending">
            <FaChartLine />
          </div>
          <div className="stat-info">
            <h3>Pending</h3>
            <p>45</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon success">
            <FaChartPie />
          </div>
          <div className="stat-info">
            <h3>Completed</h3>
            <p>200</p>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        {/* Monthly Progress Bar Chart */}
        <div className="chart-card">
          <h3>Monthly Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="completed" fill="#10b981" name="Completed" />
              <Bar dataKey="pending" fill="#f59e0b" name="Pending" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Service Distribution Pie Chart */}
        <div className="chart-card">
          <h3>Service Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={serviceData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {serviceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`hsl(${index * 90}, 70%, 50%)`} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Task Status Pie Chart */}
        <div className="chart-card">
          <h3>Task Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Weekly Performance Line Chart */}
        <div className="chart-card">
          <h3>Weekly Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="tasks" 
                stroke="#6366f1" 
                strokeWidth={2}
                name="Tasks Completed"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Charts; 