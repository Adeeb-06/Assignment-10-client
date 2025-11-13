"use client";
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-base-200 to-white py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Get in touch with us. We'd love to hear from you!
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <FaMapMarkerAlt className="text-3xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-600">123 Main Street, Dhaka, Bangladesh</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <FaPhone className="text-3xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600">+880 1234 567890</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
            <FaEnvelope className="text-3xl text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600">info@propertyhub.com</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Follow Us</h2>
          <div className="flex justify-center gap-6 text-2xl text-gray-600">
            <a href="#" className="hover:text-primary transition-colors"><FaFacebook /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-primary transition-colors"><FaLinkedin /></a>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902948184545!2d90.39945271538441!3d23.78088739461817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7f9e2b45bfb%3A0x4a3ee02b1e6e37d!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
