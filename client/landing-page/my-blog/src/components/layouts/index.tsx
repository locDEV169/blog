import { default as React, ReactNode } from "react";
import HeaderLayout from "./header";
import FooterLayout from "./footer/index";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div id="__next">
      <HeaderLayout />
      <div>{children}</div>
      <FooterLayout />
    </div>
  );
}
