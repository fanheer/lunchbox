import React, { lazy } from 'react'
const NewLead = lazy(() => import(/* webpackChunkName: "newLead" */'@/pages/demo/newLead'));
const NewLead2 = lazy(() => import(/* webpackChunkName: "newLead2" */'@/pages/demo/newLead2'));

export default function index() {
    return (
        <div>
            <NewLead />
            <NewLead2 />
        </div>
    )
}
