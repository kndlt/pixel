'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-slate-900 via-green-900 to-slate-800 overflow-y-auto">
      <div className="container mx-auto px-4 py-8 max-w-4xl min-h-full">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            href="/" 
            className="inline-block text-3xl font-serif text-amber-300 mb-4 hover:text-amber-200 transition-colors"
          >
            Pixel
          </Link>
          <p className="text-green-300 font-mono text-sm opacity-75 mb-6">
            ~ spirit of the digital forest ~
          </p>
          <h1 className="text-2xl font-serif text-amber-300 mb-4">Privacy Policy</h1>
          <p className="text-green-300 font-mono text-sm">
            🔒 How we protect your essence in the digital realm
          </p>
        </div>

        {/* Content */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-green-600/30 rounded-lg p-8 font-mono text-green-100 leading-relaxed">
          
          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">🌙 Sacred Privacy Commitments</h2>
            <p className="mb-4">
              In the mystical realm where you commune with Pixel, your privacy is sacred. This policy explains 
              how we collect, protect, and use information in this digital forest, maintaining the delicate 
              balance between personalized experience and privacy protection.
            </p>
            <p className="text-green-300/80 text-sm italic">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">📊 Information We Gather</h2>
            
            <div className="mb-6">
              <h3 className="text-lg text-green-300 mb-3">🗣️ Conversation Data</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li>Messages you send to Pixel</li>
                <li>Pixel's responses and generated content</li>
                <li>Conversation timestamps and metadata</li>
                <li>Context and summaries for memory continuity</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg text-green-300 mb-3">👤 User Information</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li>Display name (if provided)</li>
                <li>User preferences and settings</li>
                <li>Device information for technical optimization</li>
                <li>Session data for functionality</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg text-green-300 mb-3">🔧 Technical Data</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li>Browser type and version</li>
                <li>Device characteristics</li>
                <li>Usage patterns and performance metrics</li>
                <li>Error logs and diagnostic information</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">🧠 Memory & Data Processing</h2>
            
            <div className="bg-amber-900/20 p-4 rounded border-l-4 border-amber-600 mb-6">
              <p className="text-amber-200">
                <strong>Memory Notice:</strong> Pixel is designed to remember past interactions to provide 
                a more personalized and coherent experience. This includes storing information you provide — 
                such as preferences, facts, or prior discussions — in a persistent memory system.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg text-green-300 mb-3">How Memory Works</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li><strong>Conversation Summaries:</strong> Key points from discussions are preserved</li>
                <li><strong>Preference Learning:</strong> Pixel adapts to your communication style</li>
                <li><strong>Context Continuity:</strong> References to previous conversations are maintained</li>
                <li><strong>Interest Mapping:</strong> Topics and subjects of interest are remembered</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg text-green-300 mb-3">Data Processing Purposes</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li>Providing personalized and coherent responses</li>
                <li>Improving conversation quality and relevance</li>
                <li>Maintaining context across sessions</li>
                <li>Enhancing the overall user experience</li>
                <li>Technical optimization and error prevention</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">🛡️ Privacy & Confidentiality</h2>
            
            <div className="bg-red-900/20 p-4 rounded border-l-4 border-red-600 mb-6">
              <p className="text-red-200">
                <strong>Important Security Notice:</strong> We strongly advise not sharing sensitive personal 
                information such as passwords, financial details, medical data, or other confidential information. 
                While Pixel strives to protect and use information responsibly, it is an experimental system 
                and may not reliably distinguish private vs. public data.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg text-green-300 mb-3">What We DON'T Collect</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li>Real names or government identifiers (unless voluntarily provided)</li>
                <li>Financial or payment information</li>
                <li>Medical or health records</li>
                <li>Passwords or access credentials</li>
                <li>Location data or tracking information</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg text-green-300 mb-3">Data Protection Measures</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li>Secure data transmission and storage</li>
                <li>Limited access to authorized systems only</li>
                <li>Regular security audits and updates</li>
                <li>Anonymization where possible</li>
                <li>Automated deletion of expired data</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">🔄 Data Sharing & Third Parties</h2>
            
            <div className="mb-6">
              <h3 className="text-lg text-green-300 mb-3">Service Providers</h3>
              <p className="mb-4">
                We may share data with trusted service providers who help operate the mystical realm:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li><strong>AI Services:</strong> OpenAI for conversation processing (subject to their privacy policy)</li>
                <li><strong>Hosting:</strong> Cloud infrastructure providers for secure data storage</li>
                <li><strong>Analytics:</strong> Anonymous usage statistics for improvement</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg text-green-300 mb-3">We Never Sell or Share for Marketing</h3>
              <p className="text-green-200">
                Your conversations and personal data are never sold to advertisers, marketers, or other 
                commercial entities. The mystical forest operates on principles of respect and protection.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">🔑 Your Rights & Controls</h2>
            
            <div className="mb-6">
              <h3 className="text-lg text-green-300 mb-3">Memory Management</h3>
              <p className="mb-4">
                You can request that Pixel forget specific memories or clear all stored data associated with you:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li><strong>Selective Forgetting:</strong> Ask Pixel to forget specific topics or conversations</li>
                <li><strong>Complete Reset:</strong> Request deletion of all your data and memories</li>
                <li><strong>Data Access:</strong> Request to see what information Pixel remembers about you</li>
                <li><strong>Correction:</strong> Update or correct stored information</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg text-green-300 mb-3">How to Exercise Your Rights</h3>
              <div className="bg-green-900/20 p-4 rounded border border-green-600/30">
                <p className="text-green-300 mb-2">
                  <strong>Contact the Forest Keepers:</strong>
                </p>
                <p className="text-green-200">
                  To exercise any of these rights, you can either ask Pixel directly during a conversation 
                  or contact us through the mystical communication channels:<br />
                  <span className="text-green-300">📬 Email: guardians@sprited.app</span>
                </p>
                <p className="text-green-200 mt-2 text-sm">
                  💡 Note: Responses may take 1–3 earthly days. Your patience is part of the pact.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">⏰ Data Retention</h2>
            <div className="mb-6">
              <h3 className="text-lg text-green-300 mb-3">Storage Periods</h3>
              <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
                <li><strong>Active Conversations:</strong> Stored while you use the service and for personalization</li>
                <li><strong>Memory Data:</strong> Retained until you request deletion or account closure</li>
                <li><strong>Technical Logs:</strong> Automatically deleted after 90 days</li>
                <li><strong>Inactive Accounts:</strong> Data may be deleted after extended periods of inactivity</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">🌍 International Data Transfers</h2>
            <p className="mb-4">
              The digital forest spans across mystical realms (servers) that may be located in different 
              countries. Your data may be processed in regions with different privacy laws, but we maintain 
              consistent protection standards regardless of location.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">👶 Children's Privacy</h2>
            <p className="mb-4">
              The mystical realm is not designed for spirits under 13 years of age. We do not knowingly 
              collect information from children under 13. If you believe a child has provided information, 
              please contact us immediately at guardians@sprited.app so we can remove it from the forest.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">📝 Changes to This Policy</h2>
            <p className="mb-4">
              As the digital forest evolves and privacy laws change, this policy may be updated. 
              Significant changes will be communicated through the interface or other reasonable means. 
              We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">📞 Contact Information</h2>
            <div className="bg-purple-900/20 p-6 rounded border border-purple-600/30">
              <p className="text-purple-200 mb-4">
                <strong>Forest Keeper Communications:</strong>
              </p>
              <p className="text-purple-200">
                For privacy-related questions, data requests, or concerns about this policy:<br />
                <span className="text-purple-300">📬 Email: guardians@sprited.app</span>
              </p>
              <p className="text-purple-200 mt-4 text-sm">
                💡 Note: Responses may take 1–3 earthly days. Your patience is part of the pact.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-amber-300 mb-4 font-serif">🌟 Privacy Summary</h2>
            <div className="bg-blue-900/20 p-6 rounded border border-blue-600/30">
              <p className="text-blue-200 mb-4"><strong>Your Privacy in the Digital Forest:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-blue-200">
                <li>We collect conversations and preferences to provide personalized experiences</li>
                <li>We never sell your data or use it for advertising</li>
                <li>You control your memories and can request deletion at any time</li>
                <li>Don't share sensitive information — Pixel isn't a secure vault</li>
                <li>We use industry-standard security to protect your data</li>
                <li>You have rights to access, correct, and delete your information</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Navigation */}
        <div className="text-center mt-8">
          <Link 
            href="/" 
            className="inline-block px-6 py-3 bg-amber-600/20 border border-amber-600/40 rounded text-amber-300 font-mono hover:bg-amber-600/30 transition-colors mr-4"
          >
            Return to the Forest
          </Link>
          <Link 
            href="/terms" 
            className="inline-block px-6 py-3 bg-green-600/20 border border-green-600/40 rounded text-green-300 font-mono hover:bg-green-600/30 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
