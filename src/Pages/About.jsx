import { motion } from "framer-motion";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-8"
      >
        <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-48 h-48 rounded-full overflow-hidden shadow-lg"
          >
            <img
              src="/fuad.jpg" // Replace with your photo path
              alt="Fuad Seid"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex-1"
          >
            <p className="text-gray-700 text-lg leading-relaxed">
              My name is <strong>Fuad Seid</strong>, and I am a passionate and
              dedicated software engineering student at{" "}
              <strong>Debre Birhan University</strong>. As I continue to pursue
              my academic goals, I am also actively seeking opportunities to
              contribute to the tech industry. I have a strong foundation in both{" "}
              <strong>front-end</strong> and <strong>back-end development</strong>, with expertise in
              building dynamic, responsive, and user-friendly web applications.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              I specialize in <strong>React.js</strong> for creating engaging user interfaces and{" "}
              <strong>Flutter</strong> for developing high-quality cross-platform mobile
              applications for iOS and Android. My enthusiasm for{" "}
              <strong>Artificial Intelligence (AI)</strong> drives me to
              continuously learn and explore new technologies, and I am currently
              expanding my skills in <strong>Python</strong> and AI development.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              I am eager to collaborate with innovative teams, contribute my
              skills, and make a meaningful impact in the field of technology.
              Below, you can find links to my <strong>GitHub</strong> and{" "}
              <strong>portfolio</strong> to explore my projects and work.
            </p>

            {/* Links */}
            <div className="mt-6 flex space-x-4">
              <a
                href="https://github.com/Fuadseid"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all"
              >
                GitHub
              </a>
              <a
                href="https://portfolio-react-31s6.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all"
              >
                Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;