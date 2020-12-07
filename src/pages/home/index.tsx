import React, { Component } from 'react'
import { Layout } from 'antd';
import Header from '@/widgets/Header';
const { Content } = Layout;
class Home extends Component {
    render() {
        return (
            <Layout>
                <Header/>
                <Content></Content>
            </Layout>
        )
    }
}

export default Home;