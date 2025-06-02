import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";

// EmailJS Init (Only once at top level)
emailjs.init("xq5-71L7rinIQrjsZ"); // Replace with your public key

const Contactpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: "", type: "" });

    if (!formData.name || !formData.subject || !formData.message) {
      setStatus({ message: "All fields are required!", type: "error" });
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ message: "Please enter a valid email", type: "error" });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await emailjs.send(
        "service_2zqakt5", // Replace with your service ID
        "template_p9j0shh", // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        }
      );

      if (response.status === 200) {
        setStatus({
          message: "Message sent successfully!",
          type: "success",
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setStatus({ message: "", type: "" }), 5000);
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      let errorMsg = "Failed to send message. Please try again later.";
      if (error.text?.includes("quota")) {
        errorMsg =
          "Monthly email limit reached. Please contact me directly at arunpunglegto15@gmail.com";
      }
      setStatus({ message: errorMsg, type: "error" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navbar />
      <section
        id="getintouch"
        className="min-h-screen pt-32 px-6 sm:px-10 lg:px-20"
        style={{
          background:
            "linear-gradient(to top, rgba(128, 90, 213, 0.3), rgba(255, 255, 255, 1))",
        }}
      >
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl">
            I'm always open to discussing new projects or opportunities. Please
            feel free to reach out.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-purple-700 font-semibold text-sm mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-purple-700 font-semibold text-sm mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-purple-700 font-semibold text-sm mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-purple-700 font-semibold text-sm mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
                required
              />
            </div>

            {status.message && (
              <div
                className={`text-center font-semibold mt-4 ${
                  status.type === "error" ? "text-red-500" : "text-green-500"
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 mt-4 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-all ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </motion.form>
        </div>

        <section id="contact">
          <div className="mt-16 text-center pb-14">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="flex justify-center">
              <div className="w-full sm:w-2/3 p-4">
                <div className="p-6 bg-white border border-gray-200 shadow-md rounded-lg">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:arunpunglegto15@gmail.com"
                    className="text-purple-600 hover:text-purple-800 transition"
                  >
                    arunpunglegto15@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contactpage;
