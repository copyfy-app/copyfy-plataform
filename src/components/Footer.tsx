import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
const Footer = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [isOpen, setIsOpen] = React.useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const mailtoLink = `mailto:inspiranegociosonline@gmail.com?subject=Contact from Copyfy&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

    // Open mail client
    window.open(mailtoLink, "_blank");

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Close modal
    setIsOpen(false);

    // Show success message
    toast.success("Opening your email client...");
  };
  return <footer className="bg-black border-t border-yellow-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Get in Touch</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-yellow-500 mr-2" />
                <a href="mailto:inspiranegociosonline@gmail.com" className="hover:text-yellow-500 transition-colors">
                  inspiranegociosonline@gmail.com
                </a>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2 text-yellow-500">Business Address</h4>
                <div className="text-sm text-gray-300">
                  <p className="text-white">Copyfy LLC</p>
                  <p className="text-white">548 Market St, PMB 62345</p>
                  <p className="text-white">San Francisco, CA 94104-5401</p>
                  <p className="text-white">United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Legal</h3>
            <div className="space-y-2">
              <Link to="/privacy-policy-en" className="block text-gray-300 hover:text-yellow-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use-en" className="block text-gray-300 hover:text-yellow-500 transition-colors">
                Terms of Use
              </Link>
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <button className="block text-gray-300 hover:text-yellow-500 transition-colors text-left">
                    Contact
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-zinc-900 border-yellow-500/30 text-white">
                  <DialogHeader>
                    <DialogTitle className="text-yellow-500">Contact Us</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required className="bg-zinc-800 border-yellow-500/30 text-white" />
                    <Input name="email" type="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required className="bg-zinc-800 border-yellow-500/30 text-white" />
                    <Textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required className="bg-zinc-800 border-yellow-500/30 text-white min-h-20" />
                    <Button type="submit" className="w-full bg-yellow-500 text-black hover:bg-yellow-600">
                      Send Message
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Empty column for spacing */}
          <div></div>
        </div>

        {/* Copyright */}
        <div className="border-t border-yellow-500/20 mt-8 pt-6 text-center">
          <p className="text-white">
            © 2025 Copyfy LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;