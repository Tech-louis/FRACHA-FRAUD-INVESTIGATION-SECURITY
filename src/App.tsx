import React from 'react';
import { Shield, Users, Building2, Radio, Camera, Search, FileSearch } from 'lucide-react';
import Navbar from './components/Navbar';
import ServiceCard from './components/ServiceCard';
import Logo from './components/Logo';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1470723710355-95304d8aece4?auto=format&fit=crop&q=80"
            alt="Modern city skyline"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <Logo />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Protecting Truth, Securing Future
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Tanzania's leading fraud investigation and security services company
          </p>
          <a
            href="#contact"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition-colors duration-300"
          >
            Get Protected Today
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive fraud investigation and security solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              Icon={FileSearch}
              title="Fraud Investigation"
              description="Expert investigation services for corporate fraud, financial crimes, and internal theft"
            />
            <ServiceCard
              Icon={Search}
              title="Due Diligence"
              description="Thorough background checks and corporate intelligence services"
            />
            <ServiceCard
              Icon={Shield}
              title="Security Services"
              description="Professional security personnel and VIP protection services"
            />
            <ServiceCard
              Icon={Camera}
              title="Surveillance Systems"
              description="Advanced CCTV installation and monitoring solutions"
            />
            <ServiceCard
              Icon={Radio}
              title="Emergency Response"
              description="24/7 rapid response team for security incidents"
            />
            <ServiceCard
              Icon={Users}
              title="Corporate Security"
              description="Comprehensive security solutions for businesses and organizations"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">About FFI Security</h2>
              <p className="text-slate-600 mb-6">
                FRACHA FRAUD INVESTIGATION (FFI SECURITY) is Tanzania's premier security and investigation firm. 
                With extensive experience in fraud detection, corporate security, and risk management, we've 
                established ourselves as the trusted partner for businesses and organizations across East Africa.
              </p>
              <p className="text-slate-600 mb-6">
                Based in Dar es Salaam, our team of certified investigators and security professionals 
                combines local expertise with international best practices to deliver unmatched services.
              </p>
              <div className="grid grid-cols-2 gap-6 text-center">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-red-600">15+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-3xl font-bold text-red-600">2000+</div>
                  <div className="text-slate-600">Cases Solved</div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
                alt="Professional investigation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get in touch with our team of experts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold mb-4">Our Office</h3>
              <p className="mb-6">
                Msasani Peninsula<br />
                Dar es Salaam, Tanzania
              </p>
              <div className="space-y-4">
                <p>
                  <strong className="block">Phone:</strong>
                  +255 123 456 789
                </p>
                <p>
                  <strong className="block">Email:</strong>
                  info@ffisecurity.co.tz
                </p>
                <p>
                  <strong className="block">Working Hours:</strong>
                  24/7 Emergency Response<br />
                  Office: Monday - Friday, 8:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Logo />
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} FRACHA FRAUD INVESTIGATION. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;