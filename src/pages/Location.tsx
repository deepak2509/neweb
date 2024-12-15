import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
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
            Our Locations
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600"
          >
            Find a primeUS mart location near you
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{location.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <span>{location.hours}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <span>{location.phone}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Location;