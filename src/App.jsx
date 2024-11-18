import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';

import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import Layout from './components/Layout/Layout';
import Loader from './components/Loader';

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));


function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  
 return isRefreshing ? (
    <Loader/>
 ) : (  <Layout>
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/>} redirectTo = "/contacts"/>} />
          <Route path="/login" element={<RestrictedRoute  component={<LoginPage />} redirectTo = "/contacts"/>} />
        <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/>}/>} />
        </Routes>
        </Layout>)
  
}

export default App;
