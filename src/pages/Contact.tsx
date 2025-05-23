import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dueDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      dueDate: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-serif font-bold text-primary-800 mb-6 text-center">
            Contact Me
          </h1>
          <p className="text-lg text-gray-600 mb-12 text-center">
            I'd love to hear from you! Fill out the form below to schedule a
            free consultation or ask any questions about my services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="dueDate"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Due Date (if applicable)
                  </label>
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-primary-100 rounded-lg p-8"
            >
              <h2 className="text-2xl font-serif font-semibold text-primary-700 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-primary-600 mb-2">
                    Contact Information
                  </h3>
                  <p className="text-gray-600">
                    Email: hello@periwinkleperinatal.com
                  </p>
                  <p className="text-gray-600">Phone: (555) 123-4567</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-primary-600 mb-2">
                    Service Area
                  </h3>
                  <p className="text-gray-600">
                    Serving the Greater Seattle Area, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Seattle</li>
                    <li>Bellevue</li>
                    <li>Kirkland</li>
                    <li>Redmond</li>
                    <li>And surrounding areas</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-primary-600 mb-2">
                    Availability
                  </h3>
                  <p className="text-gray-600">
                    I'm available for consultations Monday through Friday, 9 AM
                    to 5 PM. For urgent matters, please call or text.
                  </p>
                </div>

                <div className="pt-6">
                  <h3 className="text-lg font-medium text-primary-600 mb-2">
                    Follow Me
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
