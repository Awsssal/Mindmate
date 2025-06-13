import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const contactInfo = [{
    icon: Mail,
    title: "Email Support",
    info: "support@mindmate.ai",
    description: "We typically respond within 24 hours"
  }, {
    icon: Phone,
    title: "Crisis Hotline",
    info: "1-800-MINDMATE",
    description: "24/7 emergency mental health support"
  }, {
    icon: MapPin,
    title: "Office Location",
    info: "San Francisco, CA",
    description: "Visit us by appointment only"
  }, {
    icon: MessageCircle,
    title: "Live Chat",
    info: "Available in app",
    description: "Instant support through our AI assistant"
  }];
  return <div className="min-h-screen bg-mindmate-warm-white">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-mindmate-text-dark mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-mindmate-text-light max-w-3xl mx-auto">
              We're here to help with your mental wellness journey. Reach out to us anytime 
              for support, questions, or feedback.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="gentle-shadow bg-[#ededed]">
              <CardHeader>
                <CardTitle className="text-2xl text-mindmate-text-dark">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="">Full Name</Label>
                      <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required className="bg-[#fffefe]/0" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="your@email.com" value={formData.email} onChange={handleChange} required className="bg-[#fffbfb]/0" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can we help?" value={formData.subject} onChange={handleChange} required className="bg-white/0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="bg-white/0">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell us more about your inquiry..." rows={5} value={formData.message} onChange={handleChange} required className="bg-white" />
                  </div>
                  <Button type="submit" className="w-full bg-black hover:bg-gray-800 text-white">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => <Card key={index} className="gentle-shadow">
                  <CardContent className="p-6 bg-[#efefef]">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-mindmate-green rounded-full flex items-center justify-center">
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-mindmate-text-dark mb-1">{contact.title}</h3>
                        <p className="text-lg font-medium text-mindmate-green mb-1">{contact.info}</p>
                        <p className="text-sm text-mindmate-text-light">{contact.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-mindmate-text-dark mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-mindmate-text-dark mb-2">Is MindMate AI a replacement for therapy?</h3>
                <p className="text-mindmate-text-light">No, MindMate AI is designed to complement, not replace, professional mental health care. Always consult with a licensed therapist for serious mental health concerns.</p>
              </div>
              <div>
                <h3 className="font-semibold text-mindmate-text-dark mb-2">How secure is my data?</h3>
                <p className="text-mindmate-text-light">We use end-to-end encryption and are HIPAA compliant. Your conversations and personal data are never shared with third parties.</p>
              </div>
              <div>
                <h3 className="font-semibold text-mindmate-text-dark mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-mindmate-text-light">Yes, you can cancel your subscription at any time through your account settings. You'll continue to have access until the end of your billing period.</p>
              </div>
              <div>
                <h3 className="font-semibold text-mindmate-text-dark mb-2">What if I'm in crisis?</h3>
                <p className="text-mindmate-text-light">If you're in immediate danger, please contact emergency services. MindMate AI can detect crisis keywords and will provide emergency resources when needed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>;
};
export default Contact;