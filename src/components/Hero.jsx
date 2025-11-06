import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Lock, Shield } from 'lucide-react';

const CodeSnippet = () => {
  const code = `// OAuth2/OIDC with Sakreta\nimport { Sakreta } from '@sakreta/js';\n\nconst sakreta = new Sakreta({\n  clientId: 'YOUR_CLIENT_ID',\n  redirectUri: 'https://yourapp.com/callback',\n  issuer: 'https://auth.sakreta.com',\n});\n\nawait sakreta.login({\n  provider: 'oidc',\n  scopes: ['openid', 'profile', 'email'],\n});`;

  return (
    <pre className="mt-8 rounded-2xl bg-[#0a1a36]/70 ring-1 ring-white/10 backdrop-blur p-6 text-[12.5px] leading-relaxed text-cyan-50 overflow-auto shadow-xl">
      <code>
        {code}
      </code>
    </pre>
  );
};

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0C1F3F] text-white">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-cyan-300/10" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-24 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pt-28 lg:pb-28">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm ring-1 ring-white/20">
            <Shield size={16} className="text-cyan-300" />
            <span className="text-cyan-100">Enterprise-grade IAM</span>
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Secure Authentication. Easy Integration.
          </h1>
          <p className="mt-5 max-w-xl text-white/80 text-lg">
            Sakreta is a modern Identity & Access Management platform that brings OAuth2/OIDC, SAML, and RBAC together—so you can ship secure auth fast without compromising on control.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-3 font-medium text-[#0C1F3F] shadow-lg shadow-cyan-400/30 hover:bg-cyan-300 transition">
              Start Free
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/20 hover:bg-white/15 transition">
              Request Demo
            </a>
            <div className="ml-2 hidden sm:flex items-center text-white/70 text-sm">
              <Lock size={16} className="mr-2 text-cyan-300" />
              Device-bound sessions & DPoP
            </div>
          </div>

          <CodeSnippet />
        </div>

        <div className="relative mt-14 h-[420px] w-full rounded-2xl bg-gradient-to-br from-[#08142a] to-[#0a1a36] ring-1 ring-white/10 shadow-2xl lg:mt-0 lg:h-[560px]">
          <Spline
            scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-500/10 via-transparent to-cyan-300/10" />
        </div>
      </div>
    </section>
  );
}
