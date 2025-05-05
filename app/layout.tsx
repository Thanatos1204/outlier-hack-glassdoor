import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Maxgen Technologies Reviews | Glassdoor Clone',
  description: 'Find out what employees are saying about Maxgen Technologies. Salaries, reviews, and more - all posted by employees working at Maxgen Technologies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}