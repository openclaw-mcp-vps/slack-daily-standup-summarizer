export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For Engineering Managers
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Auto-summarize your Slack standups
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Connect to your Slack workspace, monitor standup channels, and get AI-generated executive summaries delivered straight to you — no more reading through hundreds of messages.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Get Started — $10/mo
        </a>
        <div className="mt-8 grid grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">5 min</div>
            <div className="text-sm text-[#8b949e] mt-1">Setup time</div>
          </div>
          <div className="bg-[#161b22] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">AI</div>
            <div className="text-sm text-[#8b949e] mt-1">Powered summaries</div>
          </div>
          <div className="bg-[#161b22] rounded-lg p-4">
            <div className="text-2xl font-bold text-[#58a6ff]">Daily</div>
            <div className="text-sm text-[#8b949e] mt-1">Automated reports</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$10</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited Slack channels',
              'Daily AI executive summaries',
              'Slack OAuth integration',
              'Email delivery of reports',
              'Cancel anytime',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does it connect to Slack?',
              a: 'You authorize the app via Slack OAuth. It reads messages from channels you designate — no admin access required.',
            },
            {
              q: 'When are summaries generated?',
              a: 'Summaries are generated once per day after your team has posted their standups. You choose the cutoff time.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your billing portal at any time. No contracts, no questions asked.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm">{a}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
