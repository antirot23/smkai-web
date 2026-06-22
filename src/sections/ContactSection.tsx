
import { RotlessText } from '../components/ui/RotlessText';
import { Button } from '../components/ui/Button';
import { COMPANY } from '@/constants';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="bg-primary-light/50 rounded-[40px] p-8 md:p-16 lg:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-default/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <RotlessText variant="boom" className="mb-6">Let's build the future of human technology.</RotlessText>
              <RotlessText variant="normal" className="mb-10 text-text-secondary max-w-md">
                Whether you're an investor, a potential partner, or just someone who believes in {COMPANY.name}'s mission, we'd love to hear from you.
              </RotlessText>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-default shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <RotlessText variant="chat" className="text-text-tertiary mb-1">Email us</RotlessText>
                    <RotlessText variant="label">hello@smkaiventures.com</RotlessText>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full bg-bg-primary border border-border-default rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent transition-all"
                      placeholder="Chai"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full bg-bg-primary border border-border-default rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent transition-all"
                      placeholder="Addict"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-bg-primary border border-border-default rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent transition-all"
                    placeholder="d3ad@antirot.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-bg-primary border border-border-default rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-default focus:border-transparent transition-all resize-none"
                    placeholder="Spill the tea..."
                  />
                </div>
                
                <Button className="w-full justify-center">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
