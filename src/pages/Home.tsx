import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const features = [
    {
      title: "Prenatal Support",
      description:
        "Personalized care to guide you through your pregnancy with confidence.",
      image:
        "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Birth Doula Services",
      description:
        "Dedicated support during labor for a calm, empowered birth experience.",
      image: "/image-2.jpg",
    },
    {
      title: "Postpartum Care",
      description:
        "Nurturing support for you and your baby in those precious early weeks.",
      image: "/image-3.jpg",
    },
  ];

  const testimonials = [
    {
      quote: "My doula made my birth experience so empowering and stress-free!",
      author: "Sarah M., First-Time Mom",
    },
    {
      quote: "The postpartum support was a lifeline during those early days.",
      author: "Emily R., Mother of Two",
    },
  ];

  return (
    <div className="font-alice">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-tan-100 to-off-white-300 py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-sacramento text-earth-800 mb-4">
                Embrace Your Motherhood Journey
              </h1>
              <p className="text-lg text-earth-600 mb-6">
                Personalized doula support for pregnancy, birth, and
                beyond—crafted with care to empower you.
              </p>
              <Link
                to="/contact"
                className="btn btn-tertiary text-lg px-8 py-4"
              >
                Book a Free Consultation
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 w-full max-w-md"
            >
              <img
                src="/image-1.jpg"
                alt="Doula supporting a mother"
                className="rounded-lg shadow-md object-cover w-full h-64 md:h-80"
              />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-periwinkle-300 rounded-full opacity-20 -z-10"></div>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-periwinkle-500 rounded-full opacity-20 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust-Building Section */}
      <section className="py-16 bg-off-white-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-sacramento text-center text-earth-800 mb-10"
          >
            Trusted by Mothers Like You
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-tan-100 p-6 rounded-lg shadow-sm border border-tan-200"
              >
                <p className="text-earth-600 italic">"{testimonial.quote}"</p>
                <p className="mt-4 font-semibold text-earth-700">
                  {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-earth-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl font-sacramento text-center text-earth-800 mb-8 md:mb-12"
          >
            How I Support You
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-off-white-300 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group w-full"
              >
                {/* Background Image with Black & White Filter and Gradient Overlay */}
                <div className="relative h-32 sm:h-40 md:h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col justify-end">
                    <h3 className="text-base sm:text-lg md:text-xl font-sacramento font-semibold text-white mb-1 md:mb-2 drop-shadow-lg">
                      {feature.title}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm md:text-sm leading-relaxed drop-shadow-md line-clamp-3">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Bottom section with Learn More link */}
                <div className="p-3 sm:p-4 bg-off-white-300">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-periwinkle-700 hover:text-periwinkle-900 font-medium text-xs sm:text-sm group-hover:translate-x-1 transition-transform"
                  >
                    Learn More
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>

                {/* Subtle periwinkle accent */}
                <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-2 h-2 sm:w-3 sm:h-3 bg-periwinkle-500 rounded-full opacity-70"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-periwinkle-100 to-tan-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-sacramento text-earth-800 mb-6"
          >
            Begin Your Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-earth-600 mb-8 max-w-xl mx-auto"
          >
            Let's create a personalized plan to support you through pregnancy,
            birth, and postpartum.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
              Schedule Your Free Consultation
            </Link>
          </motion.div>
          <div className="mt-6 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-periwinkle-400 rounded-full"></div>
            <div className="w-2 h-2 bg-periwinkle-500 rounded-full"></div>
            <div className="w-2 h-2 bg-periwinkle-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Footer Teaser */}
      <section className="py-10 bg-tan-100">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-earth-600"
          >
            Have questions? Reach out at{" "}
            <a
              href="mailto:info@yourdoula.com"
              className="text-periwinkle-700 hover:text-periwinkle-900"
            >
              info@yourdoula.com
            </a>
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Home;
