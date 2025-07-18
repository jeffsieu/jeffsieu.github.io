import type { Metadata } from 'next';
import { Poppins, Geist_Mono, Changa_One } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { GoogleAnalytics } from '@next/third-parties/google';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const changaOne = Changa_One({
  variable: '--font-changa-one',
  weight: ['400'],
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jeff Sieu',
  description: "Hi, I'm Jeff Sieu!. I enjoy experimenting with UI/UX design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${geistMono.variable} ${changaOne.variable} antialiased`}
      >
        <ThemeProvider enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-CDZHJQ001N" />
    </html>
  );
}
