import React from 'react';
import { Helmet } from 'react-helmet-async';

export const CommunityGuidelinesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-16 sm:py-24 px-6 sm:px-8 lg:px-12 selection:bg-primary-light selection:text-primary-dark">
      <Helmet>
        <title>Community Guidelines &amp; Copyright Policy - AntiRot</title>
      </Helmet>

      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary mb-4 leading-tight">
            ANTIROT COMMUNITY GUIDELINES And Copyright policy
          </h1>
          <p className="text-text-secondary text-lg">
            Effective Date: [ 21th June 2026]
          </p>
          <hr className="mt-10 border-border-default" />
        </header>

        {/* Content */}
        <main className="space-y-12 text-[17px] leading-relaxed text-text-secondary font-sans">
          
          <div className="space-y-5">
            <p>Welcome to AntiRot.</p>
            <p>AntiRot exists to encourage meaningful conversations, thoughtful opinions, collaborative learning, and constructive disagreement.</p>
            <p>Unlike conventional social media platforms, AntiRot is built around ideas, discussions, and intellectual participation rather than popularity contests or endless scrolling.</p>
            <p>By using AntiRot, you agree to follow these Community Guidelines.</p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">1. OUR COMMUNITY VALUES</h2>
            <p>Every feature inside AntiRot is designed around five principles:</p>
            
            <div className="mt-6 space-y-6">
              <div>
                <p className="font-medium text-text-primary mb-2">Curiosity</p>
                <p>Answer questions.</p>
                <p>Explore perspectives.</p>
                <p>Challenge ideas respectfully.</p>
              </div>

              <div>
                <p className="font-medium text-text-primary mb-2">Respect</p>
                <p>Attack ideas, not people.</p>
                <p>Disagreement is encouraged.</p>
                <p>Harassment is not.</p>
              </div>

              <div>
                <p className="font-medium text-text-primary mb-2">Authenticity</p>
                <p>Speak honestly.</p>
                <p>Do not impersonate others.</p>
                <p>Do not manipulate discussions through fake accounts.</p>
              </div>

              <div>
                <p className="font-medium text-text-primary mb-2">Responsibility</p>
                <p>Think before posting.</p>
                <p>Every contribution impacts the community.</p>
              </div>

              <div>
                <p className="font-medium text-text-primary mb-2">Constructive Participation</p>
                <p>AntiRot rewards thoughtful engagement rather than attention-seeking behavior.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">2. CONTENT WE ENCOURAGE</h2>
            <p>Users are encouraged to create:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Thoughtful Sip video opinions</li>
              <li>Constructive debate participation</li>
              <li>Educational content</li>
              <li>Creative storytelling</li>
              <li>Collaborative problem solving</li>
              <li>Current affairs discussions</li>
              <li>Personal perspectives</li>
              <li>Knowledge sharing</li>
              <li>Healthy disagreement</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">3. PROHIBITED CONTENT</h2>
            <p>The following content is prohibited anywhere on AntiRot.</p>

            <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">A. Hate Speech</h3>
            <p>Content attacking individuals or groups based on:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Race</li>
              <li>Ethnicity</li>
              <li>Nationality</li>
              <li>Religion</li>
              <li>Disability</li>
              <li>Gender</li>
              <li>Sexual orientation</li>
              <li>Age</li>
            </ul>
            <p className="mt-2">is prohibited.</p>

            <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">B. Harassment &amp; Bullying</h3>
            <p>You may not:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Threaten users</li>
              <li>Intimidate users</li>
              <li>Encourage harassment</li>
              <li>Organize bullying campaigns</li>
              <li>Repeatedly target individuals</li>
            </ul>

            <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">C. Violence &amp; Harm</h3>
            <p>Do not post:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Violent threats</li>
              <li>Graphic violence</li>
              <li>Instructions for harming others</li>
              <li>Terrorism-related content</li>
              <li>Criminal activity promotion</li>
            </ul>

            <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">D. Sexual Content &amp; Nudity</h3>
            <p>AntiRot is not an adult-content platform.</p>
            <p>The following are prohibited:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Pornographic content</li>
              <li>Explicit sexual activity</li>
              <li>Sexual exploitation</li>
              <li>Nudity intended for sexual gratification</li>
              <li>Adult advertising</li>
            </ul>
            <p className="mt-2">Educational or scientific discussions may be permitted when contextually relevant.</p>

            <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">E. Self-Harm &amp; Suicide Promotion</h3>
            <p>Content encouraging:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Self-harm</li>
              <li>Suicide</li>
              <li>Eating disorders</li>
              <li>Dangerous challenges</li>
            </ul>
            <p className="mt-2">is prohibited.</p>

            <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">F. Misinformation</h3>
            <p>Users must not knowingly spread:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>False information</li>
              <li>Manipulated media</li>
              <li>Fabricated news</li>
              <li>Fraudulent claims</li>
            </ul>
            <p className="mt-2">Current Affairs Adda discussions must remain grounded in factual sources whenever possible.</p>

            <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">G. Illegal Activities</h3>
            <p>Do not use AntiRot for:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Fraud</li>
              <li>Scams</li>
              <li>Identity theft</li>
              <li>Money laundering</li>
              <li>Drug trafficking</li>
              <li>Piracy</li>
              <li>Unauthorized sales</li>
            </ul>

            <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">H. Spam</h3>
            <p>Prohibited activities include:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Mass posting</li>
              <li>Repetitive comments</li>
              <li>Engagement manipulation</li>
              <li>Artificial boosting</li>
              <li>Bot activity</li>
            </ul>

            <h3 className="text-xl font-medium text-text-primary mt-8 mb-4">I. Platform Manipulation</h3>
            <p>Users may not:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Create fake accounts</li>
              <li>Buy followers</li>
              <li>Sell engagement</li>
              <li>Artificially influence rankings</li>
              <li>Abuse voting systems</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">4. SIP-SPECIFIC RULES</h2>
            <p>Sip videos are central to AntiRot.</p>
            <p>Therefore:</p>
            <p>Every Sip must answer a valid AntiRot Question.</p>
            <p>Users may not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Upload unrelated videos</li>
              <li>Upload random content</li>
              <li>Upload entertainment-only videos with no connection to the question</li>
            </ul>
            <p>AntiRot may remove content that does not contribute meaningfully to the associated discussion.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">5. CURRENT AFFAIRS ADDA RULES</h2>
            <p>To maintain quality discussions:</p>
            <p>Users may:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Share opinions</li>
              <li>Share arguments</li>
              <li>Share supporting images</li>
            </ul>
            <p className="mt-4">Users may not:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Spam threads</li>
              <li>Post unrelated content</li>
              <li>Flood discussions</li>
            </ul>
            <p>One user may post only one opinion per headline unless editing their original response.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">6. ANONYMOUS DEBATE RULES</h2>
            <p>Anonymous Debate exists to evaluate arguments, not identities.</p>
            <p>Participants may not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Reveal another participant's identity</li>
              <li>Attempt to dox users</li>
              <li>Harass opposing teams</li>
            </ul>
            <p>Debates are judged on arguments, not personal attacks.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">7. STORYTELLING (PASS THE CUP)</h2>
            <p>Users must:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Contribute original sentences</li>
              <li>Respect the collaborative nature of the story</li>
            </ul>
            <p className="mt-4">Do not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Intentionally sabotage stories</li>
              <li>Post offensive content</li>
              <li>Insert spam or advertisements</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">8. BREW &amp; BUILD</h2>
            <p>Challenges are designed to encourage teamwork.</p>
            <p>Users may not:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Cheat</li>
              <li>Manipulate results</li>
              <li>Use multiple accounts</li>
              <li>Interfere with team activities</li>
            </ul>
            <p>Repeated abuse may lead to suspension.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">9. CREATOR RESPONSIBILITIES</h2>
            <p>Creators managing public Tapris must:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Enforce community standards</li>
              <li>Moderate discussions</li>
              <li>Remove harmful content where possible</li>
            </ul>
            <p>Failure to moderate public communities may result in restrictions.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">10. REPORTING &amp; ENFORCEMENT</h2>
            <p>Users may report:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Abuse</li>
              <li>Harassment</li>
              <li>Copyright violations</li>
              <li>Spam</li>
              <li>Fraud</li>
              <li>Policy violations</li>
            </ul>
            <p className="mt-4">Reports may be reviewed by:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
              <li>Human moderators</li>
              <li>Automated systems</li>
              <li>Future ARO moderation tools</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">11. ENFORCEMENT ACTIONS</h2>
            <p>AntiRot may take actions including:</p>
            
            <div className="mt-6 space-y-6">
              <div>
                <p className="font-medium text-text-primary mb-2">Warning</p>
                <p>For first-time minor violations.</p>
              </div>
              
              <div>
                <p className="font-medium text-text-primary mb-2">Content Removal</p>
                <p>Specific posts may be removed.</p>
              </div>

              <div>
                <p className="font-medium text-text-primary mb-2">Feature Restrictions</p>
                <p>Users may lose access to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Sip uploads</li>
                  <li>Debates</li>
                  <li>Tapri creation</li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-text-primary mb-2">Temporary Suspension</p>
                <p>Accounts may be suspended for repeated violations.</p>
              </div>

              <div>
                <p className="font-medium text-text-primary mb-2">Permanent Ban</p>
                <p>Severe violations may result in permanent removal.</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">12. ZERO-TOLERANCE VIOLATIONS</h2>
            <p>The following may lead to immediate termination:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Child exploitation</li>
              <li>Terrorism promotion</li>
              <li>Human trafficking</li>
              <li>Extreme violence</li>
              <li>Sexual abuse material</li>
              <li>Serious threats</li>
              <li>Large-scale fraud</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">13. OUR PHILOSOPHY</h2>
            <p>AntiRot was created because social media increasingly rewards outrage, addiction, and passive consumption.</p>
            <p>Our goal is different.</p>
            <p>We want to build a platform where:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
              <li>Questions matter.</li>
              <li>Opinions have value.</li>
              <li>Curiosity is rewarded.</li>
              <li>Conversations create growth.</li>
            </ul>
            <p>Every user helps shape that mission.</p>
          </section>

          {/* Copyright Policy Section */}
          <div className="pt-16 mt-16 border-t border-border-default">
            <header className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary mb-4 leading-tight">
                ANTIROT COPYRIGHT POLICY
              </h1>
              <p className="text-text-secondary text-lg">
                Effective Date: [ 21 June 2026]
              </p>
            </header>

            <div className="space-y-5">
              <p>This Copyright Policy explains how AntiRot handles ownership, intellectual property rights, copyright infringement claims, and user-generated content.</p>
            </div>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">1. OWNERSHIP OF ANTIROT</h2>
              <p>The following are owned exclusively by SMKAI Ventures Private Limited:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                <li>AntiRot name</li>
                <li>AntiRot branding</li>
                <li>AntiRot logos</li>
                <li>ARO mascot</li>
                <li>Platform design</li>
                <li>User interface elements</li>
                <li>Proprietary software</li>
                <li>Source code</li>
                <li>Databases</li>
                <li>Algorithms</li>
                <li>Platform-generated content</li>
              </ul>
              <p>All rights reserved.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">2. USER OWNERSHIP OF CONTENT</h2>
              <p>Users retain ownership of content they create, including:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                <li>Sip videos</li>
                <li>Profile content</li>
                <li>Images</li>
                <li>Comments</li>
                <li>Stories</li>
                <li>Debate contributions</li>
                <li>Written posts</li>
              </ul>
              <p>Ownership remains with the creator.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">3. LICENSE GRANTED TO ANTIROT</h2>
              <p>When content is uploaded, users grant AntiRot a:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Worldwide</li>
                <li>Non-exclusive</li>
                <li>Royalty-free</li>
                <li>Transferable</li>
                <li>Sub-licensable</li>
              </ul>
              <p className="mt-4">license to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2 mb-4">
                <li>Host</li>
                <li>Store</li>
                <li>Display</li>
                <li>Distribute</li>
                <li>Promote</li>
                <li>Recommend</li>
              </ul>
              <p>their content solely for operating and improving the platform.</p>
              <p>This license ends when content is deleted, except where retention is legally required.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">4. USER WARRANTIES</h2>
              <p>By uploading content, users confirm that:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
                <li>They own the content OR</li>
                <li>They possess legal permission to use it</li>
              </ul>
              <p>and that uploading does not violate third-party rights.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">5. PROHIBITED COPYRIGHT VIOLATIONS</h2>
              <p>Users may not upload:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
                <li>Movies they do not own</li>
                <li>TV clips without authorization</li>
                <li>Copyrighted music without permission</li>
                <li>Books or articles copied without authorization</li>
                <li>Protected artwork</li>
                <li>Software piracy material</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">6. FAIR USE</h2>
              <p>AntiRot recognizes lawful fair-use principles where applicable.</p>
              <p>Examples may include:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
                <li>Commentary</li>
                <li>Criticism</li>
                <li>Education</li>
                <li>Research</li>
                <li>News reporting</li>
              </ul>
              <p>AntiRot reserves the right to evaluate claims individually.</p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">7. COPYRIGHT COMPLAINT PROCESS</h2>
              <p>Rights holders may submit notices containing:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
                <li>Full name</li>
                <li>Contact details</li>
                <li>Proof of ownership</li>
                <li>Identification of copyrighted work</li>
                <li>Identification of allegedly infringing content</li>
                <li>Statement made in good faith</li>
              </ul>
              <p>Complaints may be submitted to:</p>
              <p>
                <a href="mailto:smkaiventures.com" className="text-primary-default hover:underline">
                  (official designated email) smkaiventures.com
                </a>
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">8. RESPONSE TO COMPLAINTS</h2>
              <p>Upon receiving a valid complaint, AntiRot may:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
                <li>Remove content</li>
                <li>Restrict access</li>
                <li>Request additional information</li>
                <li>Suspend repeat infringers</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">9. REPEAT INFRINGERS</h2>
              <p>Users repeatedly violating copyright laws may face:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
                <li>Account restrictions</li>
                <li>Suspension</li>
                <li>Permanent account termination</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">10. ARO-GENERATED CONTENT</h2>
              <p>Where future AI-generated content is produced by ARO:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
                <li>Users remain responsible for verifying outputs.</li>
                <li>AI-generated outputs may not always be unique.</li>
                <li>AntiRot does not guarantee copyright ownership of AI-generated suggestions.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">11. TRADEMARKS</h2>
              <p>Users may not use:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2 mb-4">
                <li>AntiRot word, The UI/UX</li>
                <li>ARO, it’s design</li>
                <li>SMKAI Ventures</li>
              </ul>
              <p>or confusingly similar marks in a manner that suggests official affiliation without written permission.</p>
            </section>

            <section className="space-y-4 pb-8">
              <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">12. COPYRIGHT CONTACT</h2>
              <p>Copyright-related inquiries may be sent to:</p>
              <div className="mt-4 space-y-1">
                <p>SMKAI Ventures Private Limited</p>
                <p>
                  Email:{' '}
                  <a href="mailto:smkaiventures.com" className="text-primary-default hover:underline">
                    [smkaiventures.com]
                  </a>
                </p>
                <p>Grievance Officer: [Anshul Maheshwari ]</p>
              </div>
            </section>
          </div>
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
