import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Signup from "./Components/Signup";
import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Expense/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";
import React, { createContext, useEffect, useState } from "react";
import { checkAuthRoute } from "./Services/helper";
import { ContextProvider } from "./Components/MyContext";
import { useSelector } from "react-redux";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const loginStatus = useSelector((state: any) => state.login.loginStatus);
  // const dispatch = useDispatch();
  console.log("loginStatus :- ", loginStatus);

  useEffect(() => {
    setIsLoggedIn(checkAuthRoute());
  }, [isLoggedIn]);
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={
            !loginStatus ? <Login /> : <Navigate to="/expense" replace />
          }
        />
        {loginStatus && <Route path="/expense" element={<Dashboard />} />}
        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
