import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useDatabase(collectionName) {
  const db = getFirestore();
  const [snapshot, setSnapshot] = useState([]);
  useEffect(
    () =>
      onSnapshot(query(collection(db, collectionName)), (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) =>
          data.push({ ...doc.data(), id: doc.id })
        );
        setSnapshot(data);
      }),
    [db, collectionName]
  );
  return {
    snapshot,
    query: async (w = null) => {
      const q = w
        ? query(collection(db, collectionName), w)
        : query(collection(db, collectionName));
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => data.push({ ...doc.data(), id: doc.id }));
      return data;
    },
    get: async (id) => {
      const snap = await getDoc(doc(db, collectionName, id));
      return snap.exists() ? { ...snap.data(), id: id } : null;
    },
    add: (data) =>
      addDoc(collection(db, collectionName), {
        ...data,
        ts: serverTimestamp(),
      }),
    set: (id, data) =>
      setDoc(doc(db, collectionName, id), {
        ...data,
        ts: serverTimestamp(),
      }),
    remove: (id) => deleteDoc(doc(db, collectionName, id)),
  };
}
