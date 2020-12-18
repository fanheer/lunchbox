import { ComponentClass, FunctionComponent } from "react";
import { RouteComponentProps } from "react-router-dom";

export default interface IRouterProps {
    path: string;
    title: string;
    component: ComponentClass<any, any> | FunctionComponent<any> | ComponentClass<RouteComponentProps<any, any, unknown>, any> | FunctionComponent | undefined;
    exact?: boolean;
}