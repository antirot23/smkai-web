import React from 'react';
import { SeoHead } from '@/seo/SeoHead';
import { PAGE_SEO } from '@/seo/siteConfig';
import { breadcrumbSchema, webPageSchema } from '@/seo/schema';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-16 sm:py-24 px-6 sm:px-8 lg:px-12 selection:bg-primary-light selection:text-primary-dark">
      <SeoHead
        page={PAGE_SEO.privacy}
        jsonLd={[
          webPageSchema(PAGE_SEO.privacy.title, PAGE_SEO.privacy.path, PAGE_SEO.privacy.description),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Privacy Policy', path: '/privacy' },
          ]),
        ]}
      />

      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-text-secondary text-lg">
            Last Updated: 19 November 2026
          </p>
          <hr className="mt-10 border-border-default" />
        </header>

        {/* Content */}
        <main className="space-y-12 text-[17px] leading-relaxed text-text-secondary font-sans">
          
          <div className="space-y-5">
            <p>
              This Privacy Policy explains how SMKAI Ventures Private Limited ("SMKAI", "AntiRot", "we", "our", or "us") collects, uses, stores, shares, and protects information when users access or use the AntiRot mobile application, website, products, services, communities, creator tools, and related features.
            </p>
            <p>
              AntiRot is designed as a structured thinking ecosystem where users participate through opinion-based discussions, short-form video responses ("Sip"), community spaces ("Chai Tapri"), collaborative activities, and other engagement features.
            </p>
            <p>
              By accessing or using AntiRot, you acknowledge that you have read and understood this Privacy Policy.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">1. WHO WE ARE</h2>
            <p>AntiRot is a product owned and operated by:</p>
            <p>SMKAI Ventures Private Limited</p>
            <p>The company develops and operates digital platforms, creator ecosystems, discussion communities, content-sharing tools, monetization services, and technology-enabled engagement products.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">2. INFORMATION WE COLLECT</h2>
            <p>We collect information necessary to provide, improve, secure, and operate the platform.</p>

            <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">2.1 Information You Provide</h3>
            <p>When creating or managing an account, we may collect:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Full Name</li>
              <li>Username</li>
              <li>Email Address</li>
              <li>Mobile Number</li>
              <li>Profile Photograph</li>
              <li>Bio and Profile Information</li>
              <li>Date of Birth</li>
              <li>Gender (optional)</li>
            </ul>
            <p>You may choose not to provide certain information, however some features may become unavailable.</p>

            <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">2.2 Content You Create</h3>
            <p>AntiRot collects content voluntarily uploaded or submitted by users, including:</p>
            
            <div className="mt-6 space-y-6">
              <div>
                <p className="font-medium text-text-primary mb-2">Sip Content</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Videos</li>
                  <li>Captions</li>
                  <li>Thumbnails</li>
                  <li>Hashtags</li>
                  <li>Question responses</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-text-primary mb-2">Chai Tapri Content</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Posts</li>
                  <li>Comments</li>
                  <li>Images</li>
                  <li>Community descriptions</li>
                  <li>Polls</li>
                  <li>Reactions</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-text-primary mb-2">Storytelling Content</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Story contributions</li>
                  <li>Collaborative writing submissions</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-text-primary mb-2">Debate Content</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Audio participation</li>
                  <li>Debate responses</li>
                  <li>Voting activity</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-text-primary mb-2">Brew &amp; Build Content</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Team submissions</li>
                  <li>Challenge responses</li>
                  <li>Team discussions</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">2.3 Communications</h3>
            <p>When contacting AntiRot or interacting with support services, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Emails</li>
              <li>Support tickets</li>
              <li>Chat conversations</li>
              <li>Feedback forms</li>
              <li>Survey responses</li>
            </ul>

            <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">2.4 Device and Technical Information</h3>
            <p>We automatically collect certain technical information including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Device Model</li>
              <li>Device Identifier</li>
              <li>Operating System</li>
              <li>Browser Information</li>
              <li>App Version</li>
              <li>Language Preferences</li>
              <li>IP Address</li>
              <li>Approximate Geographic Region</li>
              <li>Crash Logs</li>
              <li>Diagnostic Data</li>
            </ul>

            <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">2.5 Usage Information</h3>
            <p>We may collect information regarding:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Features used</li>
              <li>Time spent on platform</li>
              <li>Pages visited</li>
              <li>Communities joined</li>
              <li>Videos watched</li>
              <li>Content interactions</li>
              <li>Engagement patterns</li>
              <li>Session duration</li>
            </ul>
            <p>This information helps improve platform performance and user experience.</p>

            <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">2.6 Payment Information</h3>
            <p>For premium subscriptions, creator earnings, sponsorship participation, or future monetization programs, we may collect:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>UPI Details</li>
              <li>Bank Account Information</li>
              <li>Payment Preferences</li>
              <li>Tax Information</li>
              <li>GST Information (if applicable)</li>
              <li>KYC Documentation</li>
            </ul>
            <p>Payment card details are processed by authorized payment processors and are not stored directly by AntiRot.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">3. ANONYMOUS DEBATE FEATURE</h2>
            <p>Certain AntiRot features may allow users to participate anonymously.</p>
            <p>When participating in anonymous debates:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Your public identity may be hidden from participants.</li>
              <li>AntiRot may internally maintain a secure record linking the debate identity with the user account.</li>
              <li>Such records may only be accessed for moderation, security, fraud prevention, legal compliance, or dispute resolution purposes.</li>
            </ul>
            <p>Anonymous participation does not exempt users from community rules.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">4. HOW WE USE INFORMATION</h2>
            <p>We may use information to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Create and manage accounts</li>
              <li>Deliver platform services</li>
              <li>Personalize experiences</li>
              <li>Recommend relevant content</li>
              <li>Improve discussions and communities</li>
              <li>Process payments</li>
              <li>Prevent fraud</li>
              <li>Detect abuse</li>
              <li>Enforce platform policies</li>
              <li>Provide customer support</li>
              <li>Conduct analytics</li>
              <li>Improve security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">5. ARTIFICIAL INTELLIGENCE AND AUTOMATED SYSTEMS</h2>
            <p>AntiRot may use automated technologies, moderation tools, machine learning systems, or artificial intelligence tools to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Detect spam</li>
              <li>Identify harmful content</li>
              <li>Flag abuse</li>
              <li>Recommend content</li>
              <li>Improve platform quality</li>
              <li>Assist moderation teams</li>
            </ul>
            <p>Automated systems may assist decision-making but do not replace human review where required by law or company policy.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">6. CONTENT MODERATION</h2>
            <p>To maintain platform integrity, AntiRot may review, monitor, remove, restrict, or investigate content that violates:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Community Guidelines</li>
              <li>Applicable Laws</li>
              <li>Intellectual Property Rights</li>
              <li>Platform Safety Standards</li>
            </ul>
            <p>This may include both automated and human review.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">7. HOW WE SHARE INFORMATION</h2>
            <p>We do not sell personal information.</p>
            <p>Information may be shared only in the following circumstances:</p>

            <div className="mt-6 space-y-6">
              <div>
                <p className="font-medium text-text-primary mb-2">Service Providers</p>
                <p className="mb-2">With vendors providing:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Cloud Hosting</li>
                  <li>Analytics</li>
                  <li>Payment Processing</li>
                  <li>Customer Support</li>
                  <li>Security Services</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-text-primary mb-2">Legal Requirements</p>
                <p className="mb-2">Where required by:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Courts</li>
                  <li>Government Authorities</li>
                  <li>Law Enforcement Agencies</li>
                  <li>Regulatory Bodies</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-text-primary mb-2">Business Transfers</p>
                <p className="mb-2">If AntiRot undergoes:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Merger</li>
                  <li>Acquisition</li>
                  <li>Investment Transaction</li>
                  <li>Corporate Restructuring</li>
                </ul>
                <p>Information may be transferred subject to applicable laws.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">8. DATA RETENTION</h2>
            <p>AntiRot retains information only for as long as reasonably necessary to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Operate the platform</li>
              <li>Fulfill legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce agreements</li>
              <li>Maintain platform security</li>
            </ul>
            <p>Retention periods may vary depending on content type, account activity, legal requirements, and safety considerations.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">9. ACCOUNT & DATA DELETION</h2>
            <p>You may request the deletion of your account and personal data at any time.</p>
            <p><strong>How to delete your account:</strong></p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>In-App:</strong> Go to Profile &gt; Manage Profile &gt; Delete account.</li>
              <li><strong>On the Web:</strong> Visit our <a href="/delete-account" className="text-primary-default hover:underline">Account Deletion Page</a> for instructions on submitting a manual request.</li>
            </ul>
            <p className="mt-4">Upon successful deletion:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Your personal profile information, authentication sessions, and uploaded media will be permanently deleted.</li>
              <li>To maintain the integrity of shared communities and conversations, your shared messages (e.g., in Tapris or Chat Buddy) will be anonymized and appear as coming from a "Deleted User".</li>
              <li>Certain information may be retained where legally required or for security and fraud prevention purposes.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">10. SECURITY</h2>
            <p>AntiRot implements commercially reasonable safeguards including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Encryption</li>
              <li>Secure Authentication</li>
              <li>Access Controls</li>
              <li>Monitoring Systems</li>
              <li>Data Protection Procedures</li>
            </ul>
            <p>No system can guarantee absolute security, and users acknowledge this inherent risk.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">11. CHILDREN'S PRIVACY</h2>
            <p>AntiRot is not intended for children under the age of 13.</p>
            <p>Users under applicable legal age requirements should not use the platform without parental or guardian consent where required by law.</p>
            <p>If we learn that information has been collected from a child in violation of applicable law, reasonable efforts will be made to delete such information.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">12. YOUR RIGHTS</h2>
            <p>Subject to applicable law, users may have rights to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Access information</li>
              <li>Correct information</li>
              <li>Update information</li>
              <li>Delete information</li>
              <li>Restrict processing</li>
              <li>Object to processing</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            <p>Requests may be submitted through official support channels.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">13. INTERNATIONAL TRANSFERS</h2>
            <p>Information may be processed or stored in locations where AntiRot, its service providers, or partners operate.</p>
            <p>Appropriate safeguards may be implemented where required by law.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">
              14. THIRD-PARTY LINKS AND UNAUTHORISED ACCESS
            </h2>
            <p>
              AntiRot may contain links to third-party websites, communities, advertisers, sponsors or external
              services.
            </p>
            <p>
              SMKAI Ventures Private Limited does not sell, rent, trade or commercially disclose users' personal
              information to unauthorised third parties.
            </p>
            <p>
              No third party, individual, advertiser, creator, developer or external organisation is permitted to
              access, collect, extract, disclose, copy, distribute or misuse users' personal information without
              proper authorisation and a lawful basis.
            </p>
            <p>
              Access to personal information may be provided to authorised service providers and data processors
              strictly where necessary to operate, maintain, secure or improve AntiRot, subject to appropriate
              contractual confidentiality and data-protection obligations.
            </p>
            <p>
              The Company may disclose information where required by applicable law, a valid legal process or a
              competent government authority.
            </p>
            <p>
              AntiRot shall take reasonable technical and organisational measures to protect personal information
              against unauthorised access, disclosure, alteration, loss or misuse.
            </p>
            <p>
              Users should independently review the privacy policies of third-party platforms they choose to
              access.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">
              15. CHANGES TO THIS PRIVACY POLICY
            </h2>
            <p>
              SMKAI Ventures Private Limited reserves the right to revise, modify, update or replace this Privacy
              Policy from time to time to reflect changes in technology, business operations, applicable laws or
              data-protection practices.
            </p>
            <p>
              Updated versions shall be published on the official AntiRot website or within the application,
              together with the revised effective date.
            </p>
            <p>
              Where required by applicable law, users shall be notified of material changes and fresh consent
              shall be obtained where necessary.
            </p>
            <p>
              Continued use of AntiRot shall not override any consent or notification requirement imposed by
              applicable law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">
              16. CONTACT INFORMATION AND PRIVACY COMPLAINTS
            </h2>
            <p>
              For privacy-related concerns, personal data requests, complaints, security incidents or inquiries,
              users may contact:
            </p>
            <div className="mt-4 space-y-1">
              <p>Privacy Officer / Grievance Contact</p>
              <p>SMKAI Ventures Private Limited</p>
              <p>
                Email:{' '}
                <a href="mailto:Antirot12@gmail.com" className="text-primary-default hover:underline">
                  Antirot12@gmail.com
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
                <a
                  href="https://smkaiventures.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-default hover:underline"
                >
                  https://smkaiventures.com
                </a>
              </p>
            </div>
            <p className="mt-4">
              The Company shall address privacy complaints and requests in accordance with applicable laws and
              prescribed timelines.
            </p>
          </section>

          <section className="space-y-4 pb-8">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">
              17. INTELLECTUAL PROPERTY, COPYRIGHT AND UNAUTHORISED REPRODUCTION
            </h2>
            <p>
              This Privacy Policy, including its original written content, structure, presentation, organisation
              and other original materials, is the intellectual property of SMKAI Ventures Private Limited, to
              the extent protected by applicable intellectual property laws.
            </p>
            <p>© 2026 SMKAI Ventures Private Limited. All Rights Reserved.</p>
            <p>
              No individual, company, organisation, developer, website, application or third party may, without
              prior written permission from SMKAI Ventures Private Limited:
            </p>
            <ol className="list-decimal pl-6 space-y-2 mt-2 mb-4">
              <li>Reproduce or copy this Privacy Policy in whole or in substantial part.</li>
              <li>Republish, distribute or commercially exploit its original content.</li>
              <li>Modify, adapt or present substantial portions of this policy as their own original work.</li>
              <li>
                Use the Company's proprietary text, branding, documentation or other protected materials in
                another application, website or commercial product.
              </li>
              <li>
                Misrepresent any copied material as being officially associated with AntiRot or SMKAI Ventures
                Private Limited.
              </li>
            </ol>
            <p>
              Unauthorised use, reproduction, distribution or commercial exploitation of protected materials may
              result in appropriate legal action under applicable Indian intellectual property laws, including
              the Copyright Act, 1957, where applicable.
            </p>
            <p>
              Nothing in this section restricts independent creation, lawful use of public-domain materials,
              statutory rights or other uses permitted by applicable law.
            </p>
            <p>
              No ownership of users' personal information or user-generated content is claimed merely by virtue
              of this Privacy Policy. Such information and content shall be governed by their applicable terms,
              licences and legal rights.
            </p>
          </section>
        </main>

        <footer className="mt-16 pt-8 border-t border-border-default text-center">
          <p className="text-sm text-text-tertiary">
            © 2026 SMKAI Ventures Private Limited. All Rights Reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};
