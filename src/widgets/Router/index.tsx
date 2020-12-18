import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import IRouterProps from '@/common/interfaces/router';
import Header from '../Header';
interface IProps {
  // 路由参数及菜单参数
  routerProps: IRouterProps[];
  // 重定向路径
  redirectTo: string;
}
export default function index(props: IProps) {
    const {routerProps, redirectTo} = props
    return (
        <Router>
          <Header menuProps={routerProps} defaultMenu={redirectTo} />
          <Switch>
            {/* react 路由重定向 */}
            <Redirect exact from="/" to={redirectTo} />
            {routerProps.map((router: IRouterProps, index:number)=>{
                return <Route {...router} key={index} />;
            })}
          </Switch>
      </Router>

    )
}
