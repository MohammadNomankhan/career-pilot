import { BrowserRouter, Navigate, Route, Routes } from "react-router";

const AuthenticatedApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/browse" element={<Home />} />
                <Route path="*" element={<Navigate to="/browse" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AuthenticatedApp;
