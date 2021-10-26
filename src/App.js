import React,{useState, useEffect} from 'react'
import { Switch, Route, Redirect } from 'react-router';
import { auth, createUserProfileDocument} from './firebase/firebase.utils';
import { onSnapshot } from '@firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.component';

import './App.css';
import Checkout from './pages/checkout/checkout.component';

function App() {

  const currentUser = useSelector(state => state.user).currentUser;
  const dispatch = useDispatch();
  useEffect(() => {
    const authCancelToken = auth.onAuthStateChanged(async userAuth => {
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          onSnapshot(userRef, (snapShot) => {
            const currentUser = {
              id: snapShot.id,
              ...snapShot.data()
            };
            dispatch(setCurrentUser(currentUser))
          });
          dispatch(setCurrentUser(userAuth))
        }
    });
    return () => authCancelToken();
  }, [])

  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={ Homepage }/>
        <Route path='/shop' component={ ShopPage }/>
        <Route exact path='/checkout' component={ Checkout }/>
        <Route exact path='/sign-in' render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
      </Switch>
    </>
  );
}

export default App;
