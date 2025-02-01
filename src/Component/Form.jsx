import { useState } from "react";

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

  const [prediction, setPrediction] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Handle input changes
  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  // Handle form submission
  async function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload

    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setPrediction(data.prediction); // Assuming response has a 'prediction' field
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  }

  return (
    <div>
      <form
        className="bg-white shadow-lg rounded-xl p-8 max-w-lg mx-auto mt-10 space-y-4 border border-gray-200"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Diabetes Prediction Form
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="preg" className="block text-gray-700 font-medium">
              Pregnancy
            </label>
            <input
              type="number"
              id="preg"
              name="Pregnancies"
              value={formData.Pregnancies}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="glu" className="block text-gray-700 font-medium">
              Glucose
            </label>
            <input
              type="number"
              id="glu"
              name="Glucose"
              value={formData.Glucose}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="blood" className="block text-gray-700 font-medium">
              Blood Pressure
            </label>
            <input
              type="number"
              id="blood"
              name="BloodPressure"
              value={formData.BloodPressure}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="skin" className="block text-gray-700 font-medium">
              Skin Thickness
            </label>
            <input
              type="number"
              id="skin"
              name="SkinThickness"
              value={formData.SkinThickness}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="insulin" className="block text-gray-700 font-medium">
              Insulin
            </label>
            <input
              type="number"
              id="insulin"
              name="Insulin"
              value={formData.Insulin}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="bmi" className="block text-gray-700 font-medium">
              BMI
            </label>
            <input
              type="number"
              step="0.1"
              id="bmi"
              name="BMI"
              value={formData.BMI}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="diabet" className="block text-gray-700 font-medium">
              Diabetes Pedigree Function
            </label>
            <input
              type="number"
              step="0.001"
              id="diabet"
              name="DiabetesPedigreeFunction"
              value={formData.DiabetesPedigreeFunction}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-gray-700 font-medium">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition-all"
        >
          Submit
        </button>
      </form>

      {/* Modal for displaying prediction */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h3 className="text-xl font-semibold text-gray-800 text-center">
              Prediction Result
            </h3>
            <p className="text-center text-lg text-gray-700 mt-2">
              {prediction === 1 ? "Diabetes detected" : "No diabetes detected"}
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg text-lg font-semibold hover:bg-red-600 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Form;
