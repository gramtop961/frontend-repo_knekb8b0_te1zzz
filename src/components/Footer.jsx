import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0C1F3F] text-white" id="contact">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-semibold">Sakreta</div>
            <p className="mt-2 text-white/70 max-w-sm">Secure Authentication. Easy Integration.</p>
          </div>
          <div>
            <div className="font-medium">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#social-proof" className="hover:text-white">Customers</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Docs</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Quickstart</a></li>
              <li><a href="#" className="hover:text-white">API Reference</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Legal</div>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Security</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} Sakreta. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
