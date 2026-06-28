
import React, { useState } from 'react';

// Optional: set this to a Formspree endpoint (https://formspree.io) to capture
// structured submissions in a dashboard instead of relying on the mailto
// fallback below. Leave blank to keep the zero-setup mailto behavior used
// elsewhere on this site (see PublicationsSection's "Start Your Journey").
const FORM_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = '9ad87ce9-4376-48d6-9870-ef26d557d078';
const CONTACT_EMAIL = 'hello@elvonlabs.com';

const INTEREST_AREAS = [
  'Artificial Intelligence',
  'Healthcare',
  'Telecommunications',
  'Quantum Computing',
  'Foundational CS',
  'Robotics & Mechanics',
];

const buildMailtoBody = (form, areas) => {
  const lines = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Role: ${form.role}`,
    `Areas of interest: ${areas.join(', ') || '—'}`,
    `Wants to be involved as: ${form.involvement}`,
    `Links: ${form.links || '—'}`,
    '',
    'Message:',
    form.message || '—',
  ];
  return lines.join('\n');
};

const JoinSection = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: '',
    involvement: 'Research collaborator',
    links: '',
    message: '',
  });
  const [areas, setAreas] = useState([]);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const toggleArea = (area) => {
    setAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(e.target),
        });
        setStatus(res.ok ? 'success' : 'error');
      } catch (err) {
        setStatus('error');
      }
      return;
    }

    // Zero-setup fallback: open a prefilled email, same pattern used by the
    // "Start Your Journey" CTA in PublicationsSection.
    const subject = encodeURIComponent('Interest in Elvon Labs');
    const body = encodeURIComponent(buildMailtoBody(form, areas));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <section id="join" className="py-24 bg-gray-900/50 scroll-mt-20">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Thanks — you're on the list.
          </h2>
          <p className="text-gray-400">
            We'll be in touch as Elvon Labs takes shape.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="py-24 bg-gray-900/50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Join the Research
          </h2>
          <p className="text-lg text-gray-400">
            We're looking for career researchers as well as industry
            professionals who want to bring real-world experience into
            research — no formal research background required. Across AI,
            Healthcare, Telecommunications, Quantum Computing,
            and Foundational CS, your day-to-day expertise is often the
            fastest bridge into a research question worth pursuing. Tell us
            a bit about you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-slate-800/50 border border-slate-700 rounded-lg p-8 space-y-6"
        >
          <input type="hidden" name="access_key" value={ACCESS_KEY} />
          <input type="hidden" name="subject" value="New interest submission - Elvon Labs" />
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full name
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-900/70 border border-slate-700 text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-900/70 border border-slate-700 text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="jane@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Areas of interest
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {INTEREST_AREAS.map((area) => (
                <label
                  key={area}
                  className={`flex items-center gap-3 rounded-lg border px-4 py-2.5 cursor-pointer transition-colors ${
                    areas.includes(area)
                      ? 'border-blue-400 bg-blue-400/10'
                      : 'border-slate-700 bg-slate-900/70'
                  }`}
                >
                  <input
                    type="checkbox"
                    name="interests"
                    value={area}
                    checked={areas.includes(area)}
                    onChange={() => toggleArea(area)}
                    className="accent-blue-400"
                  />
                  <span className="text-sm text-gray-200">{area}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Current role
              </label>
              <select
                name="role"
                required
                value={form.role}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-900/70 border border-slate-700 text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="" disabled>Select one</option>
                <option>PhD / Graduate student</option>
                <option>Academic researcher / Professor</option>
                <option>Industry researcher / Engineer</option>
                <option>Independent researcher</option>
                <option>Student (undergrad)</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                How would you like to be involved?
              </label>
              <select
                name="involvement"
                value={form.involvement}
                onChange={handleChange}
                className="w-full rounded-lg bg-slate-900/70 border border-slate-700 text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option>Research collaborator</option>
                <option>Industry contributor (alongside my job)</option>
                <option>Advisor</option>
                <option>Just following along</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              LinkedIn / GitHub / portfolio (optional)
            </label>
            <input
              type="url"
              name="links"
              value={form.links}
              onChange={handleChange}
              className="w-full rounded-lg bg-slate-900/70 border border-slate-700 text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="https://linkedin.com/in/..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Anything else? (optional)
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-lg bg-slate-900/70 border border-slate-700 text-white px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Background, papers, projects, what you'd want to work on..."
            />
          </div>

          {status === 'error' && (
            <p className="text-red-400 text-sm">
              Something went wrong submitting the form. Please try again.
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 w-full disabled:opacity-60"
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit interest'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinSection;
