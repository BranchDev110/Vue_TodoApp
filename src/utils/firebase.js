import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

import { firebaseConfig } from '../utils/config';

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword}