import { Card, Row, Col, Button, Tag } from "antd";
import { WifiOutlined, CheckOutlined } from "@ant-design/icons";
import { routers } from "../data/mockData";

const { Meta } = Card;

const Routers = () => {
  return (
    <div className="py-20 min-h-screen relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-cyan-100 rounded-full">
            <span className="gradient-text text-sm font-semibold">
              📡 رواترات
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              margin: "20px 0",
            }}
          >
            <span className="gradient-text">أجهزة الرواتر</span>
          </h1>
          <p className="text-xl text-gray-600 mx-auto" style={{ margin:"20px 0" }}>
            اختر الجهاز المناسب لاحتياجاتك من مجموعتنا المميزة
          </p>
        </div>

        <Row gutter={[32, 32]}>
          {routers.map((router, index) => (
            <Col xs={24} sm={12} lg={6} key={router.id}>
              <Card
                hoverable
                className="card-hover glass-effect border-0 shadow-2xl rounded-3xl h-full overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                cover={
                  <div className="relative h-56 gradient-cyan flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 opacity-90"></div>
                    <WifiOutlined className="text-8xl text-white absolute z-10 animate-float end-[30%] top-[30%]" style={{ transform: "translate(-50%, -50%)" }} />
                  </div>
                }
                bodyStyle={{ padding: "24px" }}
              >
                <Meta
                  title={
                    <span className="text-xl font-bold text-gray-800">
                      {router.name}
                    </span>
                  }
                  description={
                    <div className="space-y-4 mt-4">
                      <div>
                        <Tag
                          color="blue"
                          className="mb-3 px-3 py-1 text-sm font-semibold"
                        >
                          {router.wifiType}
                        </Tag>
                        <p className="text-gray-600 mb-3 font-medium">
                          {router.coverage}
                        </p>
                        <div className="gradient-text text-3xl font-bold mb-4">
                          {router.price} جنيه
                        </div>
                      </div>

                      <div>
                        <p className="font-bold mb-3 text-gray-800">
                          المميزات:
                        </p>
                        <ul className="space-y-2">
                          {router.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm"
                            >
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckOutlined className="text-green-600 text-xs" />
                              </div>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        type="primary"
                        block
                        className="btn-premium gradient-cyan border-0 h-12 font-bold shadow-lg mt-4"
                      >
                        <span className="relative z-10">تفاصيل أكثر ✨</span>
                      </Button>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>

        {/* Info Section */}
        <div className="mt-20 glass-effect rounded-3xl p-10 shadow-2xl animate-fade-in" style={{ margin: "20px 0" }}>
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ margin: "20px 0" }}>
            <span className="gradient-text">كيف تختار الراوتر المناسب؟</span>
          </h2>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <div className="text-center p-6 card-hover rounded-2xl">
                <div className="text-5xl mb-4">📏</div>
                <h4 className="font-bold text-xl mb-3 gradient-text">
                  حجم المساحة
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  حدد مساحة المكان لاختيار التغطية المناسبة
                </p>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="text-center p-6 card-hover rounded-2xl">
                <div className="text-5xl mb-4">📱</div>
                <h4 className="font-bold text-xl mb-3 gradient-text">
                  عدد الأجهزة
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  كلما زادت الأجهزة، احتجت لراوتر أقوى
                </p>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className="text-center p-6 card-hover rounded-2xl">
                <div className="text-5xl mb-4">⚡</div>
                <h4 className="font-bold text-xl mb-3 gradient-text">
                  سرعة الباقة
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  اختر راوتر يدعم سرعة باقتك
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Routers;
