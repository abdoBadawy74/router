import { Table, Button, Tag, Card } from 'antd';
import { CheckOutlined, WhatsAppOutlined, StarFilled } from '@ant-design/icons';
import { packages } from '../data/mockData';

const Packages = () => {
    const columns = [
        {
            title: 'اسم الباقة',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <div className="flex items-center gap-2">
                    <span className="font-bold text-xl">{text}</span>
                    {record.popular && (
                        <Tag icon={<StarFilled />} color="gold" className="font-semibold">الأكثر طلباً</Tag>
                    )}
                </div>
            ),
        },
        {
            title: 'السرعة',
            dataIndex: 'speed',
            key: 'speed',
            render: (text) => <span className="font-bold text-lg gradient-text">{text}</span>,
        },
        {
            title: 'السعر الشهري',
            dataIndex: 'price',
            key: 'price',
            render: (price) => (
                <span className="font-bold text-2xl gradient-text">{price} ر.س</span>
            ),
        },
        {
            title: 'المميزات',
            dataIndex: 'features',
            key: 'features',
            render: (features) => (
                <ul className="space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <CheckOutlined className="text-green-500 text-base" />
                            <span className="text-gray-700">{feature}</span>
                        </li>
                    ))}
                </ul>
            ),
        },
        {
            title: 'الإجراء',
            key: 'action',
            render: () => (
                <Button
                    type="primary"
                    icon={<WhatsAppOutlined />}
                    className="btn-premium gradient-blue border-0 h-12 px-6 font-bold shadow-lg"
                >
                    <a href="https://wa.me/+966509189741" target="_blank" className="relative z-10">اشترك الآن </a>
                </Button>
            ),
        },
    ];

    return (
        <div className="py-20 min-h-screen relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-10 right-20 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
            <div className="absolute bottom-10 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>

            <div className="px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 animate-fade-in-up">
                    <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
                        <span className="gradient-text text-sm font-semibold">💰 باقاتنا</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="gradient-text">باقات الإنترنت</span>
                    </h1>
                    <p className="text-xl text-gray-600 mx-auto" style={{ margin: "20px 0" }}>
                        اختر الباقة المناسبة لاحتياجاتك بأفضل الأسعار
                    </p>
                </div>

                {/* Desktop Table */}
                <div className="hidden md:block glass-effect rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
                    <Table
                        columns={columns}
                        dataSource={packages}
                        rowKey="id"
                        pagination={false}
                        className="packages-table"
                        rowClassName={(record) => record.popular ? 'bg-gradient-to-l from-yellow-50 to-white' : ''}
                    />
                </div>

                {/* Mobile Cards */}
                <div className="grid grid-cols-1 gap-8 md:hidden">
                    {packages.map((pkg, index) => (
                        <Card
                            key={pkg.id}
                            className={`card-hover glass-effect border-0 shadow-2xl rounded-3xl animate-fade-in-up ${pkg.popular ? 'ring-4 ring-yellow-400' : ''
                                }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            bodyStyle={{ padding: '32px' }}
                        >
                            {pkg.popular && (
                                <div className="text-center mb-4">
                                    <Tag icon={<StarFilled />} color="gold" className="text-base px-4 py-2 font-bold">
                                        الأكثر طلباً ⭐
                                    </Tag>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-3xl font-bold mb-3 gradient-text">{pkg.name}</h3>
                                <p className="text-xl font-semibold text-blue-600 mb-2">{pkg.speed}</p>
                                <div className="text-4xl font-bold gradient-text mb-1">{pkg.price} جنيه</div>
                                <p className="text-gray-500">شهرياً</p>
                            </div>

                            <div className="mb-6">
                                <h4 className="font-bold text-lg mb-4 text-gray-800">المميزات:</h4>
                                <ul className="space-y-3">
                                    {pkg.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <CheckOutlined className="text-green-600 text-xs" />
                                            </div>
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Button
                                type="primary"
                                icon={<WhatsAppOutlined />}
                                block
                                size="large"
                                className="btn- premium gradient-blue border-0 h-14 text-lg font-bold shadow-lg"

                            >
                                <a href="https://wa.me/+201229890685" target="_blank" className="relative z-10">اشترك الآن 🎯</a>
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Packages;
