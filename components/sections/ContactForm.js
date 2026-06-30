'use client'
import React from "react";

const ContactForm = () => {
  return (
    <div className="lg:col-span-3">
      <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-slate-200">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-slate-900">Send an Inquiry</h3>
          <p className="text-slate-600 text-sm mt-2">
            Please fill out the form below. We aim to respond to all
            administrative inquiries within 2 working days.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-colors"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-colors"
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Subject
            </label>
            <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none bg-white transition-colors">
              <option>General Inquiry</option>
              <option>Admissions Question</option>
              <option>Document Verification</option>
              <option>Fee Structure</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-colors resize-none"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="button"
            className="bg-brand-accent hover:bg-[#c08d2d] text-white font-bold py-3 px-8 rounded-lg transition-colors shadow-md w-full sm:w-auto"
          >
            Submit Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
