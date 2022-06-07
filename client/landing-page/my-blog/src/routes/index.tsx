import { MainLayout } from "components/layouts";
import LoginPage from "pages/login";
import { default as React, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import RegisterPage from '../pages/register-page/index';
// const HomePage = React.lazy(() => import('../pages/home'))
// const LoginPage = React.lazy(() => import('../pages/login'))


export function MainRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Suspense>
    );
}
