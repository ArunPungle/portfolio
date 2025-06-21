import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contactpage = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_2zqakt5",
        "template_p9j0shh",
        form.current,
        "xq5-71L7rinIQrjsZ"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        setIsSending(false);
        form.current.reset();
      })
      .catch((err) => {
        console.error("EmailJs Error:", err);
        toast.error("Failed to send message. Please try again.");
        setIsSending(false);
      });
  };

  return (
    <div className="bg-gradient-to-br from-[#0f0f0f] via-[#1c1c1e] to-[#2c2c2e] text-white">
            <Navbar />     {" "}
      {/* Custom Toast Container with Transparent Background */}     {" "}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastClassName="backdrop-blur-md bg-black/60 text-white shadow-lg rounded-lg p-4"
        bodyClassName="text-sm font-medium"
      />
           {" "}
      <section id="contact" className="px-6 sm:px-10 lg:px-20 py-16">
               {" "}
        <div className="max-w-4xl mx-auto">
                   {" "}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold mb-6 text-center text-orange-500"
          >
                        Get in Touch          {" "}
          </motion.h2>
                   {" "}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-gray-300 mb-10 text-lg"
          >
                        I'd love to hear from you. Whether you have a question,
            a project idea, or just want to say hi — feel free to reach out!    
                 {" "}
          </motion.p>
                   {" "}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
                       {" "}
            <input
              type="text"
              name="from_name"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
                       {" "}
            <input
              type="email"
              name="from_email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
                       {" "}
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:col-span-2"
            />
                       {" "}
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:col-span-2"
            ></textarea>
                       {" "}
            <button
              type="submit"
              disabled={isSending}
              className="sm:col-span-2 px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-md transition-all"
            >
                            {isSending ? "Sending..." : "Send Message"}         
               {" "}
            </button>
                     {" "}
          </motion.form>
                 {" "}
        </div>
             {" "}
      </section>
         {" "}
    </div>
  );
};

export default Contactpage;
