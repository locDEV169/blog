import { default as React, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { MainLayout } from "../components/layouts";

const HomePage = React.lazy(() => import('../pages/home'))

export function MainRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <MainLayout>
                    <Route exact path="/" component={HomePage} />
                </MainLayout>
            </Switch>
        </Suspense>
    );
}
