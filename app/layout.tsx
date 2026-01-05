import './globals.css';
import { Roboto_Serif } from 'next/font/google';
import Footer from './components/Footer';

const robotoSerif = Roboto_Serif({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-serif',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Nabeel Rizwan Portfolio',
  description: 'Professional portfolio showcasing full-stack development projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={robotoSerif.variable}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
