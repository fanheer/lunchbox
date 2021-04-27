import { Button } from 'antd'
import React, { useState } from 'react'
import './index.less'
export default function transition1() {
    const [divClass, setDivClass] = useState("opitem")
    const target = document.querySelector('#tdiv')
    console.log(target)
    const whichTransitionEvent = (): any => {
        var t;
        var el = document.createElement('tdiv');
        var transitions = {
          'transition':'transitionend',
          'OTransition':'oTransitionEnd',
          'MozTransition':'transitionend',
          'WebkitTransition':'webkitTransitionEnd'
        }
    
        for(t in transitions){
            if( el.style[t] !== undefined ){
                return transitions[t];
            }
        }
    }
    var transitionEvent = whichTransitionEvent();
    transitionEvent && target?.addEventListener(transitionEvent, function() {
        console.log('Transition complete!  This is the callback, no library needed!');
    });
    const showDiv = () => {
        setDivClass("opitem opitem-active opitem-enter opitem-enter-active")
    }
    const hideDiv = () => {
        setDivClass("opitem")
    }
    return (
        <div className="transdiv">
            <Button onClick={showDiv}>show</Button>
            <div id="tdiv" className={divClass} onClick={hideDiv}></div>
        </div>
    )
}
