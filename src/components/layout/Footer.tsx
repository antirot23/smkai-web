import { RotlessText } from '../ui/RotlessText';
import { COMPANY } from '@/constants';
import logo from '@/assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-bg-dark text-text-inverse py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl border border-white/10 flex items-center justify-center p-2">
                <img src={logo} alt="SMKAI Logo" className="w-full h-full object-contain" />
              </div>
              <RotlessText variant="title" className="text-white">{COMPANY.name}</RotlessText>
            </div>
            <RotlessText variant="chat" className="text-text-tertiary max-w-sm">
              {COMPANY.vision}
            </RotlessText>
          </div>
          
          <div>
            <RotlessText variant="title" className="text-white mb-6">Product</RotlessText>
            <ul className="space-y-4">
              <li><a href="#product" className="text-text-tertiary hover:text-primary-default transition-colors">Features</a></li>
              <li><a href="#vision" className="text-text-tertiary hover:text-primary-default transition-colors">Philosophy</a></li>
              <li><a href="#timeline" className="text-text-tertiary hover:text-primary-default transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <RotlessText variant="title" className="text-white mb-6">Company</RotlessText>
            <ul className="space-y-4">
              <li><a href="#mission" className="text-text-tertiary hover:text-primary-default transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-text-tertiary hover:text-primary-default transition-colors">Contact</a></li>
              <li><a href="#" className="text-text-tertiary hover:text-primary-default transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <RotlessText variant="chat" className="text-text-tertiary text-sm">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </RotlessText>

        </div>
      </div>
    </footer>
  );
};
