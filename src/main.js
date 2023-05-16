import React from "react";
import { auth } from "./firebase";

const Mainpage = () => {
  const logout = () => {
    auth.signOut();
  };

  return (
    <div className="bg-emerald-500 flex items-center justify-center h-screen">
      <center>
        <h2 className="text-center text-white font-medium text-2xl">
          👍Login Success
        </h2>
        <h3 className="text-white font-medium">
          Welcome {auth.currentUser.phoneNumber}
        </h3>
        <button
          onClick={logout}
          className="mt-6 bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
        >
          <span>Logout</span>
        </button>
      </center>
    </div>
  );
};

export default Mainpage;
