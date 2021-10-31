import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddPlaces from './pages/AddPlaces/AddPlaces';
import Booking from './pages/Booking/Booking/Booking';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import ManageBooking from './pages/ManageBooking/ManageBooking';
import MyBooking from './pages/MyBooking/MyBooking/MyBooking';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login> </Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path="/addplace">
              <AddPlaces></AddPlaces>
            </Route>
            <Route path="/booking/:id">
              <Booking></Booking>
            </Route>
            <Route path="/mybooking">
              <MyBooking></MyBooking>
            </Route>
            <Route path="/managebooking">
              <ManageBooking></ManageBooking>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
