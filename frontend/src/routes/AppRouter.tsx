
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />

            <Route path="/dashboard" element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            } />

        </Routes>
    </BrowserRouter> 
  )
}

export default AppRouter