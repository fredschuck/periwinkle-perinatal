import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Prenatal Doula Services",
      description: "Comprehensive support throughout your pregnancy journey.",
      details: [
        "Initial consultation and birth planning",
        "Regular check-ins and emotional support",
        "Education on pregnancy, labor, and birth options",
        "Help creating your birth plan",
        "Partner support and involvement",
        "Access to resources and referrals",
      ],
      price: "$800",
    },
    {
      title: "Labor & Delivery Doula Services",
      description: "Continuous support during labor and delivery.",
      details: [
        "24/7 on-call support from 38 weeks",
        "Continuous physical and emotional support during labor",
        "Two prenatal meetings planning birth and postpartum care",
        "Continuous labor and delivery support",
        "Advocacy and communication with medical staff",
        "Comfort measures and pain management techniques",
        "Partner support and guidance",
      ],
      price: "$1,600",
    },
    {
      title: "Postpartum Doula Services",
      description: "Support and guidance for the first weeks after birth.",
      details: [
        "Newborn care education and support",
        "Breastfeeding support and guidance",
        "Light household tasks and meal preparation",
        "Emotional support and adjustment assistance",
        "Breastfeeding support",
        "Sleep guidance and support",
        "Referrals to local resources and specialists",
        "Sibling adjustment support",
      ],
      price: "$25/hour",
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-sacramento text-earth-800 mb-6">
              Doula Services
            </h1>
            <p className="text-lg text-earth-600 mb-8">
              I offer comprehensive doula services to support you through
              pregnancy, birth, and postpartum. Each package is customizable to
              meet your unique needs and preferences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-12 md:py-20 bg-earth-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-off-white-300 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 md:p-8 h-full flex flex-col"
              >
                <h2 className="text-xl md:text-2xl font-sacramento text-earth-800 mb-4">
                  {service.title}
                </h2>
                <p className="text-earth-600 mb-6 flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start">
                      <span className="text-periwinkle-700 mr-3 font-semibold flex-shrink-0">
                        ✓
                      </span>
                      <span className="text-earth-600 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="text-xl md:text-2xl font-sacramento text-periwinkle-700 mb-4 text-center">
                    {service.price}
                  </div>
                  <Link
                    to="/contact"
                    className="btn btn-primary w-full text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages Section */}
      <section className="py-16 bg-gradient-to-r from-periwinkle-100 to-tan-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-off-white-300 rounded-xl p-6 md:p-8 text-center max-w-4xl mx-auto shadow-md"
          >
            <h2 className="text-2xl md:text-3xl font-sacramento text-earth-800 mb-4">
              Customized Packages Available
            </h2>
            <p className="text-earth-600 mb-8">
              Every pregnancy and birth journey is unique. I offer customized
              packages to meet your specific needs. Contact me to discuss how I
              can best support you.
            </p>
            <Link to="/contact" className="btn btn-tertiary text-lg px-8 py-4">
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
