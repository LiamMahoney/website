import type { Metadata } from 'next'
import './globals.css'
import Shell2 from '@/components/Shell2/shell2';
import { Providers } from './providers'
 
export const metadata: Metadata = {
    title: 'Liam Mahoney',
    description: "Liam Mahoney's personal website.",
    viewport: "width=device-width, initial-scale=1.0"
}

type Props = {
    children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <Providers>
                    <Shell2>
                        {children}
                    </Shell2>
                </Providers>
            </body>
        </html>
    )
}
