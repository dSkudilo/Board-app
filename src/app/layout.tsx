import { Geist, Geist_Mono } from 'next/font/google';
import './_/globals.css';
import { StoreProvider } from '@/app/_/providers';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-secondary text-primary`}
      >
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
