import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-2xl mx-auto px-5 h-14 flex items-center">
          <span className="font-semibold text-sm">Faishal Pasa</span>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-5">
        <section className="py-20">
          <p className="text-sm font-medium text-gray-400 dark:text-gray-500 mb-3">
            Error 404
          </p>
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            Halaman tidak ditemukan
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
            Halaman yang kamu cari tidak ada atau sudah dipindahkan.
          </p>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Kembali ke Beranda
          </button>
        </section>
      </main>

      <footer className="border-t border-gray-100 dark:border-gray-800 py-8 mt-4">
        <div className="max-w-2xl mx-auto px-5 text-center text-xs text-gray-400 dark:text-gray-600">
          © {new Date().getFullYear()} Faishal Pasa
        </div>
      </footer>
    </div>
  )
}

export default NotFoundPage
