'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      stack: (form.elements.namedItem('stack') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || 'Something went wrong.');
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-teal/30 bg-teal/5 p-8 text-center">
        <h3 className="font-display text-xl font-bold text-teal-dark">Message received</h3>
        <p className="mt-2 text-sm text-ink/60">
          We reply within one business day with next steps and, where relevant, a shortlist timeline.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-ink/10 bg-white p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide text-ink/50">Name</label>
          <input
            id="name"
            name="name"
            required
            type="text"
            className="mt-2 w-full rounded-lg border border-ink/15 px-4 py-3 text-sm outline-none focus:border-teal"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-ink/50">Work email</label>
          <input
            id="email"
            name="email"
            required
            type="email"
            className="mt-2 w-full rounded-lg border border-ink/15 px-4 py-3 text-sm outline-none focus:border-teal"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="stack" className="text-xs font-semibold uppercase tracking-wide text-ink/50">Stack / role needed</label>
        <input
          id="stack"
          name="stack"
          type="text"
          className="mt-2 w-full rounded-lg border border-ink/15 px-4 py-3 text-sm outline-none focus:border-teal"
          placeholder="e.g. 2 React developers, 1 DevOps engineer"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-ink/50">Project details</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-2 w-full rounded-lg border border-ink/15 px-4 py-3 text-sm outline-none focus:border-teal"
          placeholder="Timeline, team size, anything relevant"
        />
      </div>

      {status === 'error' && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{errorMsg}</p>
      )}

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center disabled:opacity-60 sm:w-auto">
        {status === 'sending' ? 'Sending\u2026' : 'Send message'}
      </button>
    </form>
  );
}
