import React, { useState, useEffect } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
      const baseUrl = codespaceName
        ? `https://${codespaceName}-8000.app.github.dev/api`
        : 'http://localhost:8000/api';

      const response = await fetch(`${baseUrl}/leaderboard/`);
      if (!response.ok) {
        throw new Error('Failed to fetch leaderboard');
      }
      const data = await response.json();
      setLeaderboard(data);
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
              <h2 className="card-title mb-0">Leaderboard</h2>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">Rank</th>
                      <th scope="col">User</th>
                      <th scope="col">Total Activities</th>
                      <th scope="col">Total Calories</th>
                      <th scope="col">Total Duration (min)</th>
                      <th scope="col">Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboard.map((entry, index) => (
                      <tr key={entry.user_id}>
                        <td>
                          <span className={`badge ${index === 0 ? 'bg-warning' : index === 1 ? 'bg-secondary' : index === 2 ? 'bg-danger' : 'bg-light text-dark'}`}>
                            {index + 1}
                          </span>
                        </td>
                        <td>{entry.user}</td>
                        <td>{entry.total_activities}</td>
                        <td>{entry.total_calories}</td>
                        <td>{entry.total_duration}</td>
                        <td><strong>{entry.points}</strong></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {leaderboard.length === 0 && (
                <div className="text-center mt-4">
                  <p className="text-muted">No leaderboard data found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;