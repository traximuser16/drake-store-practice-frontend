import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import ReduxProvider from "@/redux/ReduxProvider"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={inter.className}>
        <ReduxProvider>
          {/* <nav>nav</nav> */}
          {children}
          {/* <Footer /> */}
        </ReduxProvider>
      </body>
    </html>
  )
}