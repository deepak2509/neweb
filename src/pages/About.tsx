import { motion } from 'framer-motion';

const About = () => {
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
            About primeUS mart
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            Your trusted neighborhood grocery partner
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, primeUS mart began with a simple mission: to provide
                fresh, quality groceries to our community with unparalleled service
                and convenience.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve thousands of customers across multiple
                locations, maintaining our commitment to quality, freshness, and
                customer satisfaction.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide fresh, quality groceries while making shopping convenient
                and enjoyable for our customers.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Our Values</h3>
              <p className="text-gray-600">
                Quality, Customer Service, Community, Sustainability
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">Our Promise</h3>
              <p className="text-gray-600">
                We're committed to providing the best shopping experience with
                premium products and exceptional service.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;