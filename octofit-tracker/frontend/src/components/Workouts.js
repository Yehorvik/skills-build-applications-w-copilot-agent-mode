import React, { useState, useEffect } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
      const baseUrl = codespaceName
        ? `https://${codespaceName}-8000.app.github.dev/api`
        : 'http://localhost:8000/api';

      const response = await fetch(`${baseUrl}/workouts/`);
      if (!response.ok) {
        throw new Error('Failed to fetch workouts');
      }
      const data = await response.json();
      setWorkouts(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-5"><div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  if (error) return <div className="alert alert-danger mt-5" role="alert">Error: {error}</div>;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h2 className="card-title mb-0">Workouts</h2>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Exercises</th>
                      <th scope="col">Duration (min)</th>
                      <th scope="col">Difficulty</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workouts.map(workout => (
                      <tr key={workout.id}>
                        <td>{workout.id}</td>
                        <td>{workout.name}</td>
                        <td>{workout.description}</td>
                        <td>{workout.exercises ? workout.exercises.length : 0}</td>
                        <td>{workout.duration}</td>
                        <td>
                          <span className={`badge ${workout.difficulty === 'Beginner' ? 'bg-success' : workout.difficulty === 'Intermediate' ? 'bg-warning' : 'bg-danger'}`}>
                            {workout.difficulty}
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-primary btn-sm me-2">Edit</button>
                          <button className="btn btn-danger btn-sm">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {workouts.length === 0 && (
                <div className="text-center mt-4">
                  <p className="text-muted">No workouts found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workouts;