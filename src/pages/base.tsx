import React, { lazy } from 'react'
import IRouterProps from '@/common/interfaces/router';
import Router from '@/widgets/Router';
import { AsyncLoad } from '@/common/function/lazyload';

const Login = lazy(() => import(/* webpackChunkName: "Login" */'@/pages/login'));
const Home = lazy(() => import(/* webpackChunkName: "Home" */'@/pages/home/route'));

const routerMap: IRouterProps[] = [
  {
    path: "/home",
    component: AsyncLoad(Home),
  },
  {
    path: "/login",
    component: AsyncLoad(Login),
  },
];
const redirectFrom: string = "/";
const defaultRouter: string = "/home";
export default function base() {
  return (
    <Router
      routerProps={routerMap}
      redirectFrom={redirectFrom}
      redirectTo={defaultRouter}
    />
  );
}
