import { Button } from "antd";
import {
  RocketOutlined,
  CheckCircleOutlined,
  CustomerServiceOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { features } from "../data/mockData";

const iconMap = {
  rocket: <RocketOutlined className="text-6xl" />,
  "check-circle": <CheckCircleOutlined className="text-6xl" />,
  headset: <CustomerServiceOutlined className="text-6xl" />,
  zap: <ThunderboltOutlined className="text-6xl" />,
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>حلول الإنترنت والألياف الضوئية - محمد ممدوح | الرئيسية</title>
        <meta
          name="description"
          content="استمتع بأسرع خدمات الإنترنت والألياف الضوئية في المنطقة. نقدم حلولاً متكاملة للإنترنت المنزلي والمكتبي مع أحدث أجهزة الرواتر."
        />
        <meta
          property="og:title"
          content="حلول الإنترنت والألياف الضوئية - محمد ممدوح"
        />
        <meta
          property="og:description"
          content="أفضل خدمات الإنترنت والألياف الضوئية والرواترات عالية السرعة في المنطقة."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="حلول الإنترنت والألياف الضوئية - محمد ممدوح"
        />
        <meta
          name="twitter:description"
          content="أفضل خدمات الإنترنت والألياف الضوئية والرواترات عالية السرعة في المنطقة."
        />
        <script type="application/ld+json">
          {`
                        {
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "حلول الإنترنت والألياف الضوئية - محمد ممدوح",
                            "description": "شركة رائدة في تقديم خدمات الإنترنت والألياف الضوئية والرواترات عالية السرعة في السعودية.",
                            "url": "https://isp-router-website.netlify.app/",
                            "telephone": "+966509189741",
                            "address": {
                                "@type": "PostalAddress",
                                "addressLocality": "الرياض",
                                "addressCountry": "SA"
                            },
                            "service": [
                                "Internet Installation",
                                "Fiber Optic Installation",
                                "Router Maintenance"
                            ]
                        }
                    `}
        </script>
      </Helmet>
      {/* Hero Section with Modern Gradient */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden mb-32">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-blue-600 to-cyan-500"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-40 right-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
          <div className="text-center animate-fade-in-up">
            <div className="inline-block mb-4 px-6 p-2 glass-dark rounded-full">
              <span className="text-white text-sm font-semibold">
                🚀 أفضل خدمات الإنترنت في المنطقة
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight">
              حلول إنترنت فايبر
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
                ورواترات عالية السرعة
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              استمتع بأسرع خدمات الإنترنت والألياف الضوئية مع أحدث أجهزة الرواتر
              وتقنيات الجيل الجديد
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/packages">
                <Button
                  type="primary"
                  size="large"
                  className="btn-premium gradient-primary border-0 h-14 px-10 text-lg font-bold shadow-2xl hover:scale-105 transition-transform"
                >
                  <span className="relative z-10">🎁 عرض الباقات</span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="large"
                  className="btn-premium glass-dark text-white border-white/30 h-14 px-10 text-lg font-semibold hover:scale-105 transition-transform"
                >
                  <span className="relative z-10">📞 تواصل معنا</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Glassmorphism */}
      <section className="py-32 relative" style={{ margin: "20px" }}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">لماذا تختارنا؟</span>
            </h2>
            <p className="text-xl text-gray-600">
              نقدم أفضل تجربة إنترنت في المنطقة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className="card-hover glass-effect rounded-2xl p-8 text-center shadow-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 flex justify-center items-center">
                  <div className="w-20 h-20 gradient-purple rounded-2xl flex items-center justify-center text-white shadow-lg transform hover:rotate-6 transition-transform">
                    {iconMap[feature.icon]}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section
        className="py-32 bg-gradient-to-br from-gray-50 to-gray-100 lg:pr-20"
        style={{ margin: "20px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-right">
              <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
                <span className="gradient-text text-sm font-semibold">
                  💎 عن الشركة
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-tight">
                رواد في عالم
                <br />
                <span className="gradient-text">الإنترنت الفائق</span>
              </h2>

              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                نحن شركة رائدة في مجال تقديم خدمات الإنترنت والألياف الضوئية في
                المنطقة. نفخر بتقديم أفضل الحلول التقنية لعملائنا من الأفراد
                والشركات.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                مع خبرة تمتد لسنوات عديدة، نضمن لك الحصول على خدمة إنترنت سريعة
                ومستقرة مع دعم فني متواصل على مدار الساعة.
              </p>

              <div className="flex gap-4 mb-8">
                <div className="glass-effect rounded-xl p-4 flex-1 text-center">
                  <div className="text-3xl font-bold gradient-text">+10K</div>
                  <div className="text-sm text-gray-600">عميل سعيد</div>
                </div>
                <div className="glass-effect rounded-xl p-4 flex-1 text-center">
                  <div className="text-3xl font-bold gradient-text">99.9%</div>
                  <div className="text-sm text-gray-600">وقت التشغيل</div>
                </div>
                <div className="glass-effect rounded-xl p-4 flex-1 text-center">
                  <div className="text-3xl font-bold gradient-text">24/7</div>
                  <div className="text-sm text-gray-600">دعم فني</div>
                </div>
              </div>

              <Link to="/services">
                <Button
                  type="primary"
                  size="large"
                  className="btn-premium gradient-purple border-0 h-12 px-8 text-base font-semibold shadow-lg"
                >
                  <span className="relative z-10">تعرف على خدماتنا ✨</span>
                </Button>
              </Link>
            </div>

            <div
              className="relative animate-fade-in"
              style={{ padding: "20px" }}
            >
              <div className="absolute -top-8 -right-8 w-full h-full gradient-cyan rounded-3xl opacity-20 blur-2xl"></div>
              <div className="relative glass-effect rounded-3xl p-12 shadow-2xl">
                <div className="text-center">
                  <div className="animate-float">
                    <RocketOutlined className="text-9xl gradient-text" />
                  </div>
                  <p className="text-2xl font-bold text-gray-700 mt-6">
                    سرعة وأداء لا مثيل له
                  </p>
                  <div className="mt-8 flex justify-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <div
                      className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Modern Gradient */}
      <section
        className="relative py-32 overflow-hidden"
        style={{ marginTop: "20px", paddingBottom: "20px" }}
      >
        <div className="absolute inset-0 gradient-primary"></div>
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"></div>
        <div
          className="absolute bottom-10 right-10 w-80 h-80 bg-pink-300 rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>

        <div className="px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              جاهز للبدء في تجربة إنترنت أسرع؟
            </h2>
            <p
              className="text-xl mb-10 text-purple-100 mx-auto leading-relaxed"
              style={{
                marginTop: "20px",
                marginBottom: "20px",
              }}
            >
              اشترك الآن واحصل على أفضل باقات الإنترنت بأسعار تنافسية مع تركيب
              مجاني
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/packages">
                <Button
                  size="large"
                  className="btn-premium glass-dark text-white border-white/30 h-14 px-10 text-lg font-bold shadow-2xl"
                >
                  <span className="relative z-10">🎯 اختر باقتك الآن</span>
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="large"
                  className="btn-premium bg-white text-purple-700 border-0 h-14 px-10 text-lg font-bold shadow-2xl hover:scale-105 transition-transform"
                >
                  تحدث مع خبير 💬
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
