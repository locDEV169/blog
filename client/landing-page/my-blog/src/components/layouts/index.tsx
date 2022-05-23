import { default as React, ReactNode } from "react";
import HeaderLayout from "./header";

export function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div id="__next">
            <HeaderLayout />
            <div>{children}</div>
        </div>
    );
}
