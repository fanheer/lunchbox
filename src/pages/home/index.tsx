import React from "react";
import NewLead from "@/components/Demo/newLead";
import NewLead2 from "@/components/Demo/newLead2";
import IRouterProps from "@/common/interfaces/router";
import Router from "@/widgets/Router";
import Header from "@/widgets/Header";
import { useLocation } from "react-router-dom";
export const routerMap: IRouterProps[] = [
  {
    path: "/home/newlead",
    title: "demo1",
    component: NewLead,
  },
  {
    path: "/home/newlead2",
    title: "demo2",
    component: NewLead2,
  },
];
export default function home() {
  const redirectFrom: string = "/home";
  const redirectTo: string = "/home/newlead";
  const currentRouter: string =
    useLocation().pathname === redirectFrom
      ? redirectTo
      : useLocation().pathname;
  return (
    <Router
      header={<Header menuProps={routerMap} defaultMenu={currentRouter} />}
      routerProps={routerMap}
      redirectFrom={redirectFrom}
      redirectTo={redirectTo}
    />
  );
}
