import { Layout } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, HeartFilled } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;

const Footer = () => {
    return (
        <AntFooter className="relative overflow-hidden p-0 w-full" style={{
            // margin: '20px 0 0',
            padding: '0'
        }}>
            {/* Gradient Background - Full Width */}
            <div className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 text-white relative " style={{
                padding: '20px'
            }}>
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-64 h-64 bg-purple-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

                {/* Content Container with max-width */}
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                        {/* About Section */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                                    <span className="text-xl">📡</span>
                                </div>
                                عن الشركة
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                نحن شركة رائدة في تقديم خدمات الإنترنت والألياف الضوئية بأعلى جودة وأفضل الأسعار. نسعى دائماً لتقديم تجربة استثنائية لعملائنا.
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold mb-4">تواصل معنا</h3>
                            <div className="space-y-3 text-gray-300">
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors" style={{
                                    padding: '3px'
                                }}>
                                    <div className="w-10 h-10 gradient-blue rounded-lg flex items-center justify-center">
                                        <PhoneOutlined className="text-white" />
                                    </div>
                                    <span dir="ltr">+966509189741</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors" style={{
                                    padding: '3px'
                                }} >
                                    <div className="w-10 h-10 gradient-purple rounded-lg flex items-center justify-center">
                                        <MailOutlined className="text-white" />
                                    </div>
                                    <span>Mohamedmomdouh870@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors" style={{
                                    padding: '3px'
                                }}>
                                    <div className="w-10 h-10 gradient-cyan rounded-lg flex items-center justify-center">
                                        <EnvironmentOutlined className="text-white" />
                                    </div>
                                    <span>الرياض، المملكة العربية السعودية</span>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold mb-4">تابعنا</h3>
                            <p className="text-gray-300 mb-6">تابعنا على وسائل التواصل الاجتماعي للحصول على آخر العروض والأخبار</p>
                            <div className="flex gap-4">
                                <a href="https://www.facebook.com/share/1KsmeUYvJ5/" target='_blanck' className="w-12 h-12 gradient-blue rounded-xl flex items-center justify-center text-white text-xl hover:scale-110 transition-transform shadow-lg">
                                    <FacebookOutlined />
                                </a>
                                {/* <a href="#" className="w-12 h-12 gradient-cyan rounded-xl flex items-center justify-center text-white text-xl hover:scale-110 transition-transform shadow-lg">
                                    <TwitterOutlined />
                                </a>
                                <a href="#" className="w-12 h-12 gradient-purple rounded-xl flex items-center justify-center text-white text-xl hover:scale-110 transition-transform shadow-lg">
                                    <InstagramOutlined />
                                </a> */}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-gray-700 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
                            <p className="flex items-center gap-2">
                                &copy; 2026 جميع الحقوق محفوظة - شركة الإنترنت والألياف الضوئية
                            </p>
                            <p className="flex items-center gap-2">
                                صنع بـ <HeartFilled className="text-red-500" /> في مصر
                            </p>
                            <p className="flex items-center gap-2">
                                تصميم وتطوير بواسطة <a href="wa.me/+201229890685" target="_blank" className="text-blue-400 hover:text-blue-300">م.عبدالرحمن بدوي</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AntFooter>
    );
};

export default Footer;
