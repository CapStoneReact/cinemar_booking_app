import React, { lazy, Suspense } from 'react';
// import ErrorBoundary from './Components/ErrorBoudary/ErrorBoudary';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeTemplate from './Templates/HomeTemplate';
import LoadingPage from './Components/LoadingPage/LoadingPage';

const HomePage = lazy(() => import('./Pages/Homepgae/Homepage.jsx'))
const Login = lazy(() => import('./Pages/Login/Login'));


// const GlobalStyle = lazy(() => import('./GlobalStyle'));
const Register = lazy(() => import('./Pages/Register/Register'));
// const Checkout = lazy(() => import('Pages/Checkout/Checkout'));
// const ProtectedRoute = lazy(() => import('Routes/ProtectedRoute'));
// const AddMovie = lazy(() => import('Pages/AddMovie/AddMovie'));

function App() {
  return (
    // <ErrorBoundary>
    <Suspense fallback={<LoadingPage />}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<HomeTemplate />}>
            {/* <Route path='contact' element={<Contact />}></Route> */}
            <Route path='login' element={<Login />}></Route>
            <Route path='Register' element={<Register />}></Route>
            {/* <Route path='about' element={<About />}></Route> */}
            {/* <Route path='checkout' element={
                <ProtectedRoute>
                  <Checkout />
                </ProtectedRoute>}></Route> */}
            {/* <Route path='movies/add' element={<AddMovie />}></Route> */}
            <Route index element={<HomePage />}></Route>
            <Route path='*' element={<Navigate to={''} />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>

    // </ErrorBoundary>

  );
}

export default App;
