import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, ShoppingCart, Truck, CreditCard } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <section className="hero-section min-h-[80vh] flex items-center">
        <div className="hero-pattern absolute inset-0 opacity-50" />
        <div className="container mx-auto px-4 pt-20">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Welcome to Primus Mart
              </span>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 mb-8 rounded-lg"
            >
              <div className="text-lg font-medium text-gray-800 mb-2">
                Call us: <a href="tel:9384800999" className="text-primary hover:underline">+91 9384800999</a>
              </div>
              <div className="text-lg text-gray-700">
                Store Timings: 8 am to 9:30 pm Every day
              </div>
            </motion.div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Fresh Groceries Delivered to Your Doorstep
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 mb-8"
            >
              Experience premium quality groceries with our curated selection of fresh produce,
              pantry essentials, and local favorites.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                Shop Now
              </button>
              <button className="px-8 py-3 rounded-lg border border-gray-200 hover:border-primary/20 hover:bg-primary/5 transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Product Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      {/* Location Section */}
<section className="py-16 bg-white" id="location">
  <div className="container mx-auto px-4">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl font-bold text-center mb-12"
    >
      Our Location
    </motion.h2>
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {/* Address Card */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-xl p-6"
      >
        <h3 className="text-2xl font-semibold mb-4">Primus Mart</h3>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-primary mt-1" />
            <span className="text-gray-700">
              Ground Floor, #6, 994a, Thalambur Rd, Thazhambur, Chennai, Tamil Nadu 600130
            </span>
          </div>
          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-primary mt-1" />
            <span className="text-gray-700">Store Timings: 8:00 AM - 9:30 PM</span>
          </div>
          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-primary mt-1" />
            <span className="text-gray-700">9384800999</span>
          </div>
        </div>
      </motion.div>

      {/* Google Map Embed */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        <iframe
          title="Primus Mart Location"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1536.5947274304137!2d80.21140043536722!3d12.849095259061432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b36848a1677%3A0x3e5db020bb52f678!2sPrimus%20Mart!5e0!3m2!1sen!2sus!4v1734279169482!5m2!1sen!2sus"
        ></iframe>
      </motion.div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section className="py-16 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-8"
              >
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
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
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
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
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50" id="contact">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Contact Us
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-8"
            >
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    rows={4}
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-600">support@primeusmart.com</p>
                 
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-600">9384800999</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                    <p className="text-gray-600">
                    Ground Floor, #6, 994a, Thalambur Rd, Thazhambur,
                      <br />
                    Chennai,Tamilnadu
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

const categories = [
  {
    title: "Fruits & Vegetables",
    description: "Fresh, seasonal produce sourced directly from local farmers",
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&q=80",
  },
  {
    title: "Beverages",
    description: "Refreshing drinks and premium beverages for every occasion",
    image: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&q=80",
  },
  {
    title: "FMCG",
    description: "Everyday essentials and branded consumer goods",
    image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80",
  },
  {
    title: "Cleaning & Sanitation",
    description: "High-quality cleaning supplies for a spotless home",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?auto=format&fit=crop&q=80",
  },
];

const locations = [
  {
    name: "Downtown Store",
    address: "123 Main Street, Downtown",
    hours: "9:00 AM - 9:00 PM",
    phone: "(555) 123-4567"
  },
  {
    name: "Westside Branch",
    address: "456 West Avenue, Westside",
    hours: "8:00 AM - 10:00 PM",
    phone: "(555) 987-6543"
  },
  {
    name: "Eastside Market",
    address: "789 East Boulevard, Eastside",
    hours: "7:00 AM - 11:00 PM",
    phone: "(555) 456-7890"
  }
];

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

export default Home;
