import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const { Content } = Layout;

const MainLayout = () => {
    return (
        <Layout className="min-h-screen">
            <Navbar />
            <Content className="bg-gray-50">
                <Outlet />
            </Content>
            <Footer />
        </Layout>
    );
};

export default MainLayout;
