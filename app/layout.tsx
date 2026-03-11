import { AppToaster } from "@/components/ui/toast"
import GlobalNavbar from "@/components/GlobalNavbar"
import Footer from "@/components/Footer"

import Script from "next/script"
import GoogleAnalyticsTracker from "@/components/GoogleAnalyticsTracker"

import { Montserrat } from "next/font/google"

import "./globals.css"


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})


export const metadata = {
  title: "Menno Coolen – Foto Portfolio",
  description: "Portfolio van fotografische werken en projecten van Menno Coolen",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>

      <body className={`${montserrat.className} bg-neutral-950 text-white`}>

        <GoogleAnalyticsTracker />

        <GlobalNavbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />

        <AppToaster />

      </body>

    </html>
  )
}