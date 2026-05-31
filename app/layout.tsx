import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Standup Summarizer — Auto-summarize Slack standups for managers',
  description: 'Reads daily standup messages in Slack channels and creates executive summaries for engineering managers with remote teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="00534de2-e6e7-45dc-9727-9764104e8d2d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
