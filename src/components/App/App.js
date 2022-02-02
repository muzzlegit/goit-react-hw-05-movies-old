import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {BallTriangle} from "react-loader-spinner";
import 'react-toastify/dist/ReactToastify.css';
import '../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { Container } from './App.styled';

const Navigation = lazy(() => import('../../components/Navigation/Navigation'/* webpackChunkName: "Navigation" */));
const HomePage = lazy(() => import('../../views/HomePage/HomePage'/* webpackChunkName: "homePage" */));
const MoviesPage = lazy(() => import('../../views/MoviesPage/MoviesPage'/* webpackChunkName: "moviesPage" */));
const MovieDetailsPage = lazy(() => import('../../views/MovieDetailsPage/MovieDetailsPage'/* webpackChunkName: "movieDetailsPage" */));
const Cast = lazy(() => import('../../views/Cast/Cast'/* webpackChunkName: "cast" */));
const Reviews = lazy(() => import('../../views/Reviews/Reviews'/* webpackChunkName: "reviews" */));
const NotFoundView = lazy(() => import('../../components/NotFoundView/NotFoundView'/* webpackChunkName: "reviews" */));

export default function App() {
  return (
    <Container>
      <Suspense fallback={<BallTriangle color="#00BFFF" height={ 50 } width={ 100 } ariaLabel="loading-indicator"/>}>
      <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="movies" element={<MoviesPage />}/>
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={
                <Suspense fallback={<BallTriangle color="#00BFFF" height={ 50 } width={ 100 } ariaLabel="loading-indicator"/>}>
                  <Cast />
                </Suspense>
              }/>
              <Route path="reviews" element={
                <Suspense fallback={<BallTriangle color="#00BFFF" height={ 50 } width={ 100 } ariaLabel="loading-indicator"/>}>
                  <Reviews />
                </Suspense>}/>
          </Route>
          <Route path="*" element={<NotFoundView />}></Route>
        </Routes>   
      </Suspense>
      <ToastContainer />
    </Container>
  );
}
