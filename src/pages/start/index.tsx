import React from 'react'
import buildings from '@/static/images/buildings.jpg'
import "./index.less"
interface IProps{
    clickStart: Function;
}
export default function Start(props: IProps) {
    const { clickStart } = props;
    return (
      <div className="start" onClick={() => clickStart()}>
        <img src={buildings} className="img" />
        <div className="bg"></div>
        <div className="left_line"></div>
        <div className="title">饭盒</div>
        <div className="subtitle">Fanheer</div>
      </div>
    );
}
