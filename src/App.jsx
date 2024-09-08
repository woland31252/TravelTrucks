// import HomePage from "./pages/home/homePage.jsx";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
const HomePage = lazy(() => import('./pages/Home/HomePage.jsx'));
const CatalogPage = lazy (()=>import('./pages/Catalog/CatalogPage.jsx'));
// const CamperDetailsPage = lazy(() => import('./pages/camper/CamperDetailsPage.jsx'));
const NotFoundPage = lazy(()=>import('./pages/NotFoundPage/NotFoundPage.jsx'));
// const MovieCast = lazy(()=>import('./components/MovieCast/MovieCast.jsx')) ;
// const MovieReviews = lazy(()=>import('./components/MovieReviews/MovieReviews.jsx')) ;


import Layout from "./components/Layout/Layout.jsx";


const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        {/* <Route path="/catalog/catalog:Id" element={<CamperDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route > */}
        <Route path="*" element={<NotFoundPage />} />
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
