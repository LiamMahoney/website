import type { Metadata } from 'next'
import Script from 'next/script';
import { Inter } from 'next/font/google'
import './globals.css'
import Shell from '@/components/Shell/shell';
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Liam Mahoney',
    description: "Liam Mahoney's personal website.",
}

type Props = {
    children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <Providers>
                    <Shell>
                        {children}
                    </Shell>
                </Providers>
            </body>
        </html>
    )
}
