import { RotlessText } from '../ui/RotlessText';
import { COMPANY } from '@/constants';
import logo from '@/assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-bg-dark text-text-inverse py-16 border-t border-white/10">
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
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-tertiary hover:bg-primary-default hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-tertiary hover:bg-primary-default hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
