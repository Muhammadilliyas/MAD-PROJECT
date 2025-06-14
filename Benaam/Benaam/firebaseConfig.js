import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBuG-1p3KkyWQLL0EP1moRRDZ8sSxYyA54",
  authDomain: "anonymous-social-media-1dec7.firebaseapp.com",
  projectId: "anonymous-social-media-1dec7",
  storageBucket: "anonymous-social-media-1dec7.appspot.com",
  messagingSenderId: "546081291986",
  appId: "1:546081291986:web:b410d52f9040107c15f70b"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

const db = getFirestore(app);

export { auth, db };

