import React, { useState } from "react"
import "./index.less"
import myphoto from '@/static/images/my_photo.jpg'
import Start from "../start"
export default function index() {
    const [showStart, setShowStart] = useState(true)
    return (
      <div className="homepage">
        <div className="title">Fanheer's</div>
        <img className="photo" src={myphoto} />
        {showStart && <Start clickStart={() => setShowStart(false)} />}
      </div>
    );
}
