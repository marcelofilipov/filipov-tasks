import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';
import { Login } from '../screens/Login';
import { Home } from '../screens/Home';

export function Routes() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    !user ? <Login /> : <Home />
  );
}
