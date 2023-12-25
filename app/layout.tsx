import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster, toast } from 'sonner';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Servicios Digitales',
  description: 'Compra cualquier servicio digital',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <Toaster />
      <div className=' bg-gray-100'>
<div className=''>

        {children}
        
</div>
      </div>
      <Footer/>
        </body>
    </html>
  )
}
