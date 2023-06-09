import { Nunito_Sans } from 'next/font/google'
import { Header } from '@/components'
import './globals.css'

const nunitoSans = Nunito_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Countries Web App',
  description: 'List of countries and their details',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true} >
      <body className={`${nunitoSans.className} bg-light-gray dark:bg-dark-blue-200 text-dark-blue-300 dark:text-white`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
