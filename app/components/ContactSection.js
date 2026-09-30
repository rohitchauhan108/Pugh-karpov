import React, { useState } from 'react';
import { MapPin, Phone, Mail, Printer, Send, CheckCircle2, Calendar } from 'lucide-react';

export default function ContactSection({ preselectedArea }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    query: preselectedArea || 'Civil Litigation',
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
    <section id="contact" className="py-20 bg-white text-slate-800 scroll-mt-24 bg-grid-pattern font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        {/* Section Heading from nT */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-['Montserrat'] text-3xl sm:text-4xl font-extrabold text-[#1e3a8a]">
            Contact Us
          </h2>
          <p className="font-['Montserrat'] text-base sm:text-lg text-slate-600">
            Have a question or looking to book a consultation? We are here to assist you.
          </p>
        </div>

        {/* Contact Grid: Form + Office Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Form */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-['Montserrat'] text-2xl font-bold text-[#1e3a8a]">
                  Consultation Request Sent
                </h3>
                <p className="text-base text-slate-600 max-w-sm mx-auto">
                  Thank you, {formData.firstName}. We will review your message regarding{' '}
                  <strong className="text-[#1e3a8a]">{formData.query}</strong> and respond promptly
                  to schedule your consultation.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      query: 'Civil Litigation',
                      message: '',
                    });
                  }}
                  className="font-['Montserrat'] px-6 py-3 bg-[#1e3a8a] hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-['Montserrat'] block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] outline-none text-base text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="font-['Montserrat'] block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] outline-none text-base text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-['Montserrat'] block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] outline-none text-base text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="font-['Montserrat'] block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(757) 000-0000"
                      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] outline-none text-base text-slate-900 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-['Montserrat'] block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Select Practice Area *
                  </label>
                  <select
                    name="query"
                    value={formData.query}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] outline-none text-base text-slate-900 font-medium"
                  >
                    <option value="Civil Litigation">Civil Litigation</option>
                    <option value="Personal injury">Personal injury</option>
                    <option value="Bankruptcy">Bankruptcy</option>
                    <option value="Criminal and Traffic Defense">Criminal and Traffic Defense</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="font-['Montserrat'] block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message..."
                    className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#1e3a8a] outline-none text-base text-slate-900 resize-none leading-relaxed"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="font-['Montserrat'] w-full py-4 bg-[#1e3a8a] hover:bg-blue-800 text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Calendar className="w-4 h-4 text-amber-300" />
                  <span>{submitting ? 'Submitting...' : 'Book Consultation / Send Message'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Details & Google Map */}
          <div className="space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
              <h3 className="font-['Montserrat'] text-xl font-bold text-[#1e3a8a] border-b border-slate-200 pb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#1e3a8a]" />
                Pugh &amp; Karpov Law, PC
              </h3>

              <div className="space-y-4 text-base text-slate-700">
                <p className="font-medium text-slate-900">
                  2400 Princess Anne Road
                  <span className="block text-sm text-slate-500 font-normal">
                    (also suite at 2404 Princess Anne Road)
                  </span>
                  Virginia Beach, VA, 23456
                </p>

                <div className="pt-3 border-t border-slate-200 space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#1e3a8a]" />
                    <span className="text-slate-500">Main Office:</span>
                    <a
                      href="tel:7577212390"
                      className="font-bold text-[#1e3a8a] hover:underline font-mono text-base sm:text-lg"
                    >
                      (757) 721-2390
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-slate-500" />
                    <span className="text-slate-500">Direct Attorney Line:</span>
                    <span className="font-semibold text-slate-800 font-mono text-base">(757) 426-7660</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Printer className="w-5 h-5 text-slate-500" />
                    <span className="text-slate-500">Fax:</span>
                    <span className="font-semibold text-slate-800 font-mono text-base">(757) 782-9982</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#1e3a8a]" />
                    <span className="text-slate-500">Email:</span>
                    <a
                      href="mailto:legal@pughkarpov.com"
                      className="font-bold text-[#1e3a8a] hover:underline text-base"
                    >
                      legal@pughkarpov.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3187.9309819191926!2d-76.053178!3d36.751621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae56828f6a457%3A0x6d5a2c9358508a9b!2s2400%20Princess%20Anne%20Rd%2C%20Virginia%20Beach%2C%20VA%2023456%2C%20USA!5e0!3m2!1sen!2sin!4v1712840398890!5m2!1sen!2sin"
                width="100%"
                height="240"
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
    </section>
  );
}
