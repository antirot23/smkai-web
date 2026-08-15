import React from 'react';
import { Helmet } from 'react-helmet-async';

export const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-16 sm:py-24 px-6 sm:px-8 lg:px-12 selection:bg-primary-light selection:text-primary-dark">
      <Helmet>
        <title>Terms &amp; Conditions - AntiRot</title>
      </Helmet>

      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-text-secondary text-lg">
            Last Updated: [21st June 2026]
          </p>
          <hr className="mt-10 border-border-default" />
        </header>

        {/* Content */}
        <main className="space-y-12 text-[17px] leading-relaxed text-text-secondary font-sans">
          
          <div className="space-y-5">
            <p>
              These Terms &amp; Conditions ("Terms") govern the use of AntiRot, its mobile application, website, services, features, communities, creator tools, artificial intelligence services, monetization programs, and related offerings operated by SMKAI Ventures Private Limited ("SMKAI", "AntiRot", "we", "our", or "us").
            </p>
            <p>
              By accessing or using AntiRot, you agree to be bound by these Terms.
            </p>
            <p>
              If you do not agree with these Terms, you must discontinue use of the platform.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">1. ELIGIBILITY</h2>
            <p>You must be at least 13 years of age to use AntiRot.</p>
            <p>Where local laws require a higher minimum age, those laws shall apply.</p>
            <p>By using AntiRot, you represent that:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>You are legally capable of entering into binding agreements.</li>
              <li>Information provided by you is accurate.</li>
              <li>You will comply with applicable laws.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">2. ACCOUNT REGISTRATION</h2>
            <p>To access certain features, users may be required to create an account.</p>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Maintaining account security</li>
              <li>Keeping login credentials confidential</li>
              <li>Activities occurring under your account</li>
            </ul>
            <p>AntiRot reserves the right to suspend or terminate accounts suspected of unauthorized use.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">3. PLATFORM PURPOSE</h2>
            <p>AntiRot is a structured discussion and creator ecosystem designed to encourage meaningful engagement, critical thinking, creativity, collaboration, and constructive conversations.</p>
            <p>AntiRot is not intended to promote misinformation, harassment, illegal activities, or harmful conduct.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">4. USER CONTENT</h2>
            <p>Users may upload, create, submit, or publish:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Sip videos</li>
              <li>Community discussions</li>
              <li>Comments</li>
              <li>Images</li>
              <li>Debate participation</li>
              <li>Storytelling submissions</li>
              <li>Brew &amp; Build responses</li>
              <li>Other content permitted by the platform</li>
            </ul>
            <p>Users remain responsible for the content they create and publish.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">5. CONTENT OWNERSHIP</h2>
            <p>Users retain ownership of content they create.</p>
            <p>However, by uploading content to AntiRot, users grant AntiRot a worldwide, non-exclusive, royalty-free license to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Host</li>
              <li>Display</li>
              <li>Distribute</li>
              <li>Store</li>
              <li>Reproduce</li>
              <li>Promote</li>
              <li>Recommend</li>
            </ul>
            <p>such content solely for operating, improving, marketing, and maintaining the platform.</p>
            <p>This license terminates when content is deleted except where retention is required by law or technical necessity.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">6. SIP CONTENT RULES</h2>
            <p>Sip is AntiRot's structured short-form opinion feature.</p>
            <p>All Sip uploads must:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Be linked to a valid AntiRot question.</li>
              <li>Follow Community Guidelines.</li>
              <li>Comply with applicable laws.</li>
              <li>Respect intellectual property rights.</li>
            </ul>
            <p>AntiRot may remove, restrict, or refuse publication of any Sip that violates platform policies.</p>
            <p>AntiRot reserves the right to modify question formats and participation rules at any time.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">7. CHAI TAPRI COMMUNITIES</h2>
            <p>Users may create or join Chai Tapri communities.</p>
            <p>Community owners and administrators are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Managing members</li>
              <li>Enforcing community rules</li>
              <li>Moderating discussions</li>
            </ul>
            <p>AntiRot reserves the right to intervene where safety, legal compliance, or platform integrity requires action.</p>
            <p>AntiRot may suspend or remove communities violating platform policies.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">8. ANONYMOUS DEBATE FEATURE</h2>
            <p>AntiRot may permit anonymous participation in designated debate features.</p>
            <p>Anonymous identities are intended only for platform interactions.</p>
            <p>AntiRot may internally maintain records linking anonymous identities to user accounts for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Safety</li>
              <li>Moderation</li>
              <li>Legal compliance</li>
              <li>Fraud prevention</li>
              <li>Investigation purposes</li>
            </ul>
            <p>Users may not use anonymity to evade platform rules.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">9. BREW &amp; BUILD, STORYTELLING &amp; COLLABORATIVE FEATURES</h2>
            <p>Collaborative content created through:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Storytelling</li>
              <li>Brew &amp; Build</li>
              <li>Community challenges</li>
              <li>Team activities</li>
            </ul>
            <p>may contain contributions from multiple users.</p>
            <p>AntiRot may display contributor information, usernames, badges, scores, rankings, and participation records associated with such content.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">10. PROHIBITED CONDUCT</h2>
            <p>Users shall not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Violate laws</li>
              <li>Harass others</li>
              <li>Engage in hate speech</li>
              <li>Publish terrorist or extremist content</li>
              <li>Share explicit sexual content</li>
              <li>Threaten individuals</li>
              <li>Promote violence</li>
              <li>Impersonate another person</li>
              <li>Manipulate platform systems</li>
              <li>Abuse creator payment systems</li>
              <li>Artificially inflate engagement</li>
              <li>Create fraudulent accounts</li>
              <li>Upload malware or harmful code</li>
            </ul>
            <p>
              <strong>Child Endangerment and Child Sexual Abuse Material (CSAM):</strong> We have a zero-tolerance policy for any content that endangers children or promotes, shares, or depicts Child Sexual Abuse Material.
            </p>
            <p>AntiRot reserves sole discretion in determining violations.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">11. INTELLECTUAL PROPERTY</h2>
            <p>Users may only upload content:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>They own</li>
              <li>They are licensed to use</li>
              <li>They are legally authorized to distribute</li>
            </ul>
            <p>Users may not upload copyrighted material /Music without authorization.</p>
            <p>Repeat infringement may result in account suspension or termination.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">12. AI SERVICES (ARO)</h2>
            <p>AntiRot may provide AI-powered features through Aro or future AI systems.</p>
            <p>AI-generated outputs:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Are provided for informational purposes.</li>
              <li>May contain inaccuracies.</li>
              <li>Should not be considered professional advice.</li>
            </ul>
            <p>Users remain responsible for decisions made based on AI-generated outputs.</p>
            <p>AntiRot does not guarantee the accuracy, completeness, or suitability of AI-generated content.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">13. CURRENT AFFAIRS AND OPINION DISCLAIMER</h2>
            <p>AntiRot facilitates user discussions regarding public affairs, social topics, and current events.</p>
            <p>Opinions expressed by users belong solely to the users who express them.</p>
            <p>Such opinions do not represent:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>AntiRot</li>
              <li>SMKAI Ventures Private Limited</li>
              <li>Employees</li>
              <li>Directors</li>
              <li>Investors</li>
              <li>Partners</li>
            </ul>
            <p>AntiRot acts solely as a platform provider.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">14. CREATOR MONETIZATION</h2>
            <p>Eligible creators may participate in monetization programs.</p>
            <p>Monetization opportunities may include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Support Payments</li>
              <li>Premium Creator Features</li>
              <li>Sponsorship Programs</li>
              <li>Future Revenue Programs</li>
            </ul>
            <p>Current Support Payment Distribution:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Creator: 60%</li>
              <li>Smkai: 40%</li>
            </ul>
            <p>after applicable taxes, payment processing charges, deductions, and compliance requirements.</p>
            <p>AntiRot reserves the right to modify revenue-sharing models with reasonable notice.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">15. TAX RESPONSIBILITY</h2>
            <p>Creators are solely responsible for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Tax filings</li>
              <li>GST obligations</li>
              <li>Income reporting</li>
              <li>Regulatory compliance</li>
            </ul>
            <p>relating to earnings received through AntiRot.</p>
            <p>AntiRot does not provide tax advice.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">16. PREMIUM SUBSCRIPTIONS</h2>
            <p>Certain features may require paid subscriptions.</p>
            <p>Premium benefits may include:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Additional participation limits</li>
              <li>Extended archives</li>
              <li>Enhanced creator features</li>
              <li>Exclusive platform tools</li>
            </ul>
            <p>Subscription benefits may evolve over time.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">17. REFUNDS</h2>
            <p>Unless otherwise required by applicable law:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Subscription payments are generally non-refundable.</li>
              <li>Digital purchases are generally non-refundable once consumed or activated.</li>
            </ul>
            <p>Specific refund policies may be published separately.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">18. ACCOUNT SUSPENSION AND TERMINATION</h2>
            <p>AntiRot may suspend, restrict, disable, or terminate accounts for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Policy violations</li>
              <li>Fraud</li>
              <li>Abuse</li>
              <li>Security risks</li>
              <li>Legal obligations</li>
              <li>Harmful conduct</li>
            </ul>
            <p>AntiRot reserves discretion in determining appropriate enforcement actions.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">19. PLATFORM AVAILABILITY</h2>
            <p>AntiRot strives to maintain service availability but does not guarantee uninterrupted access.</p>
            <p>The platform may experience:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Maintenance</li>
              <li>Updates</li>
              <li>Outages</li>
              <li>Technical disruptions</li>
            </ul>
            <p>AntiRot shall not be liable for temporary service interruptions.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">20. LIMITATION OF LIABILITY</h2>
            <p>To the maximum extent permitted by law:</p>
            <p>SMKAI Ventures Private Limited, its directors, employees, advisors, investors, affiliates, and partners shall not be liable for:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Indirect damages</li>
              <li>Consequential damages</li>
              <li>Loss of profits</li>
              <li>Loss of goodwill</li>
              <li>User-generated content</li>
              <li>Third-party conduct</li>
              <li>Platform interruptions</li>
            </ul>
            <p>arising from the use of AntiRot.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">21. INDEMNIFICATION</h2>
            <p>Users agree to indemnify and hold harmless AntiRot and SMKAI Ventures Private Limited from claims, liabilities, damages, losses, and expenses arising from:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>User content</li>
              <li>User conduct</li>
              <li>Violations of law</li>
              <li>Violations of these Terms</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">22. MODIFICATIONS TO TERMS</h2>
            <p>AntiRot reserves the right to modify these Terms at any time.</p>
            <p>Updated Terms become effective upon publication.</p>
            <p>Continued use of AntiRot constitutes acceptance of updated Terms.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">23. GOVERNING LAW</h2>
            <p>These Terms shall be governed by and interpreted in accordance with the laws of India.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">24. DISPUTE RESOLUTION</h2>
            <p>Any disputes arising from use of AntiRot shall first be attempted to be resolved through good-faith discussions.</p>
            <p>Where resolution is not possible, disputes shall be subject to the jurisdiction of competent courts in India.</p>
          </section>

          <section className="space-y-4 pb-8">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">25. CONTACT INFORMATION</h2>
            <div className="space-y-1">
              <p>SMKAI Ventures Private Limited</p>
              <p>
                Email:{' '}
                <a href="mailto:Antirot12@gmail.com" className="text-primary-default hover:underline">
                  [Antirot12@gmail.com]
                </a>
              </p>
              <p>
                Safety Contact / Child Safety Contact:{' '}
                <a href="mailto:Antirot12@gmail.com" className="text-primary-default hover:underline">
                  Antirot12@gmail.com
                </a>
              </p>
              <p>
                Website:{' '}
                <a href="https://smkaiventures.com" target="_blank" rel="noopener noreferrer" className="text-primary-default hover:underline">
                  [smkaiventures.com]
                </a>
              </p>
            </div>
            <p className="mt-4">For legal notices, complaints, policy concerns, or platform-related inquiries, users may contact the above details.</p>
          </section>
          
        </main>

        <footer className="mt-16 pt-8 border-t border-border-default text-center">
          <p className="text-sm text-text-tertiary">
            © 2026 Antirot. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};
