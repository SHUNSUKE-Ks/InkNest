// src/services/chatService.js
import { db } from '../firebase';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc, // 追加
} from 'firebase/firestore';

// メッセージを送信
export const sendMessage = async (roomId, senderId, text) => {
  try {
    await addDoc(collection(db, `rooms/${roomId}/messages`), {
      senderId,
      text,
      timestamp: serverTimestamp(),
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// メッセージをリアルタイムで取得
export const getMessages = (roomId, callback) => {
  const q = query(
    collection(db, `rooms/${roomId}/messages`),
    orderBy("timestamp")
  );
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({ id: doc.id, ...doc.data() });
    });
    callback(messages);
  });
  return unsubscribe;
};

// メッセージを更新 (新規追加)
export const updateMessage = async (roomId, messageId, newText, newSenderId) => {
  try {
    const messageRef = doc(db, `rooms/${roomId}/messages`, messageId);
    const updateData = {
      updatedAt: serverTimestamp(), // 更新日時を追加
    };
    if (newText !== undefined) {
      updateData.text = newText;
    }
    if (newSenderId !== undefined) {
      updateData.senderId = newSenderId;
    }
    await updateDoc(messageRef, updateData);
  } catch (e) {
    console.error("Error updating message: ", e);
  }
};

// メッセージを削除 (新規追加)
export const deleteMessage = async (roomId, messageId) => {
  try {
    const messageRef = doc(db, `rooms/${roomId}/messages`, messageId);
    await deleteDoc(messageRef);
  } catch (e) {
    console.error("Error deleting message: ", e);
  }
};

// ルームを作成
export const createRoom = async (roomName) => {
  try {
    const docRef = await addDoc(collection(db, "rooms"), {
      name: roomName,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (e) {
    console.error("Error creating room: ", e);
  }
};

// ルームをリアルタイムで取得
export const getRooms = (callback) => {
  const q = query(collection(db, "rooms"), orderBy("createdAt"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const rooms = [];
    querySnapshot.forEach((doc) => {
      rooms.push({ id: doc.id, ...doc.data() });
    });
    callback(rooms);
  });
  return unsubscribe;
};
