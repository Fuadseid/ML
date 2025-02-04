import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BASE_URL = "https://machine-learning-1-yl7v.onrender.com/predict";

function Form() {
  const [formData, setFormData] = useState({
    Pregnancies: "",
    Glucose: "",
    BloodPressure: "",
    SkinThickness: "",
    Insulin: "",
    BMI: "",
    DiabetesPedigreeFunction: "",
    Age: "",
  });

  const [errors, setErrors] = useState({});
  const [prediction, setPrediction] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);

  // Watch for changes in prediction and show modal
  useEffect(() => {
    if (prediction !== null) {
      setShowModal(true); // Show modal when prediction is set
    }
  }, [prediction]);

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: "" });
  }

  function validateForm() {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `Please fill in ${key.replace(/([A-Z])/g, " $1")}`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoadingButton(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10-second timeout

      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setPrediction(data.prediction); // Set prediction
    } catch (error) {
      console.error("Error fetching prediction:", error);
      toast.error("Failed to fetch prediction. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setLoadingButton(false);
    }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <motion.form
        initial="hidden"
        animate="visible"
        variants={formVariants}
        className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full space-y-6 border border-gray-100 transform transition-all hover:scale-105"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Diabetes Prediction Form
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(formData).map((key, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <label className="block text-gray-700 font-medium mb-2">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </label>
              <input
                type="number"
                required
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
              {errors[key] && (
                <p className="text-red-500 text-sm mt-1">{errors[key]}</p>
              )}
            </motion.div>
          ))}
        </div>

        <motion.button
          disabled={loadingButton}
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg text-lg font-semibold shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all"
        >
          {loadingButton ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              <span className="ml-2">Predicting...</span>
            </div>
          ) : (
            "Predict"
          )}
        </motion.button>
      </motion.form>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full"
            >
              <h3 className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Prediction Result
              </h3>
              <p className="text-center text-xl text-gray-700 mt-4">
                {prediction === 1 ? (
                  <span className="text-red-600 font-semibold">
                    Diabetes detected
                  </span>
                ) : (
                  <span className="text-green-600 font-semibold">
                    No diabetes detected
                  </span>
                )}
              </p>
              <motion.button
                onClick={() => {
                  setShowModal(false); // Close modal
                  setPrediction(null); // Reset prediction
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-lg text-lg font-semibold shadow-lg hover:from-red-600 hover:to-pink-600 transition-all"
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default Form;