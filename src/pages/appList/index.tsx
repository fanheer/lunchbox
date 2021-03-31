import React from 'react'
import "./index.less"

const AppList = [
  {
    name: "top后台",
  },
  {
    name: "top2后台",
  },
  {
    name: "cs平台",
  },
  {
    name: "租户平台",
  }
];
export default function index() {
    return (
        <div className="applist-container">
            {
                AppList.map(appItem=>{
                    return (
                      <div className="applist-container__item">
                        <a>{appItem.name}</a>
                      </div>
                    );
                })
            }
        </div>
    )
}
