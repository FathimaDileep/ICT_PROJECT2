import React, { useState } from 'react';
import axios from 'axios';
import './Project.css';

const Project = () => {
  const [projectId, setProjectId] = useState('');
  const [project, setProject] = useState(null);
  const [error, setError] = useState('');

  const fetchProject = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/projects/${projectId}`);
      setProject(response.data);
      setError('');
    } catch (err) {
      setError('Project not found!');
      setProject(null);
    }
  };

  return (
    <div className="project-container">
      <input
        type="text"
        value={projectId}
        onChange={(e) => setProjectId(e.target.value)}
        placeholder="Enter Project ID"
      />
      <button onClick={fetchProject}>Get Project</button>
      {error && <p className="error">{error}</p>}
      {project && (
        <div className="project-details">
          <h2>{project.projectName}</h2>
          <ul>
            <li><a href={project.reference1} target="_blank" rel="noopener noreferrer">Reference 1</a></li>
            <li><a href={project.reference2} target="_blank" rel="noopener noreferrer">Reference 2</a></li>
            <li><a href={project.reference3} target="_blank" rel="noopener noreferrer">Reference 3</a></li>
            <li><a href={project.reference4} target="_blank" rel="noopener noreferrer">Reference 4</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Project;
