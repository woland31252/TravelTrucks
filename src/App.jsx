// import HomePage from "./pages/home/homePage.jsx";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
const HomePage = lazy(() => import('./pages/home/homePage.jsx'));
// const Catalog = lazy (()=>import('./pages/catalog/catalogPage.jsx'));
// const Camper = lazy(() => import('./pages/camper/camperDetailsPage.jsx'));
// const NotFoundPage = lazy(()=>import('./pages/notFoundPage/notFoundPage.jsx'));
// const MovieCast = lazy(()=>import('./components/MovieCast/MovieCast.jsx')) ;
// const MovieReviews = lazy(()=>import('./components/MovieReviews/MovieReviews.jsx')) ;


import Layout from "./components/layout/layout.jsx";


const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<catalogPage />} />
        <Route path="/catalog/catalog:Id" element={<camperDetailsPage />}>
          {/* <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} /> */}
        </Route >
        <Route path="*" element={<notFoundPage />} />
      </Routes>
    </Layout>
 )
}

// function App() {
  
//   return (
//     <div>
//       <HomePage/>
//     </div>
//   )
// }

export default App
