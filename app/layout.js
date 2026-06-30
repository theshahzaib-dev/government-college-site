import './globals.css'; // Make sure standard tailwind directives exist here
import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import ScrollToTop from '@/components/global/ScrollToTop';

export const metadata = {
  title: 'Government Graduate College of Excellence',
  description: 'A premium static educational showcase platform built for excellence.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-50 text-slate-800 antialiased min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}