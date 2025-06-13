
import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfUseEn = () => {
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
          <h1 className="text-3xl font-bold text-white mb-8">Terms of Use</h1>
          
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using Copyfy, you accept and agree to be bound by the terms and 
                provision of this agreement. If you do not agree to abide by the above, please do 
                not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                2. Use License
              </h2>
              <p>
                Permission is granted to temporarily use Copyfy for personal, non-commercial transitory 
                viewing only. This is the grant of a license, not a transfer of title, and under this 
                license you may not modify or copy the materials.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                3. Disclaimer
              </h2>
              <p>
                The materials on Copyfy are provided on an 'as is' basis. Copyfy makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties including 
                without limitation, implied warranties or conditions of merchantability, fitness for 
                a particular purpose, or non-infringement of intellectual property or other violation 
                of rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                4. Limitations
              </h2>
              <p>
                In no event shall Copyfy or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the materials on Copyfy's website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                5. Accuracy of Materials
              </h2>
              <p>
                The materials appearing on Copyfy could include technical, typographical, or 
                photographic errors. Copyfy does not warrant that any of the materials on its 
                website are accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                6. Links
              </h2>
              <p>
                Copyfy has not reviewed all of the sites linked to our website and is not responsible 
                for the contents of any such linked site. The inclusion of any link does not imply 
                endorsement by Copyfy of the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                7. Modifications
              </h2>
              <p>
                Copyfy may revise these terms of service for its website at any time without notice. 
                By using this website, you are agreeing to be bound by the then current version of 
                these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                8. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws 
                of California, United States, and you irrevocably submit to the exclusive jurisdiction 
                of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-yellow-500 mb-3">
                9. Contact Information
              </h2>
              <p>
                If you have any questions about these Terms of Use, please contact us at:
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

export default TermsOfUseEn;
