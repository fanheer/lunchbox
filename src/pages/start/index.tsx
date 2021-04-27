import React, { useState } from 'react'
import buildings from '@/static/images/buildings.jpg'
import "./index.less"
interface IProps{
    clickStart: Function;
}
export default function Start(props: IProps) {
    const { clickStart } = props;
    const [startClass, setStartClass] = useState('screen_start')
    // const clickStart = () => {
    //   setStartClass(startClass==='screen_start'?'screen_start':'screen_end')
    // }
    return (
      <div className={startClass} onClick={() => clickStart()}>
        <div className="start">
          <img src={buildings} className="img" />
          <div className="bg"></div>
          <div className="left_line"></div>
          <div className="title">饭盒</div>
          <div className="subtitle">Fanheer</div>
        </div>
      </div>
    );
}
