import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAtJDpq44bcXrFCKIoEzfr7meVYw9oti1E',
  authDomain: 'gafaoscura-980da.firebaseapp.com',
  projectId: 'gafaoscura-980da',
  storageBucket: 'gafaoscura-980da.firebasestorage.app',
  messagingSenderId: '303966296071',
  appId: '1:303966296071:web:2a702d074169d77d82f2a2'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)