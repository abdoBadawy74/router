import React, { useState } from 'react';
import { Typography, Card, Tag, Tabs, Select, Space, Row, Col, Badge, Empty } from 'antd';
import {
    CloudServerOutlined,
    WifiOutlined,
    DownloadOutlined,
    UploadOutlined,
    CheckCircleOutlined,
    CloseCircleOutlined,
    GlobalOutlined,
    WalletOutlined,
    TagOutlined
} from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import { offers, companies } from '../data/offersData';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;

const Offers = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [selectedCompany, setSelectedCompany] = useState('جميع الشركات');

    const filteredOffers = offers.filter(offer => {
        const matchesType = activeTab === 'all' ||
            (activeTab === 'fiber' && offer.type === 'Fiber') ||
            (activeTab === '5g' && offer.type === '5G');
        const matchesCompany = selectedCompany === 'جميع الشركات' || offer.company === selectedCompany;
        return matchesType && matchesCompany;
    });

    const handleOrder = () => {
        // open whatsapp link
        window.open('https://wa.me/+966509189741', '_blank');
    }

    const OfferCard = ({ offer }) => (
        <Badge.Ribbon text={offer.badge} color="red" hidden={!offer.badge}>
            <Card
                className="card-hover overflow-hidden rounded-2xl border-white/20 shadow-xl"
                hoverable
                style={{ height: '100%', background: 'rgba(255, 255, 255, 0.9)' }}
                bodyStyle={{ padding: '24px' }}
            >
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <Tag color={offer.type === 'Fiber' ? 'blue' : 'purple'} className="mb-2 px-3 py-0.5 rounded-full font-bold">
                            {offer.type === 'Fiber' ? 'فايبر Fiber' : '5G هوائي'}
                        </Tag>
                        <Title level={4} className="!mb-0 !mt-2">{offer.packageName}</Title>
                        <Text type="secondary" className="text-sm">{offer.company}</Text>
                    </div>
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                        {offer.company === 'STC' && <span className="font-bold text-purple-600">STC</span>}
                        {offer.company === 'Zain' && <span className="font-bold text-teal-500">Zain</span>}
                        {offer.company === 'Mobily' && <span className="font-bold text-blue-500">Mobily</span>}
                        {offer.company !== 'STC' && offer.company !== 'Zain' && offer.company !== 'Mobily' && <GlobalOutlined className="text-2xl text-gray-400" />}
                    </div>
                </div>

                <div className="space-y-4 py-4 border-y border-gray-100 my-4">
                    <Row gutter={[16, 16]}>
                        <Col span={12}>
                            <div className="flex items-center gap-2">
                                <DownloadOutlined className="text-blue-500" />
                                <div className="flex flex-col">
                                    <Text type="secondary" className="text-[10px] leading-tight">تحميل</Text>
                                    <Text strong className="text-sm">{offer.downloadSpeed}</Text>
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="flex items-center gap-2">
                                <UploadOutlined className="text-purple-500" />
                                <div className="flex flex-col">
                                    <Text type="secondary" className="text-[10px] leading-tight">رفع</Text>
                                    <Text strong className="text-sm">{offer.uploadSpeed}</Text>
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="flex items-center gap-2">
                                <WifiOutlined className="text-orange-500" />
                                <div className="flex flex-col">
                                    <Text type="secondary" className="text-[10px] leading-tight">راوتر مجاني</Text>
                                    <Text strong className="text-sm">{offer.freeRouter}</Text>
                                </div>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="flex items-center gap-2">
                                <WalletOutlined className="text-green-500" />
                                <div className="flex flex-col">
                                    <Text type="secondary" className="text-[10px] leading-tight">تأسيس</Text>
                                    <Text strong className="text-sm">{offer.setupFee}</Text>
                                </div>
                            </div>
                        </Col>
                    </Row>



                </div>

                {
                    offer.freeBooster && (
                        <Tag color="green" className="px-3 py-1 rounded-full font-bold" dir='rtl'>
                            {`${offer.freeBooster}`}
                        </Tag>
                    )
                }



                <div className="flex flex-col gap-1 items-start mt-4">
                    <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-black text-green-600">{offer.monthlyPrice}</span>
                        <span className="text-sm text-gray-500 font-bold">ريال/شهر</span>
                    </div>
                    {offer.notes && (
                        <Text type="secondary" className="text-[11px] italic mt-1">
                            * {offer.notes}
                        </Text>
                    )}
                </div>

                <button onClick={handleOrder} className="w-full mt-6 py-3 gradient-primary text-white rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity">
                    اطلب الآن
                </button>
            </Card>
        </Badge.Ribbon>
    );

    return (
        <div className="min-h-screen pt-20 bg-gray-50" dir="rtl">
            <Helmet>
                <title>عروض شركات الاتصالات | السعودية</title>
                <meta name="description" content="قارن بين أحدث عروض شركات الاتصالات في السعودية (STC, Zain, Mobily). باقات فايبر و 5G بأسعار حصرية وتوفير كبير." />
                <meta property="og:title" content="عروض شركات الاتصالات السعودية - فايبر و 5G" />
                <meta property="og:description" content="البحث عن أفضل عروض الإنترنت في المملكة أصبح سهلاً. قارن واشترك الآن." />
            </Helmet>
            <div className="px-4 sm:px-6 lg:px-8" style={{ padding: "10px 0 0" }}>
                {/* Header */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <Title level={1} className="!text-4xl md:!text-5xl !font-black !mb-4">
                        عروض شركات الاتصالات <span className="gradient-text">في السعودية</span>
                    </Title>
                    <Text className="text-lg text-gray-500 mx-auto block leading-relaxed">
                        قارن بين أفضل باقات الإنترنت المنزلي (فايبر و 5G) من جميع المزودين في المملكة واختر ما يناسب احتياجك.
                    </Text>
                </div>

                {/* Filters */}
                <div className="glass-effect rounded-l-lg shadow-sm mb-12 animate-fade-in" style={{ padding: "0 10px" }}>
                    <Row gutter={[24, 24]} align="middle">
                        <Col xs={24} md={12}>
                            <Tabs
                                activeKey={activeTab}
                                onChange={setActiveTab}
                                className="custom-tabs"
                            >
                                <TabPane tab="جميع العروض" key="all" />
                                <TabPane tab="فايبر Fiber" key="fiber" />
                                <TabPane tab="5G هوائي" key="5g" />
                            </Tabs>
                        </Col>
                        <Col xs={24} md={12} className="flex md:justify-end items-center gap-4">
                            <span className="font-bold text-gray-600">تصفية حسب الشركة:</span>
                            <Select
                                defaultValue="جميع الشركات"
                                style={{ width: 200 }}
                                onChange={setSelectedCompany}
                                className="rounded-lg overflow-hidden"
                            >
                                {companies.map(company => (
                                    <Option key={company} value={company}>{company}</Option>
                                ))}
                            </Select>
                        </Col>
                    </Row>
                </div>

                {/* Results Count */}
                <div className="mb-8 flex items-center gap-2">
                    <TagOutlined className="text-gray-400" />
                    <Text strong className="text-gray-600">
                        تم العثور على <span className="text-blue-600 underline">{filteredOffers.length}</span> عرض
                    </Text>
                </div>

                {/* Offers Grid */}
                {filteredOffers.length > 0 ? (
                    <Row gutter={[24, 24]}>
                        {filteredOffers.map(offer => (
                            <Col xs={24} sm={12} lg={8} xl={6} key={offer.id}>
                                <div className="animate-fade-in" style={{ animationDelay: `${offer.id * 0.1}s` }}>
                                    <OfferCard offer={offer} />
                                </div>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <div className="py-20 text-center">
                        <Empty description="لا توجد عروض تطابق فلاتر البحث حالياً" />
                    </div>
                )}

                {/* Info Section */}
                <div className="mt-20 glass-dark text-white overflow-hidden relative" style={{ padding: '40px' }}>
                    <div className="relative z-10">
                        <Title level={2} className="!text-white !font-bold mb-6">هل تحتاج إلى مساعدة في الاختيار؟</Title>
                        <Text className="text-gray-300 text-lg block mb-8 max-w-xl">
                            فريقنا التقني مستعد لمساعدتك في فحص التغطية في موقعك وتوجيهك لأفضل مزود خدمة متاح في حيك.
                        </Text>
                        <button className="bg-white text-purple-600 rounded-xl font-bold hover:bg-gray-100 transition-colors hover:shadow-lg"
                            style={{
                                padding: '12px 24px',
                                boxShadow: '0 4px 14px rgba(255, 255, 255, 0.4)',
                                cursor: 'pointer',
                            }}
                            onClick={handleOrder}
                        >
                            تواصل مع مستشار تقني
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;
