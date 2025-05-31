import { motion } from "framer-motion";

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
      title: "Labor& Delivery Doula Services",
      description: "Continuous support during labor and delivery.",
      details: [
        "24/7 on-call support from 38 weeks",
        "Continuous physical and emotional support during labor",
        "Two prenatal meetings planning birth and postpartum care",
        "Continuous labor and delivery support",
        "Advocacy and communication with medical staff",
        "Comfort measures and pain management techniques",
        "Partner support and guidance",
        "Initial breastfeeding support",
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
        "Sleep guidance and support",
        "Referrals to local resources and specialists",
      ],
      price: "$25/hour",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-serif font-bold text-light-purple-900 mb-6">
            Doula Services
          </h1>
          <p className="text-lg text-dark-grey-500 max-w-3xl mx-auto">
            I offer comprehensive doula services to support you through
            pregnancy, birth, and postpartum. Each package is customizable to
            meet your unique needs and preferences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-off-white-100 rounded-lg shadow-sm hover:shadow-md transition-shadow p-8"
            >
              <h2 className="text-2xl font-serif font-semibold text-light-purple-700 mb-4">
                {service.title}
              </h2>
              <p className="text-dark-grey-500 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-start">
                    <span className="text-light-purple-500 mr-2">✓</span>
                    <span className="text-dark-grey-500">{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="text-xl font-semibold text-light-purple-500 mb-6">
                {service.price}
              </div>
              <button className="btn btn-primary w-full">Learn More</button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-periwinkle-100 rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-serif font-semibold text-light-purple-900 mb-4">
            Customized Packages Available
          </h2>
          <p className="text-dark-grey-500 mb-6">
            Every pregnancy and birth journey is unique. I offer customized
            packages to meet your specific needs. Contact me to discuss how I
            can best support you.
          </p>
          <button className="btn btn-primary">Schedule a Consultation</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
