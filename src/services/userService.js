// src/services/userService.js
import { db } from '../firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, onSnapshot, getDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const usersCollectionRef = collection(db, 'users');
const storage = getStorage();

// ユーザーを追加
export const addUser = async (name, avatarFile) => {
  let avatarUrl = '';
  if (avatarFile) {
    const storageRef = ref(storage, `avatars/${avatarFile.name}_${Date.now()}`);
    const metadata = {
      contentType: avatarFile.type,
      customMetadata: {
        'userName': name,
        'uploadTime': new Date().toISOString()
      }
    };
    await uploadBytes(storageRef, avatarFile, metadata);
    avatarUrl = await getDownloadURL(storageRef);
  }

  const newUser = {
    name,
    avatar: avatarUrl,
  };
  const docRef = await addDoc(usersCollectionRef, newUser);
  return { id: docRef.id, ...newUser };
};

// ユーザーをリアルタイムで取得
export const getUsers = (callback) => {
  const unsubscribe = onSnapshot(usersCollectionRef, (snapshot) => {
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(users);
  });
  return unsubscribe;
};

// ユーザーを削除
export const deleteUser = async (userId) => {
  const userDocRef = doc(db, 'users', userId);
  await deleteDoc(userDocRef);
};

// ユーザー情報を取得 (単一)
export const getUser = async (userId) => {
  const userDocRef = doc(db, 'users', userId);
  const docSnap = await getDoc(userDocRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    console.log("No such document!");
    return null;
  }
};
