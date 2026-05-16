import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";

function App() {

  const token = localStorage.getItem("token");

  return (

    <Routes>

      {/* DEFAULT ROUTE */}
      <Route
        path="/"
        element={
          token ? (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* ADD EMPLOYEE */}
      <Route
        path="/add"
        element={
          <ProtectedRoute>
            <AddEmployee />
          </ProtectedRoute>
        }
      />

      {/* EDIT EMPLOYEE */}
      <Route
        path="/edit/:id"
        element={
          <ProtectedRoute>
            <EditEmployee />
          </ProtectedRoute>
        }
      />

      {/* LOGIN */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* REGISTER */}
      <Route
        path="/register"
        element={<Register />}
      />

    </Routes>

  );
}

export default App;