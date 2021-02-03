import React, { lazy } from 'react'
const WebGL = lazy(() => import(/* webpackChunkName: "WebGL" */'@/pages/demo/webGl'));
const NewLead = lazy(() => import(/* webpackChunkName: "newLead" */'@/pages/demo/newLead'));
const NewLead2 = lazy(() => import(/* webpackChunkName: "newLead2" */'@/pages/demo/newLead2'));
const Testapi = lazy(() => import(/* webpackChunkName: "Testapi" */'@/pages/demo/testapi'));

export default function index() {
    return (
        <div>
            <WebGL />
            <NewLead />
            <NewLead2 />
            <Testapi />
            <div className="test">
                <div className="content">
                    111
                </div>
            </div>
        </div>
    )
}
