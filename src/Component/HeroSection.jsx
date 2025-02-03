function HeroSection() {
    return (
        <div className="p-6">

        <section className="bg-blue-100 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Predict Your Risk of Diabetes Instantly!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Our AI-powered tool helps you assess your diabetes risk in seconds.  
            Enter your health details and get an instant prediction.
          </p>
          <a
            href="/predict"
            className="mt-6 inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition-all"
            >
            Get Started
          </a>
        </div>
      </section>
              </div>
    )
}

export default HeroSection
