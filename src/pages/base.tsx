import React from 'react'
import Login from '@/pages/login';
import Home from '@/pages/home';
import IRouterProps from '@/common/interfaces/router';
import Router from '@/widgets/Router';
export const routerMap: IRouterProps[] = [
  // {
  //   path: "/",
  //   component: Home,
  // },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
];
export const redirectFrom: string = "/";
export const defaultRouter: string = "/home";
export default function base() {
  return (
    <Router
      routerProps={routerMap}
      redirectFrom={redirectFrom}
      redirectTo={defaultRouter}
    />
  );
}
