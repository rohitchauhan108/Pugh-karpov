import React, { useState } from 'react';
import { MapPin, Phone, Mail, Printer, Send, CheckCircle2, Calendar } from 'lucide-react';

export default function ContactPage({ onOpenConsultation }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    query: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 sm:pt-36 pb-20 px-4 sm:px-8 font-['Poppins'] bg-grid-pattern">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <h1 className="font-['Montserrat'] text-4xl sm:text-5xl font-black text-[#1E3A8A] tracking-tight">
            Contact Us
          </h1>
          <p className="font-['Montserrat'] text-base sm:text-lg text-gray-600">
            Have A Question? Our Virginia attorneys are ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Contact Form from nT */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1E3A8A]">
                  Message Sent Successfully
                </h3>
                <p className="text-base text-gray-600 max-w-sm mx-auto">
                  Thank you, {formData.firstName}. We have received your inquiry and our attorneys
                  will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      query: '',
                      message: '',
                    });
                  }}
                  className="font-['Montserrat'] px-6 py-2.5 bg-[#1E3A8A] hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded cursor-pointer transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-['Montserrat'] block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none text-base text-gray-900 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="font-['Montserrat'] block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none text-base text-gray-900 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-['Montserrat'] block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none text-base text-gray-900 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="font-['Montserrat'] block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none text-base text-gray-900 focus:bg-white font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-['Montserrat'] block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Select An Option *
                  </label>
                  <select
                    name="query"
                    required
                    value={formData.query}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none text-base text-gray-900 focus:bg-white font-medium"
                  >
                    <option value="" disabled>Select An Option</option>
                    <option value="Bankruptcy">Bankruptcy</option>
                    <option value="Criminal and Traffic Defense">Criminal and Traffic Defense</option>
                    <option value="Personal injury">Personal injury</option>
                    <option value="Civil Litigation">Civil Litigation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-['Montserrat'] block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#1E3A8A] outline-none text-base text-gray-900 focus:bg-white resize-none leading-relaxed"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="font-['Montserrat'] w-full py-4 bg-[#1E3A8A] hover:bg-blue-800 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Details & Google Map */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
              <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1E3A8A] border-b border-gray-200 pb-3 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-[#1E3A8A]" />
                Pugh &amp; Karpov Law, PC
              </h3>

              <div className="space-y-4 text-base text-gray-700">
                <p className="font-medium text-gray-900">
                  2400 Princess Anne Road
                  <span className="block text-sm text-gray-500 font-normal">
                    (also suite at 2404 Princess Anne Road)
                  </span>
                  Virginia Beach, VA, 23456
                </p>

                <div className="pt-3 border-t border-gray-200 space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#1E3A8A]" />
                    <span className="text-gray-500">Office Phone:</span>
                    <a
                      href="tel:7577212390"
                      className="font-bold text-[#1E3A8A] hover:underline font-mono text-base sm:text-lg"
                    >
                      (757) 721-2390
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-500">Direct Line:</span>
                    <span className="font-semibold text-gray-800 font-mono text-base">(757) 426-7660</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Printer className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-500">Fax:</span>
                    <span className="font-semibold text-gray-800 font-mono text-base">(757) 782-9982</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#1E3A8A]" />
                    <span className="text-gray-500">Email:</span>
                    <a
                      href="mailto:legal@pughkarpov.com"
                      className="font-bold text-[#1E3A8A] hover:underline text-base"
                    >
                      legal@pughkarpov.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.9309819191926!2d-76.053178!3d36.751621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae56828f6a457%3A0x6d5a2c9358508a9b!2s2400%20Princess%20Anne%20Rd%2C%20Virginia%20Beach%2C%20VA%2023456%2C%20USA!5e0!3m2!1sen!2sin!4v1712840398890!5m2!1sen!2sin"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pugh & Karpov Law PC Location"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
