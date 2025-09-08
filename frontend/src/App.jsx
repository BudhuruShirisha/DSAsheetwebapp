import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Profile from './pages/profile.jsx'
import Topics from './pages/Topics.jsx';
import Progress from "./pages/progress.jsx"
import Navbar from './components/Navbar.jsx';

function Protected({ children }) {
    const token = localStorage.getItem('token');

    if (!token) return <Navigate to="/" replace />;

    return children;
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route
                path="/profile"
                element={
                    <Protected>
                        <Navbar />
                        <Profile />
                    </Protected>
                }
            />
            <Route
                path="/topics"
                element={
                    <Protected>
                        <Navbar />
                        <Topics />
                    </Protected>
                }
            />

           
            <Route
                path="/progress"
                element={
                    <Protected>
                        <Navbar />
                        <Progress />
                    </Protected>
                }
            />
        </Routes>
    );
}
