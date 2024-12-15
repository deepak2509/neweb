import { motion } from 'framer-motion';
import { ShoppingCart, Truck, Clock, CreditCard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Online Shopping",
      description: "Browse and shop from our extensive collection of fresh groceries from the comfort of your home."
    },
    {
      icon: Truck,
      title: "Home Delivery",
      description: "Fast and reliable delivery service right to your doorstep with real-time tracking."
    },
    {
      icon: Clock,
      title: "Same Day Delivery",
      description: "Order before 2 PM and receive your groceries on the same day."
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Multiple payment options with secure transaction processing."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            Discover what makes primeUS mart special
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="glass-card rounded-xl p-8"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;