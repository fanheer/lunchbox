import React, { lazy } from "react";
import IRouterProps from "@/common/interfaces/router";
import Router from "@/widgets/Router";
import Header from "@/widgets/Header";
import { useLocation } from "react-router-dom";
import { AsyncLoad } from "@/common/function/lazyload";

const Home = lazy(() => import(/* webpackChunkName: "Home" */'./index'));
const Demo = lazy(() => import(/* webpackChunkName: "Demo" */'@/pages/demo'));

export const routerMap: IRouterProps[] = [
  {
    path: "/home/index",
    title: "HOME",
    component: AsyncLoad(Home),
  },
  {
    path: "/home/newlead",
    title: "DEMO",
    component: AsyncLoad(Demo),
  },
];
export default function home() {
  const redirectFrom: string = "/home";
  const redirectTo: string = "/home/index";
  const currentRouter: string =
    useLocation().pathname === redirectFrom
      ? redirectTo
      : useLocation().pathname;
  return (
    <Router
      header={<>
      <Header menuProps={routerMap} defaultMenu={currentRouter} />
      <br/>
      </>}
      routerProps={routerMap}
      redirectFrom={redirectFrom}
      redirectTo={redirectTo}
    />
  );
}
