import { Link, useLocation } from 'react-router-dom';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined, HomeOutlined, AppstoreOutlined, ShoppingOutlined, WifiOutlined, ContactsOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    const menuItems = [
        {
            key: '/',
            icon: <HomeOutlined />,
            label: <Link to="/">الرئيسية</Link>,
        },
        {
            key: '/services',
            icon: <AppstoreOutlined />,
            label: <Link to="/services">الخدمات</Link>,
        },
        {
            key: '/packages',
            icon: <ShoppingOutlined />,
            label: <Link to="/packages">الباقات</Link>,
        },
        {
            key: '/routers',
            icon: <WifiOutlined />,
            label: <Link to="/routers">الرواترات</Link>,
        },
        {
            key: '/contact',
            icon: <ContactsOutlined />,
            label: <Link to="/contact">تواصل معنا</Link>,
        },
    ];

    return (
        <nav className="glass-effect shadow-lg sticky top-0 z-50 border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo with Gradient */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                                <WifiOutlined className="text-2xl text-white" />
                            </div>
                            <div>
                                <span className="text-2xl font-bold gradient-text">شركة الإنترنت</span>
                                <p className="text-xs text-gray-500">الألياف الضوئية</p>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <Menu
                            mode="horizontal"
                            selectedKeys={[location.pathname]}
                            items={menuItems}
                            className="border-0 bg-transparent font-semibold"
                            style={{ minWidth: '500px', justifyContent: 'flex-end' }}
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <Button
                            type="text"
                            icon={<MenuOutlined style={{ fontSize: '24px' }} />}
                            onClick={() => setVisible(true)}
                            className="hover:bg-purple-50"
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Drawer with Gradient */}
            <Drawer
                title={
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                            <WifiOutlined className="text-white" />
                        </div>
                        <span className="gradient-text font-bold">القائمة</span>
                    </div>
                }
                placement="right"
                onClose={() => setVisible(false)}
                open={visible}
                className="rtl-drawer"
            >
                <Menu
                    mode="vertical"
                    selectedKeys={[location.pathname]}
                    items={menuItems}
                    onClick={() => setVisible(false)}
                    className="border-0 font-semibold"
                />
            </Drawer>
        </nav>
    );
};

export default Navbar;
