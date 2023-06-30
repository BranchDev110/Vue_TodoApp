import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../utils/firebase";

export const createUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
}
