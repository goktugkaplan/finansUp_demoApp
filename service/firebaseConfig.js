import { initializeApp, getApps, getApp } from "firebase/app";
import {
    initializeAuth,
    getAuth,
    getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyD0W-WMwmVUkM2b8fMzWN8oBnPOtnuN0DY",
    authDomain: "finansup-cf458.firebaseapp.com",
    projectId: "finansup-cf458",
    storageBucket: "finansup-cf458.appspot.com",
    messagingSenderId: "820190129468",
    appId: "1:820190129468:web:b8d170ba3846233a864239",
};

// Firebase app'i başlat (veya varsa al)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

let auth;

// React Native ortamında auth'u güvenle initialize et
if (typeof window === "undefined") {
    // React Native ortamıysa (node vs.)
    try {
        auth = initializeAuth(app, {
            persistence: getReactNativePersistence(AsyncStorage),
        });
    } catch (e) {
        // initializeAuth zaten yapılmış olabilir
        auth = getAuth(app);
    }
} else {
    // Web ortamında ise normal getAuth kullan
    auth = getAuth(app);
}

export { auth };
