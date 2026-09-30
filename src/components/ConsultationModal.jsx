import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, Shield } from 'lucide-react';

export default function ConsultationModal({ isOpen, onClose, defaultPracticeArea }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    practiceArea: defaultPracticeArea || 'Bankruptcy',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

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

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200 font-['Poppins']">
      <div className="relative w-full max-w-lg bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden">
        {/* Header in Logo Blue */}
        <div className="flex items-center justify-between p-5 bg-[#1E3A8A] text-white">
          <div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-300" />
              <span className="font-['Montserrat'] text-xs font-bold uppercase tracking-wider text-blue-100">
                Pugh &amp; Karpov Law, PC
              </span>
            </div>
            <h3 className="font-['Montserrat'] text-xl font-bold text-white mt-1">
              Book A Consultation
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-blue-200 hover:text-white rounded-sm hover:bg-blue-800 transition-colors cursor-pointer"
            aria-label="Close Modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-['Montserrat'] text-2xl font-bold text-[#1E3A8A]">
                Consultation Request Received
              </h4>
              <p className="text-base text-slate-700 leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. An attorney
                at Pugh &amp; Karpov Law will review your inquiry regarding{' '}
                <strong className="text-[#1E3A8A]">{formData.practiceArea}</strong> and contact you to schedule your consultation.
              </p>
              <button
                onClick={handleClose}
                className="font-['Montserrat'] mt-3 px-6 py-3 bg-[#1E3A8A] hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-['Montserrat'] block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Full Name"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-['Montserrat'] block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(757) 000-0000"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:bg-white font-mono"
                  />
                </div>

                <div>
                  <label className="font-['Montserrat'] block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@email.com"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="font-['Montserrat'] block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Practice Area <span className="text-red-500">*</span>
                </label>
                <select
                  name="practiceArea"
                  value={formData.practiceArea}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-base text-slate-900 focus:outline-none focus:border-[#1E3A8A] focus:bg-white font-medium"
                >
                  <option value="Bankruptcy">Bankruptcy</option>
                  <option value="Criminal and Traffic Defense">Criminal and Traffic Defense</option>
                  <option value="Personal Injury">Personal Injury</option>
                  <option value="Civil Litigation">Civil Litigation</option>
                  <option value="Other">Other Legal Issue</option>
                </select>
              </div>

              <div>
                <label className="font-['Montserrat'] block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Matter Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your case or key questions..."
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1E3A8A] focus:bg-white"
                ></textarea>
              </div>

              <div className="text-xs text-slate-500 leading-relaxed bg-slate-50 p-3 border border-slate-200 rounded-lg">
                Communication does not establish an attorney-client relationship. All inquiries kept
                strictly confidential.
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="font-['Montserrat'] px-6 py-2.5 bg-[#1E3A8A] hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <Calendar className="w-3.5 h-3.5 text-amber-300" />
                  <span>Submit Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
