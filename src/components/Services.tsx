import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Filter,
  BarChart2,
  FileText,
  Users,
  Workflow,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Data Cleaning & Management",
    description:
      "Standardize, validate, and organize data for reliable decision-making.",
    tools: "Tools: SQL, Excel, Power BI",
  },
  {
    icon: Filter,
    title: "Funnel Optimization",
    description:
      "Identify bottlenecks and improve conversion rates across sales and marketing funnels.",
    tools: "Benefit: Enhanced revenue flow with team buy-in.",
  },
  {
    icon: BarChart2,
    title: "Dashboard Design",
    description:
      "Develop dynamic, easy-to-use dashboards for tracking real-time metrics.",
    tools: "Tools: Power BI, Tableau",
  },
  {
    icon: FileText,
    title: "Key Metrics Reporting",
    description:
      "Build insightful reports tailored to company goals with actionable KPIs.",
  },
  {
    icon: Users,
    title: "Team-Centered Salesforce Optimization",
    description:
      "Revamp Salesforce setups for user-friendly workflows. Deliver training for smooth transitions.",
  },
  {
    icon: Workflow,
    title: "Operational Workflow Overhaul",
    description:
      "Reengineer inefficient processes with team-driven solutions for long-term improvements.",
  },
  {
    icon: BarChart2,
    title: "Forecasting & Predictive Analytics",
    description:
      "Develop models for resource planning and trend analysis. Ensure teams understand and leverage predictions.",
  },
  {
    icon: Settings,
    title: "Process Automation",
    description:
      "Automate repetitive tasks collaboratively with team input to reduce resistance.",
    tools: "Tools: RPA, Salesforce",
  },
];

export const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empower your business with tailored solutions and advanced tools.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-2">{service.description}</p>
              {service.tools && (
                <p className="text-sm text-gray-500 italic">{service.tools}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
