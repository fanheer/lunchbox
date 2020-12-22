import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import IRouterProps from '@/common/interfaces/router';
interface IProps {
  // 路由参数及菜单参数
  routerProps: IRouterProps[];
  // 重定向路径
  redirectFrom: string;
  redirectTo: string;
  header?: any;
}
export default function index(props: IProps) {
    const {routerProps, redirectFrom, redirectTo, header } = props
    return (
      <Router>
        {header}
        <Switch>
          <Redirect exact from={redirectFrom} to={redirectTo} />
          {routerProps.map((router: IRouterProps, index: number) => {
            return <Route {...router} key={index} />;
          })}
        </Switch>
      </Router>
    );
};
