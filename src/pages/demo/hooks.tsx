import React, { useEffect, useRef, useState } from 'react'
import "./index.less";
export default function hooks() {
    const [count, setCount] = useState(0)
        
    // useEffect(() => {
    //     setTimeout(() => console.info('count: ', count), 3000)
    // }, [count])
    
    const timerRef = useRef(null)
        
    useEffect(() => {
        timerRef.current = setTimeout(() => console.info('count: ', count), 3000)
        return () => {
            clearTimeout(timerRef.current)
        }
    }, [count]) // 在 count 变化时重新执行 effect 方法，确保获取最新状态值 

    // page_container布局
    // 左定宽 中间剩余宽度，超出内容换行 右自适应
    return(
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
            {/* <div className="hooks"></div> */}
            <div className='page_container'>
                <div className='ll'>
                    <div className='left'></div>
                    <div className='center'>
                        <div className='block'>占位</div>
                    </div>
                </div>
                <div className='right'>
                hhhhhhh
                23ß</div>
            </div>
        </div>
    )

}
