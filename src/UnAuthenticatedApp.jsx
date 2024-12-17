import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const UnAuthenticatedApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default UnAuthenticatedApp;
