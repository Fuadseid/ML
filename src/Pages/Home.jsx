import HeroSection from "../Component/HeroSection";
import { motion } from "framer-motion";

function Home() {
    // Animation variants for Framer Motion
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="bg-gradient-to-b from-gray-50 to-blue-50">
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="py-16 px-6 text-center"
            >
                <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-800">
                    Why Use Diabet Predicted?
                </motion.h2>
                <motion.p variants={fadeInUp} className="mt-3 text-gray-600 max-w-2xl mx-auto">
                    Our platform is designed to help individuals assess their diabetes risk using advanced machine learning models.
                </motion.p>

                <motion.div
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto"
                >
                    {[
                        {
                            title: "AI-Powered Predictions",
                            description: "We use machine learning to analyze your health metrics and provide instant results.",
                            color: "bg-gradient-to-br from-blue-500 to-purple-500",
                        },
                        {
                            title: "Easy to Use",
                            description: "Simply enter your details, and our model will give you a diabetes risk assessment.",
                            color: "bg-gradient-to-br from-green-500 to-teal-500",
                        },
                        {
                            title: "Completely Free",
                            description: "No hidden fees. Access diabetes prediction at no cost.",
                            color: "bg-gradient-to-br from-orange-500 to-pink-500",
                        },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            className={`p-6 text-white ${feature.color} shadow-lg rounded-lg hover:shadow-xl transition-all duration-300`}
                        >
                            <h3 className="text-2xl font-semibold">{feature.title}</h3>
                            <p className="mt-2 opacity-90">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* About Diabetes Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gradient-to-br from-blue-600 to-purple-600 py-16 px-6 text-center"
            >
                <h2 className="text-4xl font-bold text-white">Understanding Diabetes</h2>
                <p className="mt-3 text-gray-100 max-w-3xl mx-auto">
                    Diabetes is a chronic health condition that affects how your body turns food into energy.
                    It occurs when your blood sugar levels are too high, either due to lack of insulin or insulin resistance.
                    Early detection and lifestyle changes can help manage and even prevent diabetes.
                </p>
            </motion.section>

            {/* Input Range Information Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="bg-white py-16 px-6 text-center"
            >
                <motion.h2 variants={fadeInUp} className="text-4xl font-bold text-gray-800">
                    Input Range Information
                </motion.h2>
                <motion.p variants={fadeInUp} className="mt-3 text-gray-600 max-w-2xl mx-auto">
                    Please ensure your inputs fall within the following ranges:
                </motion.p>
                <motion.div
                    variants={staggerContainer}
                    className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                >
                    {[
                        { title: "Pregnancies", range: "0 to 17", color: "bg-blue-50" },
                        { title: "Glucose", range: "0 to 200", color: "bg-green-50" },
                        { title: "Blood Pressure", range: "0 to 122", color: "bg-purple-50" },
                        { title: "Skin Thickness", range: "0 to 99", color: "bg-teal-50" },
                        { title: "Insulin", range: "0 to 846", color: "bg-orange-50" },
                        { title: "BMI", range: "0 to 67.1", color: "bg-pink-50" },
                        { title: "Diabetes Pedigree Function", range: "0.08 to 2.42", color: "bg-indigo-50" },
                        { title: "Age", range: "21 to 81", color: "bg-yellow-50" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.05 }}
                            className={`${item.color} p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300`}
                        >
                            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.range}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* Call-to-Action Section */}
            <motion.section
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-gradient-to-br from-blue-600 to-purple-600 py-16 px-6 text-center"
            >
                <h2 className="text-4xl font-bold text-white">Take Control of Your Health</h2>
                <p className="mt-3 text-gray-100 max-w-2xl mx-auto">
                    Don’t wait for symptoms to appear. Predict your diabetes risk now and take early preventive measures.
                </p>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/predict"
                    className="mt-6 inline-block bg-white text-blue-600 text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition-all"
                >
                    Get Your Prediction
                </motion.a>
            </motion.section>
        </div>
    );
}

export default Home;