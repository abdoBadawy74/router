import { Card, Row, Col } from 'antd';
import { WifiOutlined, SettingOutlined, HomeOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { services } from '../data/mockData';

const iconMap = {
    'wifi': <WifiOutlined className="text-6xl" />,
    'router': <SettingOutlined className="text-6xl" />,
    'home': <HomeOutlined className="text-6xl" />,
    'support': <CustomerServiceOutlined className="text-6xl" />,
};

const Services = () => {
    return (
        <div className="py-30 min-h-screen relative overflow-hidden text-center">
            {/* Background Decorations */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 animate-fade-in-up" style={{ margin: "10px 0" }}>
                    <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
                        <span className="gradient-text text-sm font-semibold">⚡ خدماتنا</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">خدماتنا المتميزة</span>
                    </h1>
                    <p className="text-xl text-gray-600 mx-auto text-center">
                        نقدم مجموعة شاملة من الخدمات لتلبية جميع احتياجاتك من الإنترنت والاتصالات
                    </p>
                </div>

                <Row gutter={[32, 32]} style={{ margin: "20px 0" }}>
                    {services.map((service, index) => (
                        <Col xs={24} sm={12} lg={6} key={service.id}>
                            <Card
                                hoverable
                                className="card-hover glass-effect border-0 shadow-xl rounded-2xl h-full animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                bodyStyle={{ padding: '32px' }}
                            >
                                <div className="text-center">
                                    <div className="mb-6 flex justify-center">
                                        <div className="w-24 h-24 gradient-cyan rounded-2xl flex items-center justify-center text-white shadow-lg transform hover:scale-110 transition-all">
                                            {iconMap[service.icon]}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Additional Info Section */}
                <div className="mt-20 glass-effect rounded-3xl p-10 shadow-2xl animate-fade-in">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                        <span className="gradient-text">مميزات خدماتنا</span>
                    </h2>
                    <Row gutter={[24, 24]} style={{ margin: "20px 0" }}>
                        <Col xs={24} md={8}>
                            <div className="text-center p-6 card-hover rounded-2xl p-6">
                                <div className="mb-4 flex justify-center items-center">
                                    <div className="w-16 h-16 gradient-purple rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                                        <CustomerServiceOutlined className="text-3xl text-white" />
                                    </div>
                                </div>
                                <h4 className="font-bold text-xl mb-3 text-gray-800">دعم فني 24/7</h4>
                                <p className="text-gray-600">فريق دعم متاح على مدار الساعة</p>
                            </div>
                        </Col>
                        <Col xs={24} md={8}>
                            <div className="text-center p-6 card-hover rounded-2xl p-6">
                                <div className="mb-4 flex justify-center items-center">
                                    <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                                        <WifiOutlined className="text-3xl text-white" />
                                    </div>
                                </div>
                                <h4 className="font-bold text-xl mb-3 text-gray-800">سرعة فائقة</h4>
                                <p className="text-gray-600">اتصال سريع ومستقر</p>
                            </div>
                        </Col>
                        <Col xs={24} md={8}>
                            <div className="text-center p-6 card-hover rounded-2xl p-6">
                                <div className="mb-4 flex justify-center items-center">
                                    <div className="w-16 h-16 gradient-cyan rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                                        <SettingOutlined className="text-3xl text-white" />
                                    </div>
                                </div>
                                <h4 className="font-bold text-xl mb-3 text-gray-800">تركيب احترافي</h4>
                                <p className="text-gray-600">فنيون محترفون لخدمتك</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Services;
