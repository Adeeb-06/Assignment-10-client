import React from "react";
import { ShieldCheck, Search, Headphones, Home } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
      title: "Verified Listings",
      description:
        "Every property is manually verified to ensure authenticity, so you can rent or buy with complete confidence.",
    },
    {
      icon: <Search className="w-10 h-10 text-secondary" />,
      title: "Smart Search Filters",
      description:
        "Quickly find properties that match your budget, location, and preferences — all in a few clicks.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-secondary" />,
      title: "24/7 Expert Support",
      description:
        "Our support team is always ready to assist you, from property inquiries to booking assistance.",
    },
    {
      icon: <Home className="w-10 h-10 text-secondary" />,
      title: "Trusted by Thousands",
      description:
        "Over 10,000+ happy customers have found their dream homes through our platform.",
    },
  ];

  return (
    <section className="bg-base-200 text-gray-900 py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-secondary rounded-full blur-[120px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          We make your property journey easier, faster, and more reliable — giving you the best real estate experience possible.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-secondary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
