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
    <div className="">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-tan-100 to-off-white-300 py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-sacramento text-earth-800 mb-6">
              Contact Me
            </h1>
            <p className="text-lg text-earth-600 mb-8">
              I'd love to hear from you! Fill out the form below to schedule a
              free consultation or ask any questions about my services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-12 md:py-20 bg-earth-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-off-white-300 rounded-xl p-6 md:p-8 shadow-md"
              >
                <h2 className="text-2xl md:text-3xl font-sacramento text-earth-800 mb-6">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-earth-700 mb-2"
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
                      className="w-full px-4 py-3 border border-tan-300 rounded-lg focus:ring-2 focus:ring-periwinkle-500 focus:border-periwinkle-500 bg-off-white-100 text-earth-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-earth-700 mb-2"
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
                      className="w-full px-4 py-3 border border-tan-300 rounded-lg focus:ring-2 focus:ring-periwinkle-500 focus:border-periwinkle-500 bg-off-white-100 text-earth-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-earth-700 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-tan-300 rounded-lg focus:ring-2 focus:ring-periwinkle-500 focus:border-periwinkle-500 bg-off-white-100 text-earth-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="dueDate"
                      className="block text-sm font-medium text-earth-700 mb-2"
                    >
                      Due Date (if applicable)
                    </label>
                    <input
                      type="date"
                      id="dueDate"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-tan-300 rounded-lg focus:ring-2 focus:ring-periwinkle-500 focus:border-periwinkle-500 bg-off-white-100 text-earth-700 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-earth-700 mb-2"
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
                      className="w-full px-4 py-3 border border-tan-300 rounded-lg focus:ring-2 focus:ring-periwinkle-500 focus:border-periwinkle-500 bg-off-white-100 text-earth-700 transition-colors resize-none"
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
                className="bg-periwinkle-100 rounded-xl p-6 md:p-8 shadow-md"
              >
                <h2 className="text-2xl md:text-3xl font-sacramento text-earth-800 mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-periwinkle-700 mb-3">
                      Contact Information
                    </h3>
                    <p className="text-earth-600 mb-2">
                      Email: hello@periwinkleperinatal.com
                    </p>
                    <p className="text-earth-600">Phone: (555) 123-4567</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-periwinkle-700 mb-3">
                      Service Area
                    </h3>
                    <p className="text-earth-600 mb-2">
                      Serving the Greater Charlotte Area, including:
                    </p>
                    <ul className="list-disc list-inside text-earth-600 space-y-1">
                      <li>Charlotte</li>
                      <li>Greensboro</li>
                      <li>Winston-Salem</li>
                      <li>High Point</li>
                      <li>And surrounding areas</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-periwinkle-700 mb-3">
                      Availability
                    </h3>
                    <p className="text-earth-600">
                      I'm available for consultations Monday through Friday, 9
                      AM to 5 PM. For urgent matters, please call or text.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-periwinkle-200">
                    <h3 className="text-lg font-medium text-periwinkle-700 mb-3">
                      Follow Me
                    </h3>
                    <div className="flex space-x-6">
                      <a
                        href="#"
                        className="text-periwinkle-600 hover:text-periwinkle-800 transition-colors font-medium"
                      >
                        Instagram
                      </a>
                      <a
                        href="#"
                        className="text-periwinkle-600 hover:text-periwinkle-800 transition-colors font-medium"
                      >
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
