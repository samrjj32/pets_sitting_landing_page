import React, { useState } from 'react';
import { Heart, PawPrint, Clock, Shield, MessageSquare, Star, Mail, Phone, MapPin, Check, ChevronDown, ChevronUp, Camera, Award, Users } from 'lucide-react';

function App() {
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'dog-walking',
    message: ''
  });

  const faqs = [
    {
      question: "How long are your dog walks?",
      answer: "Our standard dog walks are 60 minutes long, but we also offer 30-minute and 90-minute options to suit your pet's needs."
    },
    {
      question: "Do you provide services on weekends and holidays?",
      answer: "Yes, we operate 7 days a week, including all holidays, to ensure your pets receive consistent care."
    },
    {
      question: "Are your pet sitters insured and vetted?",
      answer: "All our pet sitters are fully insured, background-checked, and have extensive experience in pet care."
    },
    {
      question: "What areas of London do you cover?",
      answer: "We cover all London zones 1-4, with limited availability in zones 5-6. Contact us to check specific coverage in your area."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative min-h-[700px] hero-gradient">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80"
            alt="Dog being petted"
            className="w-full h-full object-cover rounded-b-[50px] shadow-soft"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 rounded-b-[50px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl py-32">
            <span className="bg-primary-500/20 text-white px-6 py-2 rounded-full text-sm font-medium mb-6 inline-block backdrop-blur-sm">
              Trusted Pet Care Services in London
            </span>
            <h1 className="text-6xl font-bold mb-6 leading-tight">Your Pets Deserve the Best Care</h1>
            <p className="text-xl mb-8 text-gray-100">Professional, loving care for your furry family members when you're away. Available 24/7 across London.</p>
            <div className="flex gap-4">
              <button className="btn-primary">
                Book Now
              </button>
              <button className="btn-secondary">
                View Services
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 -mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="card bg-pastel-pink">
              <div className="text-4xl font-bold mb-2 text-primary-600">5000+</div>
              <div className="text-gray-700">Happy Pets</div>
            </div>
            <div className="card bg-pastel-yellow">
              <div className="text-4xl font-bold mb-2 text-primary-600">15+</div>
              <div className="text-gray-700">Professional Sitters</div>
            </div>
            <div className="card bg-pastel-blue">
              <div className="text-4xl font-bold mb-2 text-primary-600">98%</div>
              <div className="text-gray-700">Satisfaction Rate</div>
            </div>
            <div className="card bg-pastel-green">
              <div className="text-4xl font-bold mb-2 text-primary-600">24/7</div>
              <div className="text-gray-700">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card group">
              <div className="w-16 h-16 bg-pastel-pink rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PawPrint className="text-primary-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Dog Walking</h3>
              <p className="text-gray-600 mb-6">Daily walks and exercise for your furry friends in safe, fun environments.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> Individual or group walks
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> GPS tracking available
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> Flexible scheduling
                </li>
              </ul>
            </div>
            <div className="card group">
              <div className="w-16 h-16 bg-pastel-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="text-primary-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Pet Sitting</h3>
              <p className="text-gray-600 mb-6">In-home care and attention for your pets with lots of love and playtime.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> Feeding and medication
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> Daily photo updates
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> Home security checks
                </li>
              </ul>
            </div>
            <div className="card group">
              <div className="w-16 h-16 bg-pastel-yellow rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="text-primary-500 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Overnight Care</h3>
              <p className="text-gray-600 mb-6">Round-the-clock supervision and companionship for your pets.</p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> 12-hour supervision
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> Evening and morning walks
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> Constant companionship
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-pastel-pink/30 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4">Basic Care</h3>
              <div className="text-5xl font-bold mb-6 text-primary-500">£25<span className="text-lg text-gray-500">/visit</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> 30-minute visit
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> Feeding and water refresh
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> Basic updates
                </li>
              </ul>
              <button className="btn-primary w-full">Choose Plan</button>
            </div>
            <div className="card transform scale-105 bg-white border-2 border-primary-500">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Premium Care</h3>
              <div className="text-5xl font-bold mb-6 text-primary-500">£40<span className="text-lg text-gray-500">/visit</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> 60-minute visit
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> Walking and playtime
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> Photo and video updates
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> Medication administration
                </li>
              </ul>
              <button className="btn-primary w-full">Choose Plan</button>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4">Overnight Care</h3>
              <div className="text-5xl font-bold mb-6 text-primary-500">£80<span className="text-lg text-gray-500">/night</span></div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> 12-hour stay
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> Evening and morning walks
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> Constant supervision
                </li>
                <li className="flex items-center text-gray-700">
                  <Check className="w-5 h-5 text-primary-500 mr-3" /> Home security
                </li>
              </ul>
              <button className="btn-primary w-full">Choose Plan</button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Why Pet Parents Love Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center group">
              <Shield className="w-16 h-16 text-primary-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">Fully Insured</h3>
              <p className="text-gray-600">Rest easy knowing your pets and home are protected with our comprehensive insurance coverage.</p>
            </div>
            <div className="card text-center group">
              <Award className="w-16 h-16 text-primary-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">Certified Sitters</h3>
              <p className="text-gray-600">Our pet sitters are certified in pet first aid and have extensive professional training.</p>
            </div>
            <div className="card text-center group">
              <Users className="w-16 h-16 text-primary-500 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-4">Trusted Team</h3>
              <p className="text-gray-600">Every team member is thoroughly vetted and passionate about providing the best pet care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-pastel-blue/30">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Happy Pets Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&q=80" alt="Happy Dog" className="w-full h-72 object-cover rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-105" />
            <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80" alt="Cat Portrait" className="w-full h-72 object-cover rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-105" />
            <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80" alt="Dogs Playing" className="w-full h-72 object-cover rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-105" />
            <img src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80" alt="Cute Cat" className="w-full h-72 object-cover rounded-2xl shadow-soft hover:shadow-hover transition-all duration-300 transform hover:scale-105" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title">Common Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card">
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                >
                  <span className="text-xl font-semibold text-gray-800">{faq.question}</span>
                  {selectedFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-primary-500" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-primary-500" />
                  )}
                </button>
                {selectedFaq === index && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-600 text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gradient-to-b from-white to-pastel-pink/30">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="section-title">Book Your Pet Care</h2>
          <form onSubmit={handleSubmit} className="card">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  required
                >
                  <option value="dog-walking">Dog Walking</option>
                  <option value="pet-sitting">Pet Sitting</option>
                  <option value="overnight-care">Overnight Care</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your pet
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  placeholder="Tell us about your pet's needs, personality, and any special requirements..."
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 w-full btn-primary"
            >
              Schedule a Visit
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card flex items-center justify-center group">
              <Phone className="w-8 h-8 text-primary-500 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-lg">+44 20 1234 5678</span>
            </div>
            <div className="card flex items-center justify-center group">
              <Mail className="w-8 h-8 text-primary-500 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-lg">hello@petsitting.co.uk</span>
            </div>
            <div className="card flex items-center justify-center group">
              <MapPin className="w-8 h-8 text-primary-500 mr-3 group-hover:scale-110 transition-transform" />
              <span className="text-lg">London, United Kingdom</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">About Us</h3>
              <p className="text-gray-400 leading-relaxed">Providing professional and loving pet care services in London since 2020. We treat every pet as part of our family.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-primary-300 transition-colors">Dog Walking</li>
                <li className="hover:text-primary-300 transition-colors">Pet Sitting</li>
                <li className="hover:text-primary-300 transition-colors">Overnight Care</li>
                <li className="hover:text-primary-300 transition-colors">Pet Taxi</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Service Areas</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-primary-300 transition-colors">Central London</li>
                <li className="hover:text-primary-300 transition-colors">North London</li>
                <li className="hover:text-primary-300 transition-colors">South London</li>
                <li className="hover:text-primary-300 transition-colors">Greater London</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-primary-300 transition-colors">+44 20 1234 5678</li>
                <li className="hover:text-primary-300 transition-colors">hello@petsitting.co.uk</li>
                <li className="hover:text-primary-300 transition-colors">London, UK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 London Pet Sitting Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;