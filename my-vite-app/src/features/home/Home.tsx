import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="relative overflow-hidden bg-white min-h-screen flex flex-col">
      {/* Contenedor principal que ocupa todo el espacio */}
      <div className="flex-grow flex items-center justify-center">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start lg:items-center gap-16">
          
          {/* Texto principal y botón */}
          <div className="flex-shrink-0 sm:max-w-lg lg:max-w-md text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your favorite movies here!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Enjoy the best movies of all time here!
            </p>
            <Link
              to="/movies"
              className="mt-8 inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
            >
              Movie catalog
            </Link>
          </div>

          {/* Imágenes decorativas */}
          <div className="flex flex-wrap justify-start gap-6 lg:gap-8">
            {/* Columna 1 */}
            <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                <img
                  src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
                  alt="Poster 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  src="https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg"
                  alt="Poster 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Columna 2 */}
            <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
                  alt="Poster 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  src="https://image.tmdb.org/t/p/w500/6ELCZlTA5lGUops70hKdB83WJxH.jpg"
                  alt="Poster 4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  src="https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg"
                  alt="Poster 5"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Columna 3 */}
            <div className="grid grid-cols-1 gap-y-6 lg:gap-y-8">
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  src="https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg"
                  alt="Poster 6"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 w-44 overflow-hidden rounded-lg">
                <img
                  src="https://image.tmdb.org/t/p/w500/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg"
                  alt="Poster 7"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
