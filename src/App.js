import React, { lazy, Suspense } from 'react';
import ErrorBoundary from './Components/ErrorBoudary/ErrorBoudary';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomeTemplate from './Templates/HomeTemplate';
import LoadingPage from './Components/LoadingPage/LoadingPage';
import { useSelector } from 'react-redux';
import UserInfor from './Pages/UserInfor/UserInfor';
import BookingTicket from './Pages/BookingTicket/BookingTicket';

const HomePage = lazy(() => import('./Pages/Homepgae/Homepage.jsx'))
const Login = lazy(() => import('./Pages/Login/Login'));


const Register = lazy(() => import('./Pages/Register/Register'));
// const Checkout = lazy(() => import('Pages/Checkout/Checkout'));
// const ProtectedRoute = lazy(() => import('Routes/ProtectedRoute'));
// const AddMovie = lazy(() => import('Pages/AddMovie/AddMovie'));

function App() {
  const { user } = useSelector((state) => state.auth);;
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingPage />}>
        <BrowserRouter>
          <Routes>
            <Route path='' element={<HomeTemplate />}>
              {/* <Route path='contact' element={<Contact />}></Route> */}
              {user == null && <Route path='login' element={<Login />}></Route>}
              {user == null && <Route path='Register' element={<Register />}></Route>}
              {user != null && <Route path='account-info/:taiKhoan' element={<UserInfor />}></Route>}
              {user != null && <Route path='bookticket/:id' element={<BookingTicket />}></Route>}
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

    </ErrorBoundary>

  );
}

export default App;
