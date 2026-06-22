import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage } from './pages/HomePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { CommunityGuidelinesPage } from './pages/CommunityGuidelinesPage';
import { ScrollToTop } from './components/ScrollToTop';
import { BackToTopButton } from './components/ui/BackToTopButton';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/guidelines" element={<CommunityGuidelinesPage />} />
        </Routes>
        <BackToTopButton />
      </Router>
    </HelmetProvider>
  );
}

export default App;
