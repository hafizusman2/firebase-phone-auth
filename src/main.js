import React from "react";
import { auth } from "./firebase";
import ChatRoom from "./ChatRoom";

const Mainpage = () => {
  const logout = () => {
    auth.signOut();
  };

  return (
    <div className="bg-emerald-500 flex items-center h-screen flex-col">
      <div className="mt-5 ">
        {/* <h2 className="text-center text-white font-medium text-2xl">
          👍Login Success
        </h2> */}
        <button
          onClick={logout}
          className="mt-6 bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
        >
          <span>Logout</span>
        </button>
        <h3 className="text-white font-medium text-2xl mt-5">
          Welcome {auth.currentUser.phoneNumber}
        </h3>
      </div>
      <section className="my-8">
        <ChatRoom />
      </section>
    </div>
  );
};

export default Mainpage;
