import React from 'react';
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaSchool } from 'react-icons/fa';
import './education.css';

const Education = () => {
  const schools = [
    {
      id: 1,
      name: "GS Saint vicent de paul Masaka",
      type: "Primary & Secondary",
      location: "Kigese, Rugalika, Kamonyi",
      students: 850,
      teachers: 32,
      description: "Abana bacu tubatoza indanga gaciro na Kirazira by'umuco nyarwanda mu mashuri abanza na ayisumbuye."
    },
    {
      id: 2,
      name: "ES Sheli",
      type: "Secondary",
      location: "Sheli, Rugalika, Kamonyi",
      students: 420,
      teachers: 25,
      description: "Ikorana buhanga n'ubumenyi ngiro Mukubaka u Rwanda twifuza."
    }
    // Add more schools as needed
  ];

  const stats = [
    { id: 1, title: "Abanyeshuri", value: "1,270+", icon: <FaGraduationCap /> },
    { id: 2, title: "Abarimu", value: "57+", icon: <FaChalkboardTeacher /> },
    { id: 3, title: "Ibigo", value: "2", icon: <FaSchool /> },
    { id: 4, title: "Programs", value: "12+", icon: <FaBook /> }
  ];

  return (
    <div className="education-container">
      <div className="education-wrapper">
        <div className="education-header">
          <h1>Uburezi mu Murenge wa Rugalika</h1>
          <p>
          Gutanga uburezi bufite ireme no guteza imbere ahazaza h’umuryango wacu binyuze mu bikorwaremezo by’ishuri bigezweho n’abarimu biyemeje umurimo wabo.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-title">{stat.title}</div>
            </div>
          ))}
        </div>

        <div className="schools-section">
          <h2>IBIGO</h2>
          <div className="schools-grid">
            {schools.map((school) => (
              <div key={school.id} className="school-card">
                <div className="school-content">
                  <h3 className="school-name">{school.name}</h3>
                  <span className="school-type">{school.type}</span>
                  <p className="school-description">{school.description}</p>
                  <div className="school-stats">
                    <div className="school-stat">
                      <FaGraduationCap />
                      <span>{school.students} ABANYESHURI</span>
                    </div>
                    <div className="school-stat">
                      <FaChalkboardTeacher />
                      <span>{school.teachers} ABARIMU</span>
                    </div>
                  </div>
                </div>
                <div className="school-location">
                  <FaSchool />
                  {school.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="programs-section">
          <h2>Educational Programs</h2>
          <div className="programs-grid">
            {['Primary Education', 'O-Level', 'A-Level'].map((program, index) => (
              <div key={index} className="program-card">
                <div className="program-icon">
                  <FaBook />
                </div>
                <h3 className="program-title">{program}</h3>
                <p className="program-description">
                Porogaramu y’amasomo yuzuye ikurikije ibisabwa n’amahame y’uburezi bw’igihugu.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;