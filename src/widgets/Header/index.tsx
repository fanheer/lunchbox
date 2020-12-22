import React from 'react'
import { Layout, Menu } from 'antd'
import IRouterProps from '@/common/interfaces/router';
import { useHistory, withRouter, RouteComponentProps } from 'react-router-dom';
import './index.less'

const { Header } = Layout;
interface IProps{
  menuProps: IRouterProps[];
  defaultMenu: string;
}
const LayoutHeader = (props: IProps) => {
    const { menuProps, defaultMenu } = props;
    const history = useHistory();
    const handleClick = (value: IRouterProps) => {
      history.push(value.path);
    };
    return (
      <Header>
        <Menu className="header" theme="light" mode="horizontal" defaultSelectedKeys={[defaultMenu]}>
          {menuProps.map((menu, index) => {
            if (menu.title)
              return (
                <Menu.Item key={menu.path} onClick={() => handleClick(menu)}>
                  {menu.title}
                </Menu.Item>
              );
            else return null;
          })}
        </Menu>
      </Header>
    );
}
export default withRouter<IProps & RouteComponentProps, any>(LayoutHeader);
