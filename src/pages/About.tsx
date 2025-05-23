import { motion } from "framer-motion";

const About = () => {
  const certifications = [
    "Certified Birth Doula (DONA International)",
    "Certified Postpartum Doula (DONA International)",
    "Certified Lactation Counselor (ALPP)",
    "CPR Certified",
    "First Aid Certified",
  ];

  const testimonials = [
    {
      quote:
        "Having a doula was the best decision we made for our birth experience. The support and guidance were invaluable.",
      author: "Sarah & James",
      baby: "Baby Emma, 2023",
    },
    {
      quote:
        "The postpartum support made our transition to parenthood so much smoother. We couldn't have done it without you!",
      author: "Michael & Lisa",
      baby: "Baby Noah, 2023",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl font-serif font-bold text-primary-800 mb-6">
            About Me
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            I'm a passionate doula dedicated to supporting families through
            their pregnancy, birth, and postpartum journey. With over 5 years of
            experience and numerous certifications, I provide evidence-based
            care and emotional support to help you have the birth experience you
            desire.
          </p>
        </motion.div>

        {/* Image and Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Doula portrait"
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-serif font-semibold text-primary-700 mb-4">
              My Journey
            </h2>
            <p className="text-gray-600 mb-6">
              My passion for birth work began after supporting my sister through
              her pregnancy and birth experience. Witnessing the transformative
              power of continuous support during birth inspired me to become a
              doula. I believe every family deserves to feel empowered and
              supported during this special time.
            </p>
            <p className="text-gray-600 mb-6">
              I've had the privilege of supporting over 100 families through
              their pregnancy and birth journeys. Each experience has taught me
              something new and deepened my commitment to providing
              personalized, evidence-based care.
            </p>
          </motion.div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-primary-100 rounded-lg p-8 mb-20"
        >
          <h2 className="text-2xl font-serif font-semibold text-primary-700 mb-6 text-center">
            Certifications & Training
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
              >
                <span className="text-primary-500 mr-2">✓</span>
                <span className="text-gray-600">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl font-serif font-semibold text-primary-700 mb-8 text-center">
            What Families Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <p className="text-gray-600 italic mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="text-primary-600 font-medium">
                  {testimonial.author}
                </div>
                <div className="text-gray-500 text-sm">{testimonial.baby}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
