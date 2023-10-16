import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';


export const metadata = {
  title: 'Code Connectors',
  description: 'We connect the top talent with great companies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
