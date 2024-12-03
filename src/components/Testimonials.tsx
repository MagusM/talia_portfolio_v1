import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Simon Mor",
    role: "CEO at HiGuy",
    image:
      "https://www.limudnaim.co.il/sites/default/files/imagecache/175px/teacher_profile/230035.png.pagespeed.ce.-_PrRyQ5ae.png",
    content:
      "Talia's insights transformed our decision-making process. Her analytical approach helped us identify key growth opportunities we hadn't considered before.",
    rating: 5,
  },
  {
    name: "Michael Kahn",
    role: "Operations Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    content:
      "Working with Talia was a game-changer for our business. Her data-driven strategies led to a 40% increase in operational efficiency.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Finance Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    content:
      "Talia's expertise in process optimization helped us streamline our product development cycle. Highly recommended!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            Hear what our clients have to say about working together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
