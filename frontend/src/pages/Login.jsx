import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CONSTANTS } from "../constants";
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');

    const nav = useNavigate();

    const submit = async (e) => {
        e.preventDefault();
        setErr('');
        try {
            const res = await axios.post(`${CONSTANTS.API_BASE_URL}/api/auth/login`, {
                email,
                password,
            });
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('email', email);
            nav('/profile');
        } catch (e) {
            setErr(e?.response?.data?.message || 'Login failed');
        }
        
    };

    return (
        <div
            style={{
                display: 'flex',
                minHeight: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div className="login-card">
                <h2 style={{ textAlign: "center", marginTop: "20px" }}>Login</h2>
                
                Email
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: 8, marginBottom: 8 }}
                />
                Password
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    style={{ width: '100%', padding: 8, marginBottom: 8 }}
                />

                {err && <div style={{ color: 'crimson', marginBottom: 8 }}>{err}</div>}

                <button
                    className="blue-btn"
                    onClick={submit}
                    style={{ width: '100%' }}
                >
                    Login
                </button>

                <div className="small" style={{ marginTop: 10 }}>

                </div>
            </div>
        </div>
    );
}
