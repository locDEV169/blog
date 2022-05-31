import { default as React } from "react";
import HeaderLayout from "./header";
import FooterLayout from "./footer/index";
import { Outlet } from "react-router-dom";

export function MainLayout() {
    return (
        <div id="__next">
            <HeaderLayout />
            <main className="layout-content">
                <div className="wrap-content">
                    <Outlet></Outlet>
                </div>
            </main>
            <FooterLayout />
        </div>
    );
}
