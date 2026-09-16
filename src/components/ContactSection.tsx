// src/components/ContactSection.tsx
"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ContactForm {
  name: string;
  service: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialForm: ContactForm = {
  name: '',
  service: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
};

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const update = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setSubmitted(false);
    setError('');
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const required: (keyof ContactForm)[] = ['name', 'service', 'email', 'subject', 'message'];
    
    // Check required fields
    if (required.some((key) => !form[key].trim())) {
      setError('Please complete all required fields.');
      return;
    }
    
    // Validate email
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    // Success
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section className="wq-team-contact" id="wq-contact">
      <div className="wq-team-container wq-contact-grid">
        {/* Left - Content */}
        <div className="wq-contact-copy">
          <span className="wq-eyebrow">START A CONVERSATION</span>
          <h2>
            Let's Talk About <span>Your Idea</span>
          </h2>
          <p>
            Tell us what you're building and we'll help you find the right people, 
            skills and delivery model.
          </p>
          <div className="wq-contact-details">
            <div>
              <small>HR / Career</small>
              <a href="mailto:hr@witqualis.com">hr@witqualis.com</a>
            </div>
            <div>
              <small>Sales Inquiries</small>
              <a href="mailto:info@witqualis.com">info@witqualis.com</a>
              <a href="tel:+919289633637">+91 9289633637</a>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <form className="wq-contact-form" onSubmit={submit} noValidate>
          <div className="wq-form-row">
            <label>
              Name *
              <input
                name="name"
                value={form.name}
                onChange={update}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Service *
              <select
                name="service"
                value={form.service}
                onChange={update}
                required
              >
                <option value="">Select service</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="Staff Augmentation">Staff Augmentation</option>
                <option value="Product Design">Product Design</option>
                <option value="Business & Technical Consulting">
                  Business & Technical Consulting
                </option>
              </select>
            </label>
          </div>

          <div className="wq-form-row">
            <label>
              Email *
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={update}
                placeholder="you@example.com"
                required
              />
            </label>
            <label>
              Phone
              <input
                name="phone"
                value={form.phone}
                onChange={update}
                placeholder="+91"
              />
            </label>
          </div>

          <label>
            Subject *
            <input
              name="subject"
              value={form.subject}
              onChange={update}
              placeholder="How can we help?"
              required
            />
          </label>

          <label>
            Message *
            <textarea
              name="message"
              value={form.message}
              onChange={update}
              rows={5}
              placeholder="Tell us about your project..."
              required
            />
          </label>

          {error && (
            <p className="wq-form-message wq-form-error" role="alert">
              {error}
            </p>
          )}
          
          {submitted && (
            <p className="wq-form-message wq-form-success" role="status">
              Thanks! Your message has been submitted successfully.
            </p>
          )}

          <button className="wq-primary-btn" type="submit">
            Send Message <span>↗</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;