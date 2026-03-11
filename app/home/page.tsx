export default function HomePage() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/img/1.JPEG')" }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
          Menno Coolen Photography
        </h1>
        <p className="mt-4 text-xl text-gray-200 max-w-2xl">
          Een selectie van mijn beste werken. Klik hieronder om de volledige galerie
          te bekijken.
        </p>
        <a
          href="/project1"
          className="mt-8 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
        >
          Bekijk de galerij
        </a>
      </div>
    </div>
  )
}
