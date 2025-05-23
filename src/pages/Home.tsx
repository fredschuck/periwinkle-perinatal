import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const features = [
    {
      title: "Prenatal Support",
      description:
        "Comprehensive care and guidance throughout your pregnancy journey.",
      icon: "🤰",
    },
    {
      title: "Birth Doula Services",
      description:
        "Continuous physical and emotional support during labor and delivery.",
      icon: "👶",
    },
    {
      title: "Postpartum Care",
      description:
        "Support and guidance for the first weeks after your baby arrives.",
      icon: "💝",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-periwinkle-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-light-purple-900 mb-6">
                Your Journey to Motherhood, Supported
              </h1>
              <p className="text-lg text-dark-grey-500 mb-8">
                Experience pregnancy, birth, and postpartum with confidence
                through personalized doula care. I'm here to support you every
                step of the way.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="btn btn-primary">
                  Schedule Consultation
                </Link>
                <Link
                  to="/services"
                  className="btn bg-off-white-100 text-light-purple-500 border border-light-purple-500 hover:bg-periwinkle-100"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                  alt="Pregnant woman with doula"
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-center text-light-purple-900 mb-12">
            Comprehensive Doula Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-off-white-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-light-purple-700 mb-3">
                  {feature.title}
                </h3>
                <p className="text-dark-grey-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-periwinkle-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-light-purple-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg text-light-purple-700 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can support you through this transformative time
            in your life. Schedule a free consultation today.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
