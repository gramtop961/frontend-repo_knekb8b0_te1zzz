import React from 'react';
import { ShieldCheck, Settings, Boxes, Code2 } from 'lucide-react';

const propsData = [
  {
    title: 'OAuth2/OIDC and SAML',
    desc: 'Standards-first authentication with OAuth2/OIDC and enterprise SAML support for SSO across your stack.',
    icon: <ShieldCheck className="text-cyan-400" size={22} />,
  },
  {
    title: 'Multi-tenant RBAC',
    desc: 'Granular roles and permissions for organizations, workspaces, and teams with policy-based access control.',
    icon: <Settings className="text-cyan-400" size={22} />,
  },
  {
    title: 'Secure-by-design',
    desc: 'Device-bound sessions, DPoP-bound tokens, and HTTPOnly cookies keep accounts safe by default.',
    icon: <Boxes className="text-cyan-400" size={22} />,
  },
  {
    title: 'Developer-friendly SDKs',
    desc: 'Drop-in SDKs for React and Go with clean APIs and great DX. Ship auth in hours, not weeks.',
    icon: <Code2 className="text-cyan-400" size={22} />,
  },
];

export default function ValueProps() {
  return (
    <section className="bg-white" id="value-props">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-[#0C1F3F]">Built for modern teams</h2>
          <p className="mt-2 text-[#0C1F3F]/70 max-w-2xl">
            Everything you need to authenticate users, authorize access, and scale securely.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {propsData.map((p) => (
            <div key={p.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-cyan-50 p-3">
                {p.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#0C1F3F]">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
