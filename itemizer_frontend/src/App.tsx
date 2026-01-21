import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FullTransactionsPage from "./pages/FullTransactionsPage.tsx";
import React from "react";
import ManageAccountsPage from "./pages/ManageAccountsPage.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-50 font-sans">
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/transactions" element={<FullTransactionsPage />} />
                    <Route path="/accounts" element={<ManageAccountsPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;