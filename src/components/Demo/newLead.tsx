import React, { useEffect } from "react";
import "./index.less";
export default function NewLead() {
  useEffect(() => {
    // test()
    console.log(add(1)(2)(3))
  }, []);
  var add = function (m: any) {
    var temp = function (n: any) {
        return add(m + n);
    }
    temp.toString = function () {
        return m;
    }
    return temp;
};
  function test() {
    let arry = Array.from(
      document.querySelectorAll(".z") as NodeListOf<HTMLElement>
    );
    let index = -1;
    let direct = 1;
    setInterval(() => {
      if (index >= 5) direct = -1;
      else if (index <= 0) direct = 1;
      index = index + direct;
      arry.forEach((d, i) => {
        d.style.opacity = "1";
      });
      setTimeout(() => {
        arry.forEach((d, i) => {
          if (i == index) return;
          d.style.opacity = "0.1";
        });
      }, 1000);
    }, 2000);
  }
  return (
    <div>
      <div className="wrap">
        <div className="z z1"></div>
        <div className="z z2"></div>
        <div className="z z3"></div>
        <div className="z z4"></div>
        <div className="z z5"></div>
        <div className="z z6"></div>
      </div>
    </div>
  );
}
