import { useState } from "react";
import { Modal } from "antd";
import "./App.css";

function App() {
  const [mouseover, setMouseover] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [buttonStyles, setButtonStyles] = useState({
    width: "300px",
    height: "50px",
    opacity: 1,
  });
  const [textStyles, setTextStyles] = useState({
    fontSize: "24px",
    opacity: 1,
  });

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const buttonRect = document
      .getElementById("noButton")
      .getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    const distance = Math.sqrt(
      (mouseX - buttonX) ** 2 + (mouseY - buttonY) ** 2,
    );

    if (distance < 100) {
      setShowImage(true);
      setButtonStyles({
        ...buttonStyles,
        width: `${parseInt(buttonStyles.width) - 5}px`,
        height: `${parseInt(buttonStyles.height) - 5}px`,
        opacity: buttonStyles.opacity - 0.1,
      });
      setTextStyles({
        ...textStyles,
        fontSize: `${parseInt(textStyles.fontSize) - 1}px`,
        opacity: textStyles.opacity - 0.1,
      });
    } else {
      setShowImage(false);
    }
  };

  const handleMouseOver = () => {
    const newX = Math.floor(Math.random() * (window.innerWidth - 150));
    const newY = Math.floor(Math.random() * (window.innerHeight - 150));

    setMouseover({ x: newX, y: newY });
  };

  const handleAgreeClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-gradient flex h-screen w-full items-center justify-center">
      <img
        className="h-[250px] w-[250px]"
        src={
          showImage
            ? "https://media.giphy.com/media/bhpBJiz45YjYeGRsRB/giphy.gif?cid=ecf05e47dnom34wouqm1cl8d38absxdmprn08u1439dfx7mi&ep=v1_stickers_search&rid=giphy.gif&ct=s"
            : "https://media.giphy.com/media/AITCIirtebHDnlayNj/giphy.gif?cid=ecf05e47dnom34wouqm1cl8d38absxdmprn08u1439dfx7mi&ep=v1_stickers_search&rid=giphy.gif&ct=s"
        }
        alt="image"
      />
      <div className="">
        <h1 className="font-serif text-3xl text-[50px] font-bold text-[#de4c5b]">
          Làm người yêu của tớ nhé?
        </h1>

        <div className="button-container">
          <div
            className="m-5  rounded-md bg-[#de4c5b] px-9 py-2 font-mono"
            style={{ width: "200px", height: "50px" }}
          >
            <button
              className=" text-[white]"
              style={{ fontSize: "24px" }}
              onClick={handleAgreeClick}
            >
              Đồng ý
            </button>
          </div>

          <div
            id="noButton"
            className="m-5 rounded-md bg-[#de4c5b] px-9 py-2 font-mono"
            style={{
              position: "absolute",
              top: mouseover.y,
              left: mouseover.x,
              width: buttonStyles.width,
              height: buttonStyles.height,
              opacity: buttonStyles.opacity,
              transition: "all 0.4s",
            }}
            onMouseOver={handleMouseOver}
            onMouseMove={handleMouseMove}
          >
            <button
              className=" text-[white]"
              style={{
                fontSize: textStyles.fontSize,
                opacity: textStyles.opacity,
              }}
            >
              Không bao giờ
            </button>
          </div>
        </div>
      </div>

      <Modal
        onCancel={() => setShowModal(false)} // Close the modal when canceled
        centered
        open={showModal}
        footer={null}
        width={800}
        className="p-0"
      >
        {/* Add your login form or content here */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <img src="https://media.giphy.com/media/VgNk3XyaEibn5ggYQs/giphy.gif?cid=ecf05e47imzau9nojyuvr89pjue3dew8yb461bupinz5v0z6&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="image" />
        <p className="text-3xl font-bold text-[#de4c5b] font-mono">Tớ yêu cậu!!!</p>

        <p className="text-3xl font-bold text-[black] font-mono">Tối mình gặp nhau đi chơi nha?</p>

        <button className=" px-3 py-2 text-white bg-[#de4c5b] rounded-md font-mono" onClick={closeModal}>Đã đến bước này rồi thì mình gặp nhau nhá!!!</button>
      </div>
      </Modal>
    </div>
  );
}

export default App;
