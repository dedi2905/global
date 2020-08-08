import React from "react";
import ButtonLike from "../../button/ButtonLike";
import { useStoreState, useStoreActions } from "easy-peasy";
import Modal from "../../modal/Modal";
import Card from "../../card/Card";
const HomePage = () => {
  const nama = useStoreState((state) => state.dataSiswa.nama);
  let hide = useStoreState((state) => state.handleState.hide);
  let setHide = useStoreActions((state) => state.handleState.setHide);
  return (
    <>
      {hide && (
        <Modal>
          <span
            style={{
              position: "absolute",
              left: "20px",
              top: "20px",
              color: "red",
              fontWeight: "600",
              cursor: "pointer",
            }}
            onClick={setHide}
          >
            X
          </span>

          <h1 style={{ color: "#aeae" }}> selamat datang </h1>
        </Modal>
      )}
      <div>
        <h1>HomePage</h1>
        {nama.map((e) => {
          return (
            <ul>
              <li>{e}</li>
            </ul>
          );
        })}
        <ButtonLike />
        <Card />
      </div>
    </>
  );
};

export default HomePage;
