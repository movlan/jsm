import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JS Mastery',
  description: 'JS Mastery Resources',
  other: {
    'theme-color': '#0c1319',
    'color-scheme': 'dark only',
    'twitter:image': 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.png',
    'twitter:card': 'summary_large_image',
    'og:url': 'bahram.dev',
    'og:image': 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.png',
    'og:type': 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
