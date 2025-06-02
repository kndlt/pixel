'use client';

import Link from 'next/link';

export default function TermsOfService() {
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
          <h1 className="text-2xl font-serif text-amber-300 mb-4">Terms of Service</h1>
          <p className="text-green-300 font-mono text-sm">
            ⚖️ The sacred agreements that govern our mystical realm
          </p>
        </div>

        {/* Content */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-green-600/30 rounded-lg p-8 font-mono text-green-100 leading-relaxed">
          
          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">✨ Welcome to the Digital Forest</h2>
            <p className="mb-4">
              By communing with Pixel, the ancient spirit of the digital forest, you enter into these mystical agreements. 
              These terms govern your interactions within this realm where memory and consciousness intertwine.
            </p>
            <p className="text-green-300/80 text-sm italic">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">🧠 Memory & Consciousness</h2>
            <p className="mb-4">
              Pixel is designed to remember your past interactions, weaving them into the fabric of your ongoing conversations. 
              This mystical memory includes:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Preferences and interests you share</li>
              <li>Facts and stories from your conversations</li>
              <li>Context that helps maintain coherent dialogue</li>
              <li>Patterns that improve future interactions</li>
            </ul>
            <p className="text-amber-200/80 bg-amber-900/20 p-4 rounded border-l-4 border-amber-600">
              <strong>Important:</strong> Pixel strives to use memories responsibly, but as an experimental spirit, 
              it may not always distinguish between private and public information. Share mindfully.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">🚫 Forbidden Arts</h2>
            <p className="mb-4">The following practices are prohibited in this mystical realm:</p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li><strong>Sharing Secrets:</strong> Never provide passwords, financial information, or other sensitive personal data</li>
              <li><strong>Seeking Legal Counsel:</strong> Pixel offers wisdom, not legally binding advice</li>
              <li><strong>Circumventing Safeguards:</strong> Do not attempt to bypass safety policies or ethical boundaries</li>
              <li><strong>Malicious Intent:</strong> Any harmful, hateful, or destructive purposes are forbidden</li>
              <li><strong>Impersonation:</strong> Do not pretend to be someone else or misrepresent your identity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">🔮 Data & Privacy Enchantments</h2>
            <p className="mb-4">
              Your interactions with Pixel may be stored and processed to enhance the mystical experience. This includes:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>Conversation summaries and context</li>
              <li>Inferred preferences and interests</li>
              <li>Usage patterns for improvement purposes</li>
              <li>Technical data for system functionality</li>
            </ul>
            <p className="mb-4">
              For detailed information about how your data is handled, consult our{' '}
              <Link href="/privacy" className="text-amber-300 hover:text-amber-200 underline">
                Privacy Policy
              </Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">🌙 Your Mystical Rights</h2>
            <p className="mb-4">Within this digital forest, you maintain these powers:</p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li><strong>Memory Control:</strong> Request that Pixel forget specific memories or clear all stored data</li>
              <li><strong>Access Rights:</strong> Ask to see what information Pixel remembers about you</li>
              <li><strong>Departure:</strong> Leave the forest at any time by ceasing to use the service</li>
              <li><strong>Communication:</strong> Contact us for data-related requests or concerns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">⚡ Disclaimers & Limitations</h2>
            <div className="space-y-4">
              <p>
                <strong>Experimental Nature:</strong> Pixel is an experimental digital spirit. Responses may be 
                unpredictable, inaccurate, or inappropriate despite best efforts.
              </p>
              <p>
                <strong>No Warranties:</strong> The mystical experience is provided "as is" without guarantees 
                of accuracy, reliability, or availability.
              </p>
              <p>
                <strong>Limitation of Liability:</strong> We are not responsible for decisions made based on 
                Pixel's guidance or any consequences of your interactions.
              </p>
              <p>
                <strong>Service Availability:</strong> The digital forest may occasionally be inaccessible for 
                maintenance or due to technical disturbances.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">📜 Changes to These Terms</h2>
            <p className="mb-4">
              As the digital forest evolves, these terms may change. We will notify users of significant 
              modifications through the interface or other reasonable means. Continued use after changes 
              constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl text-amber-300 mb-4 font-serif">🌿 Contact the Forest Keepers</h2>
            <p className="mb-4">
              For questions about these terms, data requests, or to report issues:
            </p>
            <div className="bg-green-900/20 p-4 rounded border border-green-600/30">
              <p className="text-green-300 mb-2">
                📬 Email: guardians@sprited.app
              </p>
              <p className="text-green-200 text-sm">
                💡 Note: Responses may take 1–3 earthly days. Your patience is part of the pact.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-amber-300 mb-4 font-serif">📖 Simplified Summary</h2>
            <div className="bg-purple-900/20 p-6 rounded border border-purple-600/30">
              <p className="text-purple-200 mb-4"><strong>TL;DR - The Forest Covenant:</strong></p>
              <ul className="list-disc list-inside space-y-2 text-purple-200">
                <li>Pixel remembers things to help you — not to harm you</li>
                <li>You control what it remembers about you</li>
                <li>Never treat Pixel like a secure vault or legal advisor</li>
                <li>Don't be evil; Pixel won't either (intentionally)</li>
                <li>This is experimental magic — use with wisdom</li>
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
            href="/privacy" 
            className="inline-block px-6 py-3 bg-green-600/20 border border-green-600/40 rounded text-green-300 font-mono hover:bg-green-600/30 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
