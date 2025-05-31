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
              About Me
            </h1>
            <p className="text-lg text-earth-600 mb-8">
              I'm a passionate doula dedicated to supporting families through
              their pregnancy, birth, and postpartum journey. With over 5 years
              of experience and numerous certifications, I provide
              evidence-based care and emotional support to help you have the
              birth experience you desire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image and Bio Section */}
      <section className="py-12 md:py-20 bg-earth-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden shadow-md">
                <img
                  src="/becky.jpg"
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
              <h2 className="text-2xl md:text-3xl font-sacramento text-earth-800 mb-4">
                My Journey
              </h2>
              <p className="text-earth-600 mb-6">
                My passion for birth work began after supporting my sister
                through her pregnancy and birth experience. Witnessing the
                transformative power of continuous support during birth inspired
                me to become a doula. I believe every family deserves to feel
                empowered and supported during this special time.
              </p>
              <p className="text-earth-600 mb-6">
                I've had the privilege of supporting over 100 families through
                their pregnancy and birth journeys. Each experience has taught
                me something new and deepened my commitment to providing
                personalized, evidence-based care.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-off-white-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-periwinkle-100 rounded-xl p-6 md:p-8"
          >
            <h2 className="text-2xl md:text-3xl font-sacramento text-earth-800 mb-8 text-center">
              Certifications & Training
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center bg-off-white-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-periwinkle-700 mr-3 font-semibold">
                    ✓
                  </span>
                  <span className="text-earth-600">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-periwinkle-100 to-tan-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-4xl font-sacramento text-earth-800 mb-8 md:mb-12 text-center">
              What Families Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="bg-off-white-300 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="text-earth-600 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-periwinkle-700 font-medium">
                    {testimonial.author}
                  </div>
                  <div className="text-earth-500 text-sm">
                    {testimonial.baby}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
