"use client"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-neutral-800 bg-neutral-950 text-neutral-400">

      <div className="max-w-6xl mx-auto px-6 py-10 text-center">

        <p className="text-sm mb-4">
          © {currentYear} Menno Coolen. Alle rechten voorbehouden.
        </p>

        <div className="flex justify-center gap-6 text-sm">

          <Link
            href="/terms-of-agreement"
            className="hover:text-white transition"
          >
            Algemene Voorwaarden
          </Link>

          <Link
            href="/copyright-regulations"
            className="hover:text-white transition"
          >
            Copyright
          </Link>

          <Link
            href="/cookie-settings"
            className="hover:text-white transition"
          >
            Cookies
          </Link>

        </div>

      </div>

    </footer>
  )
}
