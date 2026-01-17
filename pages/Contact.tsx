import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { IMAGES } from '../constants';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const [form, setForm] = useState({
    name: '',
    email: '',
    details: '',
    website: '' // honeypot for bots
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (form.website) return; // bot protection

    setStatus('submitting');

    try {
      const payload = {
        access_key: "30b1f025-d07a-4132-ac6a-31fe88fe6b32",
        subject: "New DrewImages Studio Inquiry",
        from_name: "DrewImages Studio",
        name: form.name,
        email: form.email,
        message: form.details
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', details: '', website: '' });
      } else {
        setStatus('error');
        setErrorMsg("Something went wrong. Please try again or email hello@drewbordeaux.com");
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen">
      <Section className="py-20 md:py-32 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <div className="flex flex-col h-full">
            <h1 className="font-serif text-6xl md:text-7xl mb-12 text-burgundy">Inquire</h1>

            <div className="mb-16">
              <p className="text-xl font-serif italic text-ink/80 mb-8 max-w-md">
                "New projects are considered by inquiry. Please include project type, timeline, and intended use."
              </p>
              <a
                href="mailto:hello@drewbordeaux.com"
                className="text-sm font-bold uppercase tracking-widest border-b border-ink/30 pb-1 hover:text-teal hover:border-teal transition-colors"
              >
                hello@drewbordeaux.com
              </a>
            </div>

            <div className="mt-auto hidden lg:block aspect-[4/3] bg-gray-100 overflow-hidden">
              <img
                src={IMAGES.contactHero}
                alt="Studio Texture"
                className="w-full h-full object-cover grayscale contrast-[1.1]"
              />
            </div>
          </div>

          <div className="lg:pt-4">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-paper border border-teal/20">
                <h3 className="font-serif text-3xl text-teal mb-4">Received.</h3>
                <p className="text-ink/60">We&apos;ll be in touch shortly.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-xs uppercase underline mt-6 text-ink/40 hover:text-ink font-bold"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-12">

                <input
                  id="website"
                  value={form.website}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="group">
                  <label className="block text-xs uppercase tracking-widest mb-3 text-ink/40">Name</label>
                  <input
                    required
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-ink/20 py-4 text-lg"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs uppercase tracking-widest mb-3 text-ink/40">Email</label>
                  <input
                    required
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-ink/20 py-4 text-lg"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="group">
                  <label className="block text-xs uppercase tracking-widest mb-3 text-ink/40">Project Details</label>
                  <textarea
                    required
                    id="details"
                    rows={4}
                    value={form.details}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-ink/20 py-4 text-lg resize-none"
                    placeholder="Type, timeline, goals..."
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-600">{errorMsg}</p>
                )}

                <div className="pt-8">
                  <Button className="w-full md:w-auto min-w-[200px]" variant="primary">
                    {status === 'submitting' ? 'Sending…' : 'Request Session'}
                  </Button>
                </div>

              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
