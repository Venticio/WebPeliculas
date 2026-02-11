import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./shared/Header";
import { Footer } from "./shared/Footer";
import { Home } from "./features/home/Home";
import Movies from "./features/movies/Movies";
import MovieDetails from "./features/movies/MovieDetails";
import NotFound from "./shared/NotFound";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      
      <div className="min-h-screen flex flex-col">

        
        <Header />

        
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
