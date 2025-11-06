import React from 'react';
import { Check, Server, BookOpen, Building2, Activity, Cloud } from 'lucide-react';

const features = [
  {
    title: 'Protocols',
    items: ['OAuth2/OIDC', 'SAML', 'SCIM'],
    icon: <Server size={18} className="text-cyan-500" />,
  },
  {
    title: 'Authorization',
    items: ['RBAC & policy engine', 'Granular permissions', 'Multi-tenant'],
    icon: <Building2 size={18} className="text-cyan-500" />,
  },
  {
    title: 'Security',
    items: ['Sessions & DPoP tokens', 'HTTPOnly cookies', 'Device-bound'],
    icon: <Activity size={18} className="text-cyan-500" />,
  },
  {
    title: 'Operations',
    items: ['Audit logs & telemetry', 'Self-host or Cloud', 'Great docs & SDKs'],
    icon: <BookOpen size={18} className="text-cyan-500" />,
  },
];

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    desc: 'For prototypes and small projects',
    features: ['OIDC login', 'Email/password + social', 'Up to 5k MAU'],
    cta: 'Start Free',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$199',
    desc: 'For growing SaaS and teams',
    features: ['SAML SSO', 'RBAC & policies', 'SCIM provisioning', '50k MAU'],
    cta: 'Try Growth',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'For advanced security & scale',
    features: ['Dedicated cloud or self-host', 'SLA & support', 'Audit & compliance'],
    cta: 'Contact Sales',
    highlight: false,
  },
];

export default function FeaturesPricing() {
  return (
    <section className="bg-white" id="features">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-semibold text-[#0C1F3F]">Feature Highlights</h2>
            <p className="mt-2 text-[#0C1F3F]/70 max-w-2xl">
              Standards-compliant protocols, robust authorization, secure sessions, and full observability—choose Cloud or self-hosted.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    {f.icon}
                    <h3 className="text-lg font-semibold text-[#0C1F3F]">{f.title}</h3>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    {f.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <Check size={16} className="text-cyan-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2" id="pricing">
            <div className="flex items-end justify-between">
              <h2 className="text-2xl font-semibold text-[#0C1F3F]">Pricing</h2>
              <a href="#" className="text-cyan-600 hover:text-cyan-500 text-sm font-medium inline-flex items-center gap-1">
                View full pricing <Cloud size={16} />
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {tiers.map((t) => (
                <div key={t.name} className={`rounded-2xl p-6 shadow-sm ring-1 ${t.highlight ? 'bg-[#0C1F3F] text-white ring-transparent' : 'bg-white ring-slate-200'}`}>
                  <h3 className="text-lg font-semibold">{t.name}</h3>
                  <div className="mt-2 text-3xl font-bold">{t.price}</div>
                  <p className={`mt-1 text-sm ${t.highlight ? 'text-white/80' : 'text-slate-600'}`}>{t.desc}</p>
                  <ul className={`mt-4 space-y-2 text-sm ${t.highlight ? 'text-white' : 'text-slate-700'}`}>
                    {t.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check size={16} className={t.highlight ? 'text-cyan-300' : 'text-cyan-600'} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`mt-6 w-full rounded-xl px-4 py-2 font-medium transition ${t.highlight ? 'bg-cyan-400 text-[#0C1F3F] hover:bg-cyan-300' : 'bg-[#0C1F3F] text-white hover:bg-[#0b1a36]'}`}>
                    {t.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16" id="social-proof">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-[#f8fbff] p-6 ring-1 ring-slate-200">
              <p className="text-sm text-slate-600">“Sakreta made it trivial to add secure auth to our SaaS. The RBAC model fits our multi-tenant architecture perfectly.”</p>
              <p className="mt-3 text-sm font-medium text-[#0C1F3F]">CTO, SaaS Startup</p>
            </div>
            <div className="rounded-2xl bg-[#f8fbff] p-6 ring-1 ring-slate-200">
              <p className="text-sm text-slate-600">“From OIDC to SAML and SCIM, the standards coverage is excellent. Great developer experience.”</p>
              <p className="mt-3 text-sm font-medium text-[#0C1F3F]">Lead Engineer, Enterprise</p>
            </div>
            <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 flex items-center justify-center">
              <div className="h-10 w-full rounded-xl bg-slate-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
