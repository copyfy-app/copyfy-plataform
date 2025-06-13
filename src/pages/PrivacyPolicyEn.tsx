
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicyEn = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-yellow-500/20 py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => navigate(-1)} 
              variant="outline" 
              size="sm" 
              className="border-yellow-500/50 text-yellow-500 hover:bg-yellow-500 hover:text-black"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <div className="text-2xl font-bold text-yellow-500">
              COPY<span className="text-white">FY</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us. This may include your name, email address, and any 
                content you create using our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send you technical notices and support messages, and communicate 
                with you about products, services, and promotional offers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                3. Information Sharing
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share information in 
                response to legal requests or to protect our rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                4. Data Security
              </h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                5. Cookies and Tracking
              </h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our service and 
                hold certain information. You can instruct your browser to refuse all cookies or to 
                indicate when a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                6. Your Rights
              </h2>
              <p>
                You have the right to access, update, or delete your personal information. You may also 
                have the right to restrict or object to certain processing of your data. Contact us to 
                exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                7. Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes 
                by posting the new privacy policy on this page and updating the "last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about this privacy policy, please contact us at:
                <br />
                <a 
                  href="mailto:inspiranegociosonline@gmail.com" 
                  className="text-yellow-500 hover:text-yellow-400"
                >
                  inspiranegociosonline@gmail.com
                </a>
              </p>
            </section>

            <div className="mt-8 pt-6 border-t border-yellow-500/20">
              <p className="text-sm text-gray-400">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyEn;
