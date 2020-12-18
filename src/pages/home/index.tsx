import React from 'react'
import NewLead from '@/components/Demo/newLead';
import NewLead2 from '@/components/Demo/newLead2';
import IRouterProps from '@/common/interfaces/router';
import Router from '@/widgets/Router';
export const routerMap: IRouterProps[] = [
  {
    path: "/newlead",
    title: "demo1",
    component: NewLead,
  },
  {
    path: "/newlead2",
    title: "demo2",
    component: NewLead2,
  },
];
export const defaultRouter: string = "/newlead";
export default function base() {
  return (
    <div>
      <Router routerProps={routerMap} redirectTo={defaultRouter} />
    </div>
  );
}
