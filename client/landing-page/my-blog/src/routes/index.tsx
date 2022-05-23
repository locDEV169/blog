import { default as React, Suspense } from "react";
import { Switch } from "react-router-dom";
import { MainLayout } from "../components/layouts";

export function MainRoutes() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                {/* <Route exact path="/" component={HomePage} /> */}
                <MainLayout>
                </MainLayout>
            </Switch>
        </Suspense>
    );
}
