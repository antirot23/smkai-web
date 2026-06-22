import { RotlessText } from '../ui/RotlessText';
import { COMPANY } from '@/constants';
import logo from '@/assets/logo.png';

const INSTAGRAM_URL = "https://www.instagram.com/k_shastri03/";

export const Footer = () => {
  return (
    <footer className="bg-bg-dark text-text-inverse py-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-16">
          
          <div className="col-span-1 md:col-span-4 lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-1 shadow-xl shadow-black/20">
                <img src={logo} alt="SMKAI Logo" className="w-full h-full object-contain filter drop-shadow-md" />
              </div>
              <div>
                <RotlessText variant="title" className="text-white text-lg leading-tight">{COMPANY.name}</RotlessText>
              </div>
            </div>
            <p className="text-text-tertiary max-w-sm text-[15px] leading-relaxed mb-6">
              Building digital products that encourage thoughtful human interaction and replace passive scrolling with meaningful thinking.
            </p>
            <a href="mailto:Antirot12@gmail.com" className="inline-flex items-center gap-2 text-primary-default hover:text-white transition-colors text-sm font-medium">
              Antirot12@gmail.com
            </a>
          </div>
          
          <div className="col-span-1 md:col-span-3 lg:col-span-2 md:col-start-6">
            <RotlessText variant="label" className="text-white/40 mb-6 uppercase tracking-widest text-xs font-bold">Antirot</RotlessText>
            <ul className="space-y-4">
              <li><a href="#mission" className="text-text-tertiary hover:text-primary-default transition-colors text-[15px]">The Problem</a></li>
              <li><a href="#product" className="text-text-tertiary hover:text-primary-default transition-colors text-[15px]">How it Works</a></li>
              <li><a href="#features" className="text-text-tertiary hover:text-primary-default transition-colors text-[15px]">Chai Tapri</a></li>
              <li><a href="#vision" className="text-text-tertiary hover:text-primary-default transition-colors text-[15px]">Philosophy</a></li>
            </ul>
          </div>
          
          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <RotlessText variant="label" className="text-white/40 mb-6 uppercase tracking-widest text-xs font-bold">Company</RotlessText>
            <ul className="space-y-4">
              <li><a href="#built-by" className="text-text-tertiary hover:text-primary-default transition-colors text-[15px]">About Us</a></li>
              <li><a href="#roadmap" className="text-text-tertiary hover:text-primary-default transition-colors text-[15px]">Roadmap</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-text-tertiary hover:text-primary-default transition-colors text-[15px]">Join Beta</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <RotlessText variant="label" className="text-white/40 mb-6 uppercase tracking-widest text-xs font-bold">Legal</RotlessText>
            <ul className="space-y-4">
              <li><a href="#" className="text-text-tertiary hover:text-white transition-colors text-[15px]">Privacy Policy</a></li>
              <li><a href="#" className="text-text-tertiary hover:text-white transition-colors text-[15px]">Terms of Service</a></li>
            </ul>
            <div className="mt-8">
              <span className="text-xs text-white/30 tracking-widest uppercase mb-2 block">Incorporated</span>
              <span className="text-sm text-text-tertiary">{COMPANY.incorporated}</span>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <RotlessText variant="chat" className="text-white/40 text-sm">
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </RotlessText>
          <div className="flex gap-2 items-center text-white/40 text-sm">
            <span>Built with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
