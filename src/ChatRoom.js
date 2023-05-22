import React, { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "./firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  orderBy,
  limit,
  query,
} from "firebase/firestore";

const ChatRoom = () => {
  const dummy = useRef();
  const messagesRef = collection(firestore, "messages");
  const msgsQuery = query(messagesRef, orderBy("createdAt"), limit(25));

  const [messages] = useCollectionData(msgsQuery, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main className="max-w-screen-md mx-auto px-4 py-6">
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>

      <form
        className="max-w-screen-md mx-auto flex items-center"
        onSubmit={sendMessage}
      >
        <input
          className="flex-grow py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something nice"
        />

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg cursor-pointer"
          type="submit"
          disabled={!formValue}
        >
          🕊️
        </button>
      </form>
    </>
  );
};

const ChatMessage = (props) => {
  const { text, uid, photoURL } = props.message;
  console.log(props.message, "message");

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass} flex items-center mb-2`}>
        <img
          className="w-8 h-8 rounded-full mr-2"
          src={
            photoURL ||
            "https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_960_720.png"
          }
          alt="profile"
        />
        <p className="bg-gray-200 py-2 px-4 rounded-lg text-sm max-w-xs">
          {text}
        </p>
      </div>
    </>
  );
};

export default ChatRoom;
