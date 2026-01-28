import { Form, Input, Button, Row, Col, Card, message } from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  MessageOutlined,
  WhatsAppOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSfTBoymcLqlOoEdDIMHWbfMIzEVMmu8noNDeipcdhLoXER72g/formResponse";

    const formData = new FormData();

    formData.append("entry.1448749131", values.name);
    formData.append("entry.1632660021", values.phone);
    formData.append("entry.702403466", values.email);
    formData.append("entry.1533137931", values.message);

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors", // مهم جدًا مع Google Forms
        body: formData,
      });

      message.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً");
      form.resetFields();
    } catch (error) {
      message.error("حصل خطأ، حاول مرة أخرى");
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = "+966509189741";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  //https://docs.google.com/forms/d/e/1FAIpQLSfTBoymcLqlOoEdDIMHWbfMIzEVMmu8noNDeipcdhLoXER72g/formResponse

  /*<div jsname="o6bZLc">
  <input type="hidden" name="entry.1632660021" value="888">
  <input type="hidden" name="entry.1448749131" value="">
  <input type="hidden" name="entry.702403466" value="">
  <input type="hidden" name="entry.1533137931" value="">
  </div> */

  return (
    <div className="py-20 min-h-screen relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 bg-green-100 rounded-full">
            <span className="gradient-text text-sm font-semibold">
              📞 اتصل بنا
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ margin: "20px 0" }}
          >
            <span className="gradient-text">تواصل معنا</span>
          </h1>
          <p
            className="text-xl text-gray-600 mx-auto"
            style={{ margin: "20px 0" }}
          >
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك
          </p>
        </div>

        <Row gutter={[32, 32]}>
          {/* Contact Form */}
          <Col xs={24} lg={12}>
            <Card
              className="glass-effect border-0 shadow-2xl rounded-3xl animate-fade-in-up"
              bodyStyle={{ padding: "40px" }}
            >
              <h2 className="text-3xl font-bold mb-8 gradient-text">
                أرسل لنا رسالة ✉️
              </h2>
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item
                  label={
                    <span className="font-semibold text-gray-700">الاسم</span>
                  }
                  name="name"
                  rules={[{ required: true, message: "من فضلك أدخل اسمك" }]}
                >
                  <Input
                    prefix={<UserOutlined className="text-gray-400" />}
                    placeholder="أدخل اسمك الكامل"
                    size="large"
                    className="rounded-xl"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-gray-700">
                      رقم الهاتف
                    </span>
                  }
                  name="phone"
                  rules={[
                    { required: true, message: "من فضلك أدخل رقم هاتفك" },
                    {
                      pattern: /^[0-9]{11}$/,
                      message: "رقم الهاتف يجب أن يكون 11 رقم",
                    },
                  ]}
                >
                  <Input
                    prefix={<PhoneOutlined className="text-gray-400" />}
                    placeholder="01XXXXXXXXX"
                    size="large"
                    className="rounded-xl"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-gray-700">
                      البريد الإلكتروني
                    </span>
                  }
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "من فضلك أدخل بريدك الإلكتروني",
                    },
                    { type: "email", message: "البريد الإلكتروني غير صحيح" },
                  ]}
                >
                  <Input
                    prefix={<MailOutlined className="text-gray-400" />}
                    placeholder="example@email.com"
                    size="large"
                    className="rounded-xl"
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <span className="font-semibold text-gray-700">الرسالة</span>
                  }
                  name="message"
                  rules={[{ required: true, message: "من فضلك أدخل رسالتك" }]}
                >
                  <TextArea
                    rows={4}
                    placeholder="اكتب رسالتك هنا..."
                    size="large"
                    className="rounded-xl"
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    size="large"
                    className="btn-premium gradient-blue border-0 h-14 text-lg font-bold shadow-lg rounded-xl"
                  >
                    <span className="relative z-10">إرسال الرسالة 📨</span>
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>

          {/* Contact Info */}
          <Col xs={24} lg={12}>
            <div
              className="space-y-6 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Card
                className="glass-effect border-0 shadow-2xl rounded-3xl"
                bodyStyle={{ padding: "40px" }}
              >
                <h2
                  className="text-3xl font-bold mb-20 gradient-text "
                  style={{ margin: "20px 0" }}
                >
                  معلومات التواصل 📱
                </h2>
                <div className="space-y-6">
                  <div
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-purple-50 transition-colors"
                    style={{ margin: "20px 0" }}
                  >
                    <div className="w-14 h-14 gradient-blue rounded-2xl flex items-center justify-center shadow-lg">
                      <PhoneOutlined className="text-2xl text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 mb-1">الهاتف</p>
                      <p className="text-gray-600 text-lg" dir="ltr">
                        +966509189741
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-purple-50 transition-colors"
                    style={{ margin: "20px 0" }}
                  >
                    <div className="w-14 h-14 gradient-purple rounded-2xl flex items-center justify-center shadow-lg">
                      <MailOutlined className="text-2xl text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 mb-1">
                        البريد الإلكتروني
                      </p>
                      <p className="text-gray-600 text-lg">
                        Mohamedmomdouh870@gmail.com
                      </p>
                    </div>
                  </div>

                  <div
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-purple-50 transition-colors"
                    style={{ margin: "20px 0" }}
                  >
                    <div className="w-14 h-14 gradient-cyan rounded-2xl flex items-center justify-center shadow-lg">
                      <EnvironmentOutlined className="text-2xl text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 mb-1">العنوان</p>
                      <p className="text-gray-600 text-lg">الرياض، المملكةالعربية السعودية</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <Button
                    type="primary"
                    icon={<WhatsAppOutlined />}
                    block
                    size="large"
                    className="btn-premium h-14 text-lg font-bold shadow-lg rounded-xl border-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                    }}
                    onClick={handleWhatsApp}
                  >
                    <span className="relative z-10">تواصل عبر واتساب 💬</span>
                  </Button>
                </div>
              </Card>

              {/* Map Placeholder */}
             {/* <Card
                className="glass-effect border-0 shadow-2xl rounded-3xl"
                bodyStyle={{ padding: "32px" }}
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  موقعنا 📍
                </h3>
                <div className="bg-gradient-to-br from-purple-100 via-blue-100 to-cyan-100 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <EnvironmentOutlined className="text-4xl text-white" />
                    </div>
                    <p className="font-bold text-xl text-gray-800 mb-2">
                      خريطة الموقع
                    </p>
                    <p className="text-gray-600">القاهرة، مصر</p>
                  </div>
                </div>
              </Card> */}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}; 

export default Contact;
