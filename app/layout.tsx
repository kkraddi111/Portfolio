import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kiran Raddi - Frontend Developer & MCA Student',
  description: 'Portfolio of Kiran Raddi - Frontend Developer and MCA student passionate about building clean, user-focused web applications.',
  keywords: ['Frontend Developer', 'Web Development', 'React', 'Next.js', 'Portfolio', 'Kiran Raddi'],
  authors: [{ name: 'Kiran Raddi' }],
  creator: 'Kiran Raddi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
