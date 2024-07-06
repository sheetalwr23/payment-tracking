import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkAuthRoute } from "../../Services/helper";
import { useDispatch } from "react-redux";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    checkAuthRoute();
  }, []);

  const logout = () => {
    localStorage.clear();
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/expense">
            Welcome to Expense Tracker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="javascript:void(0)" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dashboard;
