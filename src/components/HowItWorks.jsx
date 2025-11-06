import React from 'react';
import { Plug, Shield, TrendingUp } from 'lucide-react';

const steps = [
  {
    title: 'Integrate',
    desc: 'Add Sakreta via SDK or standard protocols (OIDC, SAML) and start authenticating users in minutes.',
    icon: <Plug size={22} className="text-cyan-500" />,
  },
  {
    title: 'Protect',
    desc: 'Enforce RBAC, policies, and device-bound sessions with DPoP-bound tokens and secure cookies.',
    icon: <Shield size={22} className="text-cyan-500" />,
  },
  {
    title: 'Scale',
    desc: 'Multi-tenant architecture, SCIM provisioning, and observability to grow from startup to enterprise.',
    icon: <TrendingUp size={22} className="text-cyan-500" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#f8fbff]" id="how-it-works">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-[#0C1F3F]">How Sakreta Works</h2>
          <p className="mt-2 text-[#0C1F3F]/70">
            Integrate once, protect every request, and scale confidently.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-cyan-50 p-3">
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#0C1F3F]">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
