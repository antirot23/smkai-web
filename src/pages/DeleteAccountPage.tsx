import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export const DeleteAccountPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary py-16 sm:py-24 px-6 sm:px-8 lg:px-12 selection:bg-primary-light selection:text-primary-dark">
      <Helmet>
        <title>Account Deletion - AntiRot</title>
      </Helmet>

      <div className="max-w-[800px] mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-text-primary mb-4">
            Account Deletion
          </h1>
          <p className="text-text-secondary text-lg">
            Understand how AntiRot handles your data when you delete your account.
          </p>
          <hr className="mt-10 border-border-default" />
        </header>

        <main className="space-y-12 text-[17px] leading-relaxed text-text-secondary font-sans">
          
          <div className="space-y-5">
            <p>
              At AntiRot, we respect your privacy and provide mechanisms for you to easily and securely delete your account and associated personal data.
            </p>
            <p>
              You can instantly delete your account directly through the <strong>AntiRot mobile app</strong> (Profile &gt; Manage Profile &gt; Delete account). Alternatively, you can submit a manual deletion request on this page.
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">What Happens When You Delete Your Account</h2>
            <p>We use a secure erasure pipeline that protects your privacy while preserving the integrity of shared community spaces.</p>
            
            <h3 className="text-xl font-medium text-text-primary mt-6 mb-2">1. Data Permanently Deleted</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>All active sessions, authentication tokens, and Push Notification identifiers.</li>
              <li>Your personal profile data, including your bio, profile picture, and background image.</li>
              <li>Your uploaded media and videos on our cloud storage.</li>
              <li>Your personal relationships (e.g., Followers, Blocks).</li>
              <li>Your targeted activities and personal notifications.</li>
            </ul>

            <h3 className="text-xl font-medium text-text-primary mt-6 mb-2">2. Data Anonymized and Retained</h3>
            <p>
              Because AntiRot is a collaborative platform built on shared conversations and communities, fully deleting messages would break conversational continuity for other users.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your core account record is anonymized. Your email address, username, callsign, and password are removed or randomized.</li>
              <li>Messages you sent in 1-on-1 chats and Tapris (communities) are retained but will appear as coming from a <strong>"Deleted User"</strong>.</li>
              <li>If you own a community (Tapri), ownership is deterministically transferred to the oldest active admin, moderator, or member so the community is not destroyed.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">How to Request Deletion via Web</h2>
            <p>
              If you no longer have access to the app, you can submit a manual account deletion request. To verify your identity, you must email us from the <strong>same email address</strong> associated with your AntiRot account and provide your AntiRot Callsign.
            </p>
            
            <div className="bg-bg-secondary p-6 rounded-lg mt-6 border border-border-default">
              <h3 className="text-lg font-medium text-text-primary mb-4">Manual Deletion Request</h3>
              <p className="mb-4">Click the button below to generate an email request, or manually send an email to <strong>Antirot12@gmail.com</strong> with the subject <strong>"Account Deletion Request"</strong>.</p>
              <a 
                href="mailto:Antirot12@gmail.com?subject=Account%20Deletion%20Request&body=Please%20delete%20my%20AntiRot%20account.%0A%0AMy%20Callsign:%20%0A%0A(Note:%20You%20must%20send%20this%20email%20from%20the%20address%20registered%20to%20your%20account%20so%20we%20can%20verify%20your%20identity.)"
                className="inline-block bg-primary-default text-white font-medium px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
              >
                Request Account Deletion
              </a>
            </div>
            
            <p className="text-sm mt-4 text-text-muted">
              Note: Manual requests may take up to 7-14 business days to process. For immediate deletion, please use the in-app option.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-text-primary tracking-tight mt-12 mb-6">Privacy Policy</h2>
            <p>
              For more comprehensive details on our data practices, please read our full <Link to="/privacy" className="text-primary-default hover:underline">Privacy Policy</Link>.
            </p>
          </section>

        </main>
      </div>
    </div>
  );
};
