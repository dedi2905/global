import React from "react";
import { useStoreActions } from "easy-peasy";

const Modal = ({ children }) => {
  let setLike = useStoreActions((state) => state.comment.setLike);
  return (
    <div
      style={{
        zIndex: "100",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.900",
        position: "fixed",
        top: "0",
      }}
    >
      {children}
      <button onClick={setLike}></button>
    </div>
  );
};

export default Modal;
