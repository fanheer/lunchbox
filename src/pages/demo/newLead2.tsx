/**
 * 测试mask效果
 */
import React, { useEffect } from "react";
import "./index.less";
export default function NewLead() {
  useEffect(() => {
    // test()
  }, []);
  const test = () => {
    let i = 0;
    setInterval(() => {
      renderContent(["one", "two", "three", "four"][i]);
      if (++i >= 4) i = 0;
    }, 1000);
  };
  function renderContent(cls: string) {
    let targetNode = document.querySelector(`.${cls}`);
    let maskContent = document.getElementById("maskContent");
    if(maskContent && targetNode){
      maskContent.innerHTML = targetNode.outerHTML;
      let pos = targetNode.getBoundingClientRect();
      maskContent.style.top = pos.top + "px";
      maskContent.style.left = pos.left + "px";
      maskContent.style.width = pos.width + "px";
      maskContent.style.height = pos.height + "px";
    }
  }
  return (
    <div>
      <div className="content one">我是第一个div，我是第一个div</div>
      <div className="content two">我是第二个div，我是第二个div</div>
      <div className="content three">我是第三个div，我是第三个div</div>
      <div className="content four">我是第四个div，我是第四个div</div>
      {/* <div className="mask"></div> */}
      <div id="maskContent"></div>
    </div>
  );
}
