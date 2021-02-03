import React from 'react'
import http from '@/services/http'
import { Button } from 'antd';
export default function testapi() {
    const getSong = (id: number) => {
        return http({
          url: "/api/user/getUserInfo",
          method: "get",
          params: { id }
        });
    }
    return (
        <div>
            <Button onClick={() => getSong(111)}>aaaaa </Button>
        </div>
    )
}
