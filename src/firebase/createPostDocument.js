import {
  collection,
  doc,
  getDocs,
  serverTimestamp,
  query,
  setDoc,
  where,
  getDoc,
} from "firebase/firestore";
import { db } from "./config";

export const createPostDocument = async (post) => {
  const { postId, userId, text, like } = post;
  const docRef = doc(db, `posts/${postId}`);

  await setDoc(docRef, {
    userId,
    text,
    like,
  });
};

export const readPostDocument = async () => {
  const q = query(collection(db, "posts"));
  const querySnapshot = await getDocs(q);
  const posts = querySnapshot.docs.map((snap) => snap.data());
  return posts;
};
