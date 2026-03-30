import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Users, Teams, Activities, Workouts, Leaderboard } from './components';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img src="/logo192.png" alt="Octofit Tracker Logo" className="me-2" />
              <h3 className="mb-0">Octofit Tracker</h3>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Workouts</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="py-4">
          <Routes>
            <Route path="/" element={
              <div className="container mt-5">
                <div className="row">
                  <div className="col-12 text-center">
                    <div className="card">
                      <div className="card-body">
                        <h1 className="display-4 mb-4">Welcome to Octofit Tracker</h1>
                        <p className="lead">Track your fitness activities, join teams, and compete on the leaderboard!</p>
                        <div className="row mt-4">
                          <div className="col-md-4 mb-3">
                            <div className="card h-100">
                              <div className="card-body">
                                <h5 className="card-title">Users</h5>
                                <p className="card-text">Manage user profiles and accounts.</p>
                                <Link to="/users" className="btn btn-primary">View Users</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <div className="card h-100">
                              <div className="card-body">
                                <h5 className="card-title">Teams</h5>
                                <p className="card-text">Create and manage fitness teams.</p>
                                <Link to="/teams" className="btn btn-primary">View Teams</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <div className="card h-100">
                              <div className="card-body">
                                <h5 className="card-title">Activities</h5>
                                <p className="card-text">Log and track your fitness activities.</p>
                                <Link to="/activities" className="btn btn-primary">View Activities</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <div className="card h-100">
                              <div className="card-body">
                                <h5 className="card-title">Workouts</h5>
                                <p className="card-text">Browse and follow workout plans.</p>
                                <Link to="/workouts" className="btn btn-primary">View Workouts</Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <div className="card h-100">
                              <div className="card-body">
                                <h5 className="card-title">Leaderboard</h5>
                                <p className="card-text">See how you rank against others.</p>
                                <Link to="/leaderboard" className="btn btn-primary">View Leaderboard</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            } />
            <Route path="/users" element={<Users />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>

        <footer className="bg-dark text-light py-4 mt-5">
          <div className="container text-center">
            <p className="mb-0">&copy; 2024 Octofit Tracker. Built with React and Bootstrap.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
