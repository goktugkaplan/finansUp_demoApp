import { initializeApp, getApps, getApp } from "firebase/app";
import {
    initializeAuth,
    getAuth,
    getReactNativePersistence,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_authDomain",
    projectId: "YOUR_projectId",
    storageBucket: "YOUR_storageBucket",
    messagingSenderId: "YOUR_messagingSenderId",
    appId: "YOUR_appId",
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
