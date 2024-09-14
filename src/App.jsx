import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
const HomePage = lazy(() => import('./pages/Home/HomePage.jsx'));
const CatalogPage = lazy (()=>import('./pages/Catalog/CatalogPage.jsx'));
const CamperPage = lazy(() => import('./pages/Camper/CamperPage.jsx'));
const NotFoundPage = lazy(()=>import('./pages/NotFoundPage/NotFoundPage.jsx'));
const FeaturesCamper = lazy(()=>import('./components/FeaturesCamper/FeaturesCamper.jsx')) ;
const ReviewsCamper = lazy(()=>import('./components/ReviewsCampers/ReviewsCampers.jsx')) ;


import Layout from "./components/Layout/Layout.jsx";


const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperPage />}>
          <Route path="features" element={<FeaturesCamper />} />
          <Route path="reviews" element={<ReviewsCamper />} />
        </Route >
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
 )
}
export default App
