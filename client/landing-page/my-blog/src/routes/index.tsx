import { MainLayout } from "components/layouts";
import { SummarizePage } from "components/summarizes/collection";
import { PostDetail } from "components/summarizes/detail";
import LoginPage from "pages/login";
import RegisterPage from "pages/register-page";
import { default as React, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
// const HomePage = React.lazy(() => import('../pages/home'))
// const LoginPage = React.lazy(() => import('../pages/login'))

export function MainRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/blog/:id" element={<PostDetail/>} />
                    <Route path="/collection/summarize" element={<SummarizePage/>} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Suspense>
    );
}
